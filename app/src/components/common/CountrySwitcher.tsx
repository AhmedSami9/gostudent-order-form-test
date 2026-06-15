import type { CountryCode } from "../../types/order";
import { countries } from "../../data/countries";

type CountrySwitcherProps = {
  value: CountryCode;
  onChange: (countryCode: CountryCode) => void;
};

export default function CountrySwitcher({
  value,
  onChange,
}: CountrySwitcherProps) {
  return (
    <div className="country-switcher" aria-label="Country">
      {countries.map((country) => (
        <button
          key={country.code}
          type="button"
          onClick={() => onChange(country.code)}
          className={`country-button ${
            value === country.code ? "country-button-active" : ""
          }`}
          title={country.name}
        >
          <span className={`country-flag ${country.flagClass}`} aria-hidden="true" />
          <span>{country.code}</span>
        </button>
      ))}
    </div>
  );
}
