import { useState } from "react";
import { pricingService } from "./services/pricing.service";
import type { LocaleCode, OrderFormData } from "./types/order";
import OrderSummary from "./components/order/OrderSummary";
import RegistrationForm from "./components/form/RegistrationForm";
import BrandHero from "./components/landing/BrandHero";
import {
  validateOrderForm,
  type OrderFormErrors,
  type OrderFormTouched,
} from "./utils/validation";
import CountrySwitcher from "./components/common/CountrySwitcher";
import LanguageSwitcher from "./components/common/LanguageSwitcher";
import { useTranslation } from "./hooks/useTranslation";
import { WhatsAppIcon } from "./components/common/icons";
import { contact, contactLinks } from "./config/contact";
const initialFormData: OrderFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  selectedPlanId: 2,
  paymentMethod: "credit-card",
  acceptTerms: false,
  countryCode: "AE",
  cardHolder: "",
  cardNumber: "",
  cardExpiry: "",
  cardCvc: "",
};

function scrollToFirstError(errors: OrderFormErrors) {
  const firstErrorField = Object.keys(errors)[0] as
    | keyof OrderFormData
    | undefined;

  if (!firstErrorField) return;

  const element = document.querySelector(
    `[name="${firstErrorField}"]`,
  ) as HTMLElement | null;

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  setTimeout(() => {
    element.focus();
  }, 300);
}

export default function App() {
  const [formData, setFormData] = useState<OrderFormData>(initialFormData);
  const [localeCode, setLocaleCode] = useState<LocaleCode>("ar");
  const plans = pricingService.getPlans();

  const selectedPlan =
    pricingService.getPlanById(formData.selectedPlanId) || plans[0];

  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useTranslation(localeCode);

  const [errors, setErrors] = useState<OrderFormErrors>({});
  const [touched, setTouched] = useState<OrderFormTouched>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleBlur(field: keyof OrderFormData) {
    const updatedTouched = {
      ...touched,
      [field]: true,
    };

    setTouched(updatedTouched);
    setErrors(validateOrderForm(formData, t));
  }

  function handleFormChange(updatedData: OrderFormData) {
    setFormData(updatedData);

    if (isSubmitted || Object.keys(touched).length > 0) {
      setErrors(validateOrderForm(updatedData, t));
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitted(true);
    setIsSuccess(false);

    const validationErrors = validateOrderForm(formData, t);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setTimeout(() => {
        scrollToFirstError(validationErrors);
      }, 0);

      return;
    }

    try {
      setIsSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Order submitted:", {
        formData,
        selectedPlan,
      });

      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleScrollToForm(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    document.getElementById("consultation-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="order-page" dir={localeCode === "ar" ? "rtl" : "ltr"}>
      <a
        className="floating-whatsapp"
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={`${t("whatsappCta")} ${contact.displayPhone}`}
      >
        <WhatsAppIcon />
      </a>

      <LanguageSwitcher value={localeCode} onChange={setLocaleCode} />

      <BrandHero
        displayPhone={contact.displayPhone}
        phoneLink={contactLinks.phone}
        t={t}
        whatsappLink={contactLinks.whatsapp}
        onScrollToForm={handleScrollToForm}
      />

      <section className="order-shell" id="consultation-form">
        <div className="form-panel">
          <div className="form-panel-top">
            <CountrySwitcher
              value={formData.countryCode}
              onChange={(countryCode) =>
                setFormData({
                  ...formData,
                  countryCode,
                })
              }
            />
          </div>

          <div className="page-header">
            <p className="eyebrow">{t("checkout")}</p>
            <h1>{t("title")}</h1>
            <p>{t("subtitle")}</p>
          </div>
          <RegistrationForm
            formData={formData}
            plans={plans}
            errors={errors}
            touched={touched}
            isSubmitted={isSubmitted}
            isSubmitting={isSubmitting}
            onChange={handleFormChange}
            onBlur={handleBlur}
            onSubmit={handleSubmit}
            isSuccess={isSuccess}
            t={t}
          />
        </div>

        <OrderSummary
          selectedPlan={selectedPlan}
          paymentMethod={formData.paymentMethod}
          t={t}
        />
      </section>
    </main>
  );
}
