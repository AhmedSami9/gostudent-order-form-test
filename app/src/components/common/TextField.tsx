type TextFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
};

export default function TextField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}: TextFieldProps) {
  return (
    <div className="field">
      <label htmlFor={name} className="field-label">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className={`field-input ${error ? "field-input-error" : ""}`}
      />

      {error && <p className="field-error">{error}</p>}
    </div>
  );
}
