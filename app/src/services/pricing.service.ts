import { plans } from "../data/plans";

export const pricingService = {
  getPlans() {
    return plans;
  },

  getPlanById(id: number) {
    return plans.find(
      (plan) => plan.id === id
    );
  },
};