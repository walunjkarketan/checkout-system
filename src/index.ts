import { Checkout } from "./checkout";
import { AppleTvDeal, IPadBulkDiscount, DefaultPricing } from "./pricingRules";

const checkout = new Checkout([new AppleTvDeal(), new IPadBulkDiscount(), new DefaultPricing()]);

checkout.scan("atv");
checkout.scan("atv");
checkout.scan("atv");
checkout.scan("vga");


console.log(`Total price: $${checkout.total()}`);
