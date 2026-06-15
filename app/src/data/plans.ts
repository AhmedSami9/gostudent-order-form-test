import type { PricingPlan } from "../types/order";

export const plans: PricingPlan[] = [
  {
    id: 1,
    sessions: 4,
    regularPrice: 200,
    discountPercentage: 0,
    finalPrice: 200,
  },
  {
    id: 2,
    sessions: 8,
    regularPrice: 400,
    discountPercentage: 10,
    finalPrice: 360,
  },
  {
    id: 3,
    sessions: 12,
    regularPrice: 600,
    discountPercentage: 20,
    finalPrice: 480,
  },
];