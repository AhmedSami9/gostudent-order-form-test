import type { PaymentMethod as PaymentMethodType } from "../../types/order";
import type { TranslationKey } from "../../data/translations";

type PaymentMethodProps = {
  value: PaymentMethodType;
  onChange: (value: PaymentMethodType) => void;
  t: (key: TranslationKey) => string;
};

const paymentMethods: {
  labelKey: TranslationKey;
  value: PaymentMethodType;
  descriptionKey: TranslationKey;
}[] = [
  {
    labelKey: "creditCard",
    value: "credit-card",
    descriptionKey: "creditCardDescription",
  },
  {
    labelKey: "paypal",
    value: "paypal",
    descriptionKey: "paypalDescription",
  },
  {
    labelKey: "bankTransfer",
    value: "bank-transfer",
    descriptionKey: "bankTransferDescription",
  },
];

export default function PaymentMethod({
  value,
  onChange,
  t,
}: PaymentMethodProps) {
  return (
    <div className="payment-selector">
      <label className="field-label">{t("paymentMethod")}</label>

      <div className="payment-list">
        {paymentMethods.map((method) => {
          const isActive = value === method.value;

          return (
            <button
              key={method.value}
              type="button"
              onClick={() => onChange(method.value)}
              className={`payment-card ${isActive ? "payment-card-active" : ""}`}
            >
              <div>
                <p className="payment-title">{t(method.labelKey)}</p>
                <p className="payment-description">
                  {t(method.descriptionKey)}
                </p>
              </div>

              <span
                className={`payment-radio ${isActive ? "payment-radio-active" : ""}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
