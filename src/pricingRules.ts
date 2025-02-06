import { PricingRule, Product } from "./models";

export class AppleTvDeal implements PricingRule {
  canApply(items: Product[]): boolean {
    return items.length > 0 && items[0].sku === "atv";
  }

  apply(items: Product[]): number {
    const chargeableCount = Math.floor(items.length / 3) * 2 + (items.length % 3);
    return chargeableCount * (items[0]?.price || 0);
  }
}

export class IPadBulkDiscount implements PricingRule {
  canApply(items: Product[]): boolean {
    return items.length > 0 && items[0].sku === "ipd";
  }

  apply(items: Product[]): number {
    if (items.length > 4) {
      return items.length * 499.99;
    }
    return items.reduce((total, item) => total + item.price, 0);
  }
}

export class DefaultPricing implements PricingRule {
  canApply(items: Product[]): boolean {
    return true; // Always apply if no special rule exists
  }

  apply(items: Product[]): number {
    return items.reduce((total, item) => total + item.price, 0);
  }
}
