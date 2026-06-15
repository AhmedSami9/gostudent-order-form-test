import PlanSelector from "./PlanSelector";
import TextField from "../common/TextField";
import Button from "../common/Button";
import type { OrderFormData, PricingPlan } from "../../types/order";
import type { OrderFormErrors, OrderFormTouched } from "../../utils/validation";
import PaymentMethod from "./PaymentMethod";
import type { TranslationKey } from "../../data/translations";
import PhoneField from "../common/PhoneField";
import { countries } from "../../data/countries";
import PaymentDetails from "./PaymentDetails";

type RegistrationFormProps = {
  formData: OrderFormData;
  plans: PricingPlan[];
  errors: OrderFormErrors;
  isSubmitting: boolean;
  onChange: (data: OrderFormData) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  touched: OrderFormTouched;
  isSubmitted: boolean;
  onBlur: (field: keyof OrderFormData) => void;
  t: (key: TranslationKey) => string;
  isSuccess: boolean;
};

export default function RegistrationForm({
  formData,
  plans,
  errors,
  touched,
  isSubmitted,
  isSubmitting,
  onChange,
  onBlur,
  onSubmit,
  t,
  isSuccess,
}: RegistrationFormProps) {
  const selectedPlan =
    plans.find((plan) => plan.id === formData.selectedPlanId) || plans[0];
  const selectedCountry =
    countries.find((country) => country.code === formData.countryCode) ||
    countries[0];

  function getError(field: keyof OrderFormData) {
    return touched[field] || isSubmitted ? errors[field] : undefined;
  }

  return (
    <form onSubmit={onSubmit} className="order-form">
      <PlanSelector
        plans={plans}
        selectedPlanId={formData.selectedPlanId}
        onChange={(planId) => onChange({ ...formData, selectedPlanId: planId })}
        t={t}
      />

      <div className="form-grid form-grid-two">
        <TextField
          label={t("firstName")}
          name="firstName"
          placeholder={t("firstNamePlaceholder")}
          value={formData.firstName}
          error={getError("firstName")}
          onBlur={() => onBlur("firstName")}
          onChange={(value) => onChange({ ...formData, firstName: value })}
        />

        <TextField
          label={t("lastName")}
          name="lastName"
          placeholder={t("lastNamePlaceholder")}
          value={formData.lastName}
          error={getError("lastName")}
          onBlur={() => onBlur("lastName")}
          onChange={(value) => onChange({ ...formData, lastName: value })}
        />
      </div>

      <TextField
        label={t("email")}
        name="email"
        type="email"
        placeholder={t("emailPlaceholder")}
        value={formData.email}
        error={getError("email")}
        onBlur={() => onBlur("email")}
        onChange={(value) => onChange({ ...formData, email: value })}
      />

      <PhoneField
        label={t("phone")}
        name="phone"
        value={formData.phone}
        countryCode={formData.countryCode}
        placeholder={selectedCountry.phonePlaceholder}
        error={getError("phone")}
        onBlur={() => onBlur("phone")}
        onChange={(value) => onChange({ ...formData, phone: value })}
      />

      <div className="form-grid form-grid-three">
        <div className="form-wide">
          <TextField
            label={t("address")}
            name="address"
            placeholder={t("addressPlaceholder")}
            value={formData.address}
            error={getError("address")}
            onBlur={() => onBlur("address")}
            onChange={(value) => onChange({ ...formData, address: value })}
          />
        </div>

        <TextField
          label={t("postalCode")}
          name="postalCode"
          placeholder={selectedCountry.postalCodePlaceholder}
          value={formData.postalCode}
          error={getError("postalCode")}
          onBlur={() => onBlur("postalCode")}
          onChange={(value) => onChange({ ...formData, postalCode: value })}
        />
      </div>

      <TextField
        label={t("city")}
        name="city"
        placeholder={selectedCountry.cityPlaceholder}
        value={formData.city}
        error={getError("city")}
        onBlur={() => onBlur("city")}
        onChange={(value) => onChange({ ...formData, city: value })}
      />

      <PaymentMethod
        value={formData.paymentMethod}
        onChange={(value) => onChange({ ...formData, paymentMethod: value })}
        t={t}
      />

      <PaymentDetails
        formData={formData}
        errors={errors}
        touched={touched}
        isSubmitted={isSubmitted}
        t={t}
        onChange={onChange}
        onBlur={onBlur}
      />

      <label className="terms-box">
        {getError("acceptTerms") && (
          <p className="field-error">{getError("acceptTerms")}</p>
        )}
        <input
          type="checkbox"
          checked={formData.acceptTerms}
          onBlur={() => onBlur("acceptTerms")}
          onChange={(event) =>
            onChange({
              ...formData,
              acceptTerms: event.target.checked,
            })
          }
        />

        <span>{t("terms")}</span>
      </label>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting
          ? t("processing")
          : `${t("orderNow")} ${selectedPlan.sessions} ${t("sessions")}`}
      </Button>

      {isSuccess && (
        <div className="success-message">{t("orderSubmittedSuccessfully")}</div>
      )}
    </form>
  );
}
