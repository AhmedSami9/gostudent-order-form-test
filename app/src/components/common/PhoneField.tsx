import type { CountryCode } from "../../types/order";
import { countries } from "../../data/countries";

type PhoneFieldProps = {
  label: string;
  name: string;
  value: string;
  countryCode: CountryCode;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
};

export default function PhoneField({
  label,
  name,
  value,
  countryCode,
  placeholder,
  error,
  onChange,
  onBlur,
}: PhoneFieldProps) {
  const selectedCountry =
    countries.find((country) => country.code === countryCode) || countries[0];

  return (
    <div className="field">
      <label htmlFor={name} className="field-label">
        {label}
      </label>

      <div className={`phone-control ${error ? "field-input-error" : ""}`}>
        <div className="phone-prefix">
          <span className={`country-flag ${selectedCountry.flagClass}`} aria-hidden="true" />
          <span>{selectedCountry.dialCode}</span>
        </div>

        <input
          id={name}
          name={name}
          type="tel"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          className="phone-input"
        />
      </div>

      {error && <p className="field-error">{error}</p>}
    </div>
  );
}
