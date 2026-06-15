import type { PricingPlan } from "../../types/order";
import type { TranslationKey } from "../../data/translations";

type PlanSelectorProps = {
  plans: PricingPlan[];
  selectedPlanId: number;
  onChange: (planId: number) => void;
  t: (key: TranslationKey) => string;
};

export default function PlanSelector({
  plans,
  selectedPlanId,
  onChange,
  t,
}: PlanSelectorProps) {
  return (
    <div className="plan-selector">
      <label className="field-label">
        {t("selectPackage")}
      </label>

      <div className="plan-grid">
        {plans.map((plan) => {
          const isActive = selectedPlanId === plan.id;

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => onChange(plan.id)}
              className={`plan-card ${isActive ? "plan-card-active" : ""}`}
            >
              <h3>
                {plan.sessions}
              </h3>

              <span className="plan-label">
                {t("sessions")}
              </span>

              <strong className="plan-price">
                €{plan.finalPrice}
              </strong>

              {plan.discountPercentage > 0 && (
                <span className="plan-discount">
                  {t("save")} {plan.discountPercentage}%
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
