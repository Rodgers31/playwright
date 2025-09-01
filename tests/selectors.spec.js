import { test } from '@playwright/test';

test.only('Learning selectors', async ({ page }) => {
  //navigate to web page

  await page.goto('http://127.0.0.1:5500/clickme.html');

  // 1 Selecting by ID
  await page.locator('#clickButton').click();
  // 2 Selecting by class
  await page.locator('.button-style').click();
  // 3 By tag and class(tag is a button and class is button-style)
  await page.locator('button.button-style').click();
  // 4 By attribute value(id and class are attributes so you can access them like this)
  await page.locator('[data-action="increment"]').click();
  await page.locator('[id="clickButton"]').click();
  await page.locator('[class="button-style"]').click();

  await page.pause();
});
