export interface Product {
    sku: string;
    name: string;
    price: number;
  }
  
  export interface PricingRule {
    canApply(items: Product[]): boolean;
    apply(items: Product[]): number;
  }
  
  