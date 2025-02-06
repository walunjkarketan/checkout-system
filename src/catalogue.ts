import { Product } from "./models";

export const productCatalogue: Product[] = [
  { sku: "ipd", name: "Super iPad", price: 549.99 },
  { sku: "mbp", name: "MacBook Pro", price: 1399.99 },
  { sku: "atv", name: "Apple TV", price: 109.50 },
  { sku: "vga", name: "VGA adapter", price: 30.00 },
];

export function getProductBySku(sku: string): Product | undefined {
  return productCatalogue.find((product) => product.sku === sku);
}
