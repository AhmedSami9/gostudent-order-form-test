import type { OrderFormData } from "../types/order";
import type { TranslationKey } from "../data/translations";

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
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = t("invalidEmail");
  }

  if (!formData.phone.trim()) errors.phone = t("phoneRequired");
  if (!formData.address.trim()) errors.address = t("addressRequired");
  if (!formData.city.trim()) errors.city = t("cityRequired");
  if (!formData.postalCode.trim()) {
    errors.postalCode = t("postalCodeRequired");
  }

  if (!formData.acceptTerms) errors.acceptTerms = t("acceptTermsRequired");

  return errors;
}
