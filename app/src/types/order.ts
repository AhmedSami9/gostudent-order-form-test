export interface PricingPlan {
  id: number;
  sessions: number;
  regularPrice: number;
  discountPercentage: number;
  finalPrice: number;
}

export interface OrderFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  selectedPlanId: number;
  paymentMethod: PaymentMethod;
  acceptTerms: boolean;
  countryCode: CountryCode;
  cardHolder: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

export type PaymentMethod = "credit-card" | "paypal" | "bank-transfer";

export type CountryCode = "AE" | "DE" | "AT" | "CH" | "EG";
export type LocaleCode = "ar" | "en";

export interface Country {
  code: CountryCode;
  name: string;
  dialCode: string;
  flagClass: string;
  phonePlaceholder: string;
  cityPlaceholder: string;
  postalCodePlaceholder: string;
}
