import type { LocaleCode } from "../types/order";

export type TranslationKey =
  | "brandName"
  | "brandDomain"
  | "heroTitle"
  | "heroSubtitle"
  | "heroBadge"
  | "whatsappCta"
  | "whatsappMobileCta"
  | "phoneCta"
  | "bookFormCta"
  | "featureExperts"
  | "featureExpertsDescription"
  | "featureFlexible"
  | "featureFlexibleDescription"
  | "featurePlan"
  | "featurePlanDescription"
  | "checkout"
  | "title"
  | "subtitle"
  | "selectPackage"
  | "sessions"
  | "sessionsPackage"
  | "save"
  | "firstName"
  | "firstNamePlaceholder"
  | "lastName"
  | "lastNamePlaceholder"
  | "email"
  | "emailPlaceholder"
  | "phone"
  | "phonePlaceholder"
  | "address"
  | "addressPlaceholder"
  | "postalCode"
  | "postalCodePlaceholder"
  | "city"
  | "cityPlaceholder"
  | "paymentMethod"
  | "creditCard"
  | "creditCardDescription"
  | "paypal"
  | "paypalDescription"
  | "bankTransfer"
  | "bankTransferDescription"
  | "terms"
  | "firstNameRequired"
  | "lastNameRequired"
  | "emailRequired"
  | "invalidEmail"
  | "phoneRequired"
  | "addressRequired"
  | "cityRequired"
  | "postalCodeRequired"
  | "acceptTermsRequired"
  | "orderNow"
  | "processing"
  | "orderSubmittedSuccessfully"
  | "orderOverview"
  | "regularPrice"
  | "discount"
  | "total"
  | "monthlySessions"
  | "selectedPayment"
  | "satisfaction"
  | "paymentDetails"
  | "cardHolder"
  | "cardHolderPlaceholder"
  | "cardNumber"
  | "cardExpiry"
  | "cardCvc"
  | "cardHolderRequired"
  | "invalidCardHolder"
  | "cardNumberRequired"
  | "cardExpiryRequired"
  | "cardExpired"
  | "cardCvcRequired"
  | "invalidCardNumber"
  | "invalidExpiry"
  | "invalidPhone"
  | "invalidCvc";

type Dictionary = Record<TranslationKey, string>;

const english: Dictionary = {
  brandName: "Elmadrasah.com",
  brandDomain: "Online tutoring",
  heroTitle: "A complete learning journey from childhood to university",
  heroSubtitle:
    "Book a free consultation and get a clear plan for school support, exams, and university readiness.",
  heroBadge: "Personalized learning for every family",
  whatsappCta: "Contact on WhatsApp",
  whatsappMobileCta: "WhatsApp",
  phoneCta: "Call us",
  bookFormCta: "Fill the form",
  featureExperts: "Certified experts",
  featureExpertsDescription: "Experienced tutors across school and exam tracks",
  featureFlexible: "Flexible schedule",
  featureFlexibleDescription: "Learn from anywhere at a time that suits you",
  featurePlan: "Custom plan",
  featurePlanDescription: "A learning path matched to goals and level",
  checkout: "Package booking",
  title: "Choose your tutoring package",
  subtitle:
    "Select the number of sessions, add your details, and complete your booking request.",
  selectPackage: "Select package",
  sessions: "Sessions",
  sessionsPackage: "sessions package",
  save: "Save",
  firstName: "First name",
  firstNamePlaceholder: "Enter your first name",
  lastName: "Last name",
  lastNamePlaceholder: "Enter your last name",
  email: "Email",
  emailPlaceholder: "you@example.com",
  phone: "WhatsApp number",
  phonePlaceholder: "50 995 9271",
  address: "Address",
  addressPlaceholder: "Street and house number",
  postalCode: "Postal code",
  postalCodePlaceholder: "10115",
  city: "City",
  cityPlaceholder: "Dubai",
  paymentMethod: "Select payment method",
  creditCard: "Credit card",
  creditCardDescription: "Visa, Mastercard",
  paypal: "PayPal",
  paypalDescription: "Pay securely with PayPal",
  bankTransfer: "Bank transfer",
  bankTransferDescription: "Manual payment",
  terms: "I agree to receive email, calls, and marketing messages.",
  firstNameRequired: "First name is required",
  lastNameRequired: "Last name is required",
  emailRequired: "Email is required",
  invalidEmail: "Please enter a valid email",
  phoneRequired: "Phone number is required",
  addressRequired: "Address is required",
  cityRequired: "City is required",
  postalCodeRequired: "Postal code is required",
  acceptTermsRequired: "You must accept the terms",
  orderNow: "Book",
  processing: "Sending...",
  orderSubmittedSuccessfully: "Your request has been sent successfully!",
  orderOverview: "Booking summary",
  regularPrice: "Regular price",
  discount: "Discount",
  total: "Total",
  monthlySessions: "Monthly sessions",
  selectedPayment: "Payment method",
  satisfaction: "95% satisfaction rate from our students.",
  paymentDetails: "Payment details",
  cardHolder: "Card holder",
  cardHolderPlaceholder: "Name on card",
  cardNumber: "Card number",
  cardExpiry: "Expiry date",
  cardCvc: "CVC",
  cardHolderRequired: "Card holder name is required",
  invalidCardHolder: "Please enter a valid card holder name",
  cardNumberRequired: "Card number is required",
  cardExpiryRequired: "Expiry date is required",
  cardCvcRequired: "CVC is required",
  invalidCardNumber: "Please enter a valid card number",
  invalidExpiry: "Please enter a valid expiry date",
  invalidCvc: "Please enter a valid CVC",
  invalidPhone: "Please enter a valid phone number",
  cardExpired: "Card has expired",
};

const arabic: Dictionary = {
  brandName: "المدرسة.كوم",
  brandDomain: "elmadrasah.com",
  heroTitle: "رحلة تعليم متكاملة من الطفولة إلى الجامعة",
  heroSubtitle:
    "احجز تقييمك المجاني اليوم واحصل على خطة واضحة لدعم الدراسة والاختبارات وقبول الجامعة.",
  heroBadge: "تعليم مخصص لكل عائلة",
  whatsappCta: "تواصل معنا",
  whatsappMobileCta: "واتساب",
  phoneCta: "اتصل بنا",
  bookFormCta: "املأ النموذج",
  featureExperts: "خبراء معتمدون",
  featureExpertsDescription: "مدربون بخبرة في المناهج والاختبارات",
  featureFlexible: "مرونة 100%",
  featureFlexibleDescription: "تعلم من أي مكان وفي أي وقت يناسبك",
  featurePlan: "خطة مخصصة لك",
  featurePlanDescription: "مسار تعليمي يناسب أهدافك ومستواك",
  checkout: "حجز الباقة",
  title: "اختر باقة الحصص المناسبة",
  subtitle:
    "اختر عدد الحصص، أضف بياناتك، ثم أرسل طلب الحجز للباقة التي تناسبك.",
  selectPackage: "اختر الباقة",
  sessions: "حصص",
  sessionsPackage: "حصص في الباقة",
  save: "وفر",
  firstName: "الاسم الأول",
  firstNamePlaceholder: "اكتب اسمك الأول",
  lastName: "اسم العائلة",
  lastNamePlaceholder: "اكتب اسم العائلة",
  email: "البريد الإلكتروني",
  emailPlaceholder: "name@example.com",
  phone: "رقم الواتساب",
  phonePlaceholder: "50 995 9271",
  address: "العنوان",
  addressPlaceholder: "اسم الشارع ورقم المنزل",
  postalCode: "الرمز البريدي",
  postalCodePlaceholder: "00000",
  city: "المدينة",
  cityPlaceholder: "دبي",
  paymentMethod: "اختر طريقة الدفع",
  creditCard: "بطاقة ائتمان",
  creditCardDescription: "فيزا، ماستر كارد",
  paypal: "PayPal",
  paypalDescription: "ادفع بأمان عبر PayPal",
  bankTransfer: "تحويل بنكي",
  bankTransferDescription: "دفع يدوي",
  terms: "أوافق على استلام البريد الإلكتروني والمكالمات والإعلانات.",
  firstNameRequired: "الاسم الأول مطلوب",
  lastNameRequired: "اسم العائلة مطلوب",
  emailRequired: "البريد الإلكتروني مطلوب",
  invalidEmail: "من فضلك أدخل بريدا إلكترونيا صحيحا",
  phoneRequired: "رقم الهاتف مطلوب",
  addressRequired: "العنوان مطلوب",
  cityRequired: "المدينة مطلوبة",
  postalCodeRequired: "الرمز البريدي مطلوب",
  acceptTermsRequired: "يجب الموافقة على الشروط",
  orderNow: "احجز",
  processing: "جاري الإرسال...",
  orderSubmittedSuccessfully: "تم إرسال الطلب بنجاح!",
  orderOverview: "ملخص الحجز",
  regularPrice: "السعر قبل الخصم",
  discount: "الخصم",
  total: "الإجمالي",
  monthlySessions: "عدد الحصص",
  selectedPayment: "طريقة الدفع",
  satisfaction: "نسبة رضا 95% من طلابنا.",
  paymentDetails: "بيانات الدفع",
  cardHolder: "اسم صاحب البطاقة",
  cardHolderPlaceholder: "الاسم الموجود على البطاقة",
  cardNumber: "رقم البطاقة",
  cardExpiry: "تاريخ الانتهاء",
  cardCvc: "رمز الأمان CVC",
  cardHolderRequired: "اسم صاحب البطاقة مطلوب",
  invalidCardHolder: "من فضلك أدخل اسما صحيحا لصاحب البطاقة",
  cardNumberRequired: "رقم البطاقة مطلوب",
  invalidCardNumber: "من فضلك أدخل رقم بطاقة صحيح",
  cardExpiryRequired: "تاريخ الانتهاء مطلوب",
  invalidExpiry: "من فضلك أدخل تاريخ انتهاء صحيح",
  cardCvcRequired: "رمز الأمان CVC مطلوب",
  invalidCvc: "من فضلك أدخل رمز أمان صحيح",
  invalidPhone: "من فضلك أدخل رقم هاتف صحيح",
  cardExpired: "البطاقة منتهية الصلاحية",
};

export const translations: Record<LocaleCode, Dictionary> = {
  ar: arabic,
  en: english,
};
