export const VALIDATION_REGEX = {
  ENGLISH_NAME: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
  EMAIL_04_ACADEMY: /^[a-zA-Z0-9._%+-]+@04academy\.com$/,
  CARD_NUMBER_DIGITS: /^\d{13,19}$/,
  CARD_EXPIRY: /^(0[1-9]|1[0-2])\/\d{2}$/,
  CVC: /^\d{3,4}$/,
  POSTAL_CODE: /^[A-Za-z0-9\s-]{3,10}$/,
};

export const VALIDATION_LIMITS = {
  MIN_ADDRESS_LENGTH: 5,
};