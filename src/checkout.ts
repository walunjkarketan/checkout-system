import { PricingRule, Product } from "./models";
import { getProductBySku } from "./catalogue";

export class Checkout {
  private items: Product[] = [];
  private pricingRules: PricingRule[];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }

  scan(sku: string): void {
    const product = getProductBySku(sku);
    if (product) {
      this.items.push(product);
    } else {
      console.error(`Product with SKU: ${sku} not found`);
    }
  }

  total(): number {
    let total = 0;
    const groupedItems: { [key: string]: Product[] } = {};

    // Group items by SKU
    for (const item of this.items) {
      if (!groupedItems[item.sku]) groupedItems[item.sku] = [];
      groupedItems[item.sku].push(item);
    }

    // Apply pricing rules based on SKU
    for (const sku in groupedItems) {
      const items = groupedItems[sku];
      const rule = this.pricingRules.find((r) => r.canApply(items));
      if (rule) {
        total += rule.apply(items);
      } else {
        total += items.reduce((sum, item) => sum + item.price, 0);
      }
    }

    return parseFloat(total.toFixed(2));
  }
}
