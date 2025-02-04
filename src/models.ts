export interface Product {
    sku: string;
    name: string;
    price: number;
  }
  
  export interface PricingRule {
    apply(items: Product[]): number;
  }
  