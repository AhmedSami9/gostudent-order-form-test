import type { PaymentMethod, PricingPlan } from "../../types/order";
import type { TranslationKey } from "../../data/translations";

type OrderSummaryProps = {
  selectedPlan: PricingPlan;
  paymentMethod: PaymentMethod;
  t: (key: TranslationKey) => string;
};

const paymentLabelKeys: Record<PaymentMethod, TranslationKey> = {
  "credit-card": "creditCard",
  paypal: "paypal",
  "bank-transfer": "bankTransfer",
};

export default function OrderSummary({
  selectedPlan,
  paymentMethod,
  t,
}: OrderSummaryProps) {
  const discountAmount =
    selectedPlan.regularPrice - selectedPlan.finalPrice;

  return (
    <aside className="summary-panel">
      <div className="summary-card">
        <p className="eyebrow">{t("orderOverview")}</p>

        <h2>
          {selectedPlan.sessions} {t("sessionsPackage")}
        </h2>

        <div className="summary-row">
          <span>{t("monthlySessions")}</span>
          <strong>{selectedPlan.sessions}</strong>
        </div>

        <div className="summary-row">
          <span>{t("regularPrice")}</span>
          <strong>€{selectedPlan.regularPrice}</strong>
        </div>

        <div className="summary-row">
          <span>{t("discount")}</span>
          <strong className="discount-value">
            -€{discountAmount}
          </strong>
        </div>

        <div className="summary-row">
          <span>{t("selectedPayment")}</span>
          <strong>{t(paymentLabelKeys[paymentMethod])}</strong>
        </div>

        <div className="summary-total">
          <span>{t("total")}</span>
          <strong>€{selectedPlan.finalPrice}</strong>
        </div>

        <p className="summary-note">
          {t("satisfaction")}
        </p>
      </div>
    </aside>
  );
}
