import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
await page.goto("http://localhost:3929/shop", { waitUntil: "load" });
await page.waitForTimeout(1200);
await page.screenshot({ path: "/tmp/shop-full.png" });
await page.locator(".tj-product").first().screenshot({ path: "/tmp/shop-card-closeup.png" });
await browser.close();
