import { useMemo, useState } from "react";
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

const fieldOrder: (keyof OrderFormData)[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "address",
  "city",
  "postalCode",
  "selectedPlanId",
  "paymentMethod",
  "acceptTerms",
  "countryCode",
  "cardHolder",
  "cardNumber",
  "cardExpiry",
  "cardCvc",
];

function scrollToFirstError(errors: OrderFormErrors) {
  const firstErrorField = fieldOrder.find((field) => errors[field]);

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
  const [localeCode, setLocaleCode] = useState<LocaleCode>("en");

  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<OrderFormErrors>({});
  const [touched, setTouched] = useState<OrderFormTouched>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { t } = useTranslation(localeCode);

  const plans = useMemo(() => pricingService.getPlans(), []);

  const selectedPlan = useMemo(
    () => pricingService.getPlanById(formData.selectedPlanId) || plans[0],
    [formData.selectedPlanId, plans],
  );

 function handleLanguageChange(nextLocaleCode: LocaleCode) {
  setLocaleCode(nextLocaleCode);
  setErrors({});
  setTouched({});
  setIsSubmitted(false);
  setIsSuccess(false);
}

  function handleBlur(field: keyof OrderFormData) {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [field]: true,
    }));

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

  function handleCountryChange(countryCode: OrderFormData["countryCode"]) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      countryCode,
    }));
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

      <LanguageSwitcher value={localeCode} onChange={handleLanguageChange} />

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
              onChange={handleCountryChange}
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