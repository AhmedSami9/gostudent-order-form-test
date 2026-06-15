import { useState } from "react";
import type { LocaleCode } from "../../types/order";
import { ArrowDownIcon, LanguageIcon } from "./icons";

type LanguageOption = {
  code: LocaleCode;
  label: string;
  shortLabel: string;
};

type LanguageSwitcherProps = {
  value: LocaleCode;
  onChange: (localeCode: LocaleCode) => void;
};

const languages: LanguageOption[] = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "ar", label: "العربية", shortLabel: "AR" },
];

export default function LanguageSwitcher({
  value,
  onChange,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage =
    languages.find((language) => language.code === value) || languages[0];

  function handleChange(localeCode: LocaleCode) {
    onChange(localeCode);
    setIsOpen(false);
  }

  return (
    <div className="language-toolbar" aria-label="Language">
      <div className="language-buttons">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            className={`language-button ${
              value === language.code ? "language-button-active" : ""
            }`}
            onClick={() => handleChange(language.code)}
          >
            <span>{language.label}</span>
          </button>
        ))}
      </div>

      <div className={`language-menu ${isOpen ? "language-menu-open" : ""}`}>
        <button
          type="button"
          className="language-menu-trigger"
          aria-expanded={isOpen}
          aria-controls="language-menu-list"
          onClick={() => setIsOpen((current) => !current)}
        >
          <LanguageIcon />
          <span>{selectedLanguage.shortLabel}</span>
          <ArrowDownIcon />
        </button>

        <div className="language-menu-list" id="language-menu-list">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              className={`language-menu-item ${
                value === language.code ? "language-menu-item-active" : ""
              }`}
              onClick={() => handleChange(language.code)}
            >
              <span>{language.label}</span>
              <span>{language.shortLabel}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
