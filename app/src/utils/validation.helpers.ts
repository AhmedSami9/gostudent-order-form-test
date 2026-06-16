import { VALIDATION_REGEX } from "../components/constants/validation.constants";

export function normalizeText(value: string): string {
  return value.trim();
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function normalizeCardNumber(value: string): string {
  return value.replace(/\s/g, "");
}

export function isEnglishName(value: string): boolean {
  return VALIDATION_REGEX.ENGLISH_NAME.test(normalizeText(value));
}

export function isValid04AcademyEmail(value: string): boolean {
  return VALIDATION_REGEX.EMAIL_04_ACADEMY.test(normalizeEmail(value));
}

export function isValidCardNumberByLuhn(cardNumber: string): boolean {
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = Number(cardNumber[i]);

    if (Number.isNaN(digit)) {
      return false;
    }

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

export function isExpiredCard(expiry: string): boolean {
  const [month, year] = expiry.split("/");

  const expiryMonth = Number(month);
  const expiryYear = 2000 + Number(year);

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  return (
    expiryYear < currentYear ||
    (expiryYear === currentYear && expiryMonth < currentMonth)
  );
}