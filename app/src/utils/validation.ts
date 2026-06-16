import type { OrderFormData } from "../types/order";
import type { TranslationKey } from "../data/translations";
import { isValidPhoneNumber } from "react-phone-number-input";

import {
  isEnglishName,
  isExpiredCard,
  isValid04AcademyEmail,
  isValidCardNumberByLuhn,
  normalizeCardNumber,
  normalizeText,
} from "./validation.helpers";
import { VALIDATION_LIMITS, VALIDATION_REGEX } from "../components/constants/validation.constants";

export type OrderFormErrors = Partial<Record<keyof OrderFormData, string>>;
export type OrderFormTouched = Partial<Record<keyof OrderFormData, boolean>>;

type Translate = (key: TranslationKey) => string;

export function validateOrderForm(
  formData: OrderFormData,
  t: Translate,
): OrderFormErrors {
  const errors: OrderFormErrors = {};

  if (!normalizeText(formData.firstName)) {
    errors.firstName = t("firstNameRequired");
  } else if (!isEnglishName(formData.firstName)) {
    errors.firstName = t("invalidFirstName");
  }

  if (!normalizeText(formData.lastName)) {
    errors.lastName = t("lastNameRequired");
  } else if (!isEnglishName(formData.lastName)) {
    errors.lastName = t("invalidLastName");
  }

  if (!normalizeText(formData.email)) {
    errors.email = t("emailRequired");
  } else if (!isValid04AcademyEmail(formData.email)) {
    errors.email = t("invalidEmail");
  }

  if (!normalizeText(formData.phone)) {
    errors.phone = t("phoneRequired");
  } else if (!isValidPhoneNumber(formData.phone)) {
    errors.phone = t("invalidPhone");
  }

  if (!normalizeText(formData.address)) {
    errors.address = t("addressRequired");
  } else if (
    normalizeText(formData.address).length <
    VALIDATION_LIMITS.MIN_ADDRESS_LENGTH
  ) {
    errors.address = t("invalidAddress");
  }

  if (!normalizeText(formData.city)) {
    errors.city = t("cityRequired");
  } else if (!isEnglishName(formData.city)) {
    errors.city = t("invalidCity");
  }

  if (!normalizeText(formData.postalCode)) {
    errors.postalCode = t("postalCodeRequired");
  } else if (!VALIDATION_REGEX.POSTAL_CODE.test(normalizeText(formData.postalCode))) {
    errors.postalCode = t("invalidPostalCode");
  }

  if (!formData.acceptTerms) {
    errors.acceptTerms = t("acceptTermsRequired");
  }

  if (formData.paymentMethod === "credit-card") {
    const cleanCardNumber = normalizeCardNumber(formData.cardNumber);

    if (!normalizeText(formData.cardHolder)) {
      errors.cardHolder = t("cardHolderRequired");
    } else if (!isEnglishName(formData.cardHolder)) {
      errors.cardHolder = t("invalidCardHolder");
    }

    if (!cleanCardNumber) {
      errors.cardNumber = t("cardNumberRequired");
    } else if (!VALIDATION_REGEX.CARD_NUMBER_DIGITS.test(cleanCardNumber)) {
      errors.cardNumber = t("invalidCardNumber");
    } else if (!isValidCardNumberByLuhn(cleanCardNumber)) {
      errors.cardNumber = t("invalidCardNumber");
    }

    if (!normalizeText(formData.cardExpiry)) {
      errors.cardExpiry = t("cardExpiryRequired");
    } else if (!VALIDATION_REGEX.CARD_EXPIRY.test(normalizeText(formData.cardExpiry))) {
      errors.cardExpiry = t("invalidExpiry");
    } else if (isExpiredCard(formData.cardExpiry)) {
      errors.cardExpiry = t("cardExpired");
    }

    if (!normalizeText(formData.cardCvc)) {
      errors.cardCvc = t("cardCvcRequired");
    } else if (!VALIDATION_REGEX.CVC.test(normalizeText(formData.cardCvc))) {
      errors.cardCvc = t("invalidCvc");
    }
  }

  return errors;
}