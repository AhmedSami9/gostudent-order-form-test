import type { OrderFormData } from "../../types/order";
import type { OrderFormErrors, OrderFormTouched } from "../../utils/validation";
import type { TranslationKey } from "../../data/translations";

type PaymentDetailsProps = {
  formData: OrderFormData;
  errors: OrderFormErrors;
  touched: OrderFormTouched;
  isSubmitted: boolean;
  t: (key: TranslationKey) => string;
  onChange: (updatedData: OrderFormData) => void;
  onBlur: (field: keyof OrderFormData) => void;
};

export default function PaymentDetails({
  formData,
  errors,
  touched,
  isSubmitted,
  t,
  onChange,
  onBlur,
}: PaymentDetailsProps) {
  if (formData.paymentMethod !== "credit-card") {
    return null;
  }

  function getError(field: keyof OrderFormData) {
    return touched[field] || isSubmitted ? errors[field] : undefined;
  }

  function updateField(field: keyof OrderFormData, value: string) {
    onChange({
      ...formData,
      [field]: value,
    });
  }

  function formatCardNumber(value: string) {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }

  function formatExpiry(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 4);

    if (digits.length <= 2) {
      return digits;
    }

    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }

  function formatCvc(value: string) {
    return value.replace(/\D/g, "").slice(0, 4);
  }

  return (
    <section className="payment-details">
      <h2 className="section-title">{t("paymentDetails")}</h2>

      <div className="form-grid form-grid-two">
        <label>
          <span className="field-label">{t("cardHolder")}</span>
          <input
            className={`field-input ${getError("cardHolder") ? "field-input-error" : ""}`}
            value={formData.cardHolder}
            placeholder={t("cardHolderPlaceholder")}
            onChange={(event) => updateField("cardHolder", event.target.value)}
            onBlur={() => onBlur("cardHolder")}
          />
          {getError("cardHolder") && (
            <p className="field-error">{getError("cardHolder")}</p>
          )}
        </label>

        <label>
          <span className="field-label">{t("cardNumber")}</span>
          <input
            className={`field-input ${getError("cardNumber") ? "field-input-error" : ""}`}
            value={formData.cardNumber}
            placeholder="1234 5678 9012 3456"
            inputMode="numeric"
            onChange={(event) =>
              updateField("cardNumber", formatCardNumber(event.target.value))
            }
            onBlur={() => onBlur("cardNumber")}
          />
          {getError("cardNumber") && (
            <p className="field-error">{getError("cardNumber")}</p>
          )}
        </label>

        <label>
          <span className="field-label">{t("cardExpiry")}</span>
          <input
            className={`field-input ${getError("cardExpiry") ? "field-input-error" : ""}`}
            value={formData.cardExpiry}
            placeholder="MM/YY"
            inputMode="numeric"
            onChange={(event) =>
              updateField("cardExpiry", formatExpiry(event.target.value))
            }
            onBlur={() => onBlur("cardExpiry")}
          />
          {getError("cardExpiry") && (
            <p className="field-error">{getError("cardExpiry")}</p>
          )}
        </label>

        <label>
          <span className="field-label">{t("cardCvc")}</span>
          <input
            className={`field-input ${getError("cardCvc") ? "field-input-error" : ""}`}
            value={formData.cardCvc}
            placeholder="CVC"
            inputMode="numeric"
            onChange={(event) =>
              updateField("cardCvc", formatCvc(event.target.value))
            }
            onBlur={() => onBlur("cardCvc")}
          />
          {getError("cardCvc") && (
            <p className="field-error">{getError("cardCvc")}</p>
          )}
        </label>
      </div>
    </section>
  );
}
