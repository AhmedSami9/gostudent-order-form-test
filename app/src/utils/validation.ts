import type { OrderFormData } from "../types/order";
import type { TranslationKey } from "../data/translations";
import { isValidPhoneNumber } from "react-phone-number-input";
export type OrderFormErrors = Partial<Record<keyof OrderFormData, string>>;
export type OrderFormTouched = Partial<Record<keyof OrderFormData, boolean>>;

type Translate = (key: TranslationKey) => string;

export function validateOrderForm(
  formData: OrderFormData,
  t: Translate,
): OrderFormErrors {
  const errors: OrderFormErrors = {};

  if (!formData.firstName.trim()) errors.firstName = t("firstNameRequired");
  if (!formData.lastName.trim()) errors.lastName = t("lastNameRequired");

  if (!formData.email.trim()) {
    errors.email = t("emailRequired");
  } else if (!/^[a-zA-Z0-9._%+-]+@04academy\.com$/.test(formData.email)) {
    errors.email = t("invalidEmail");
  }

  if (!formData.phone.trim()) {
    errors.phone = t("phoneRequired");
  } else if (!isValidPhoneNumber(formData.phone)) {
    errors.phone = t("invalidPhone");
  }
  if (!formData.address.trim()) errors.address = t("addressRequired");
  if (!formData.city.trim()) errors.city = t("cityRequired");
  if (!formData.postalCode.trim()) {
    errors.postalCode = t("postalCodeRequired");
  }

  if (!formData.acceptTerms) errors.acceptTerms = t("acceptTermsRequired");

  if (formData.paymentMethod === "credit-card") {
    const cleanCardNumber = formData.cardNumber.replace(/\s/g, "");

    if (!formData.cardHolder.trim()) {
      errors.cardHolder = t("cardHolderRequired");
    } else if (
      !/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.cardHolder.trim())
    ) {
      errors.cardHolder = t("invalidCardHolder");
    }

    if (!cleanCardNumber) {
      errors.cardNumber = t("cardNumberRequired");
    } else if (!/^\d{16}$/.test(cleanCardNumber)) {
      errors.cardNumber = t("invalidCardNumber");
    }

    if (!formData.cardExpiry.trim()) {
      errors.cardExpiry = t("cardExpiryRequired");
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.cardExpiry)) {
      errors.cardExpiry = t("invalidExpiry");
    } else {
      const [month, year] = formData.cardExpiry.split("/");

      const expiryMonth = Number(month);
      const expiryYear = 2000 + Number(year);

      const now = new Date();

      const currentMonth = now.getMonth() + 1;
      const currentYear = now.getFullYear();

      if (
        expiryYear < currentYear ||
        (expiryYear === currentYear && expiryMonth < currentMonth)
      ) {
        errors.cardExpiry = t("cardExpired");
      }
    }

    if (!formData.cardCvc.trim()) {
      errors.cardCvc = t("cardCvcRequired");
    } else if (!/^\d{3,4}$/.test(formData.cardCvc)) {
      errors.cardCvc = t("invalidCvc");
    }
  }
  return errors;
}
