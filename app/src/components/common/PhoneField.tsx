import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import type { CountryCode } from "../../types/order";

type PhoneFieldProps = {
  label: string;
  name: string;
  value: string;
  countryCode: CountryCode;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
};

export default function PhoneField({
  label,
  value,
  countryCode,
  placeholder,
  error,
  onChange,
  onBlur,
}: PhoneFieldProps) {
  return (
    <label>
      <span className="field-label">{label}</span>

      <PhoneInput
        className={`phone-control ${error ? "field-input-error" : ""}`}
        international
        defaultCountry={countryCode}
        countryCallingCodeEditable={false}
        value={value}
        placeholder={placeholder}
        onChange={(phoneValue) => onChange(phoneValue || "")}
        onBlur={onBlur}
      />

      {error && <p className="field-error">{error}</p>}
    </label>
  );
}