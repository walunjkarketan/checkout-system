import { Checkout } from "../src/checkout";
import { AppleTvDeal, IPadBulkDiscount, DefaultPricing } from "../src/pricingRules";

describe("Checkout System", () => {
  let checkout: Checkout;

  beforeEach(() => {
    checkout = new Checkout([new AppleTvDeal(), new IPadBulkDiscount(), new DefaultPricing()]);
  });

  test("Scenario 1: atv, atv, atv, vga", () => {
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("vga");
    expect(checkout.total()).toBe(249.0);
  });

  test("Scenario 2: atv, ipd, ipd, atv, ipd, ipd, ipd", () => {
    checkout.scan("atv");
    checkout.scan("ipd");
    checkout.scan("ipd");
    checkout.scan("atv");
    checkout.scan("ipd");
    checkout.scan("ipd");
    checkout.scan("ipd");
    expect(checkout.total()).toBe(2718.95);
  });
});
