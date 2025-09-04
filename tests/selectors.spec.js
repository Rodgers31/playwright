import { expect, test } from '@playwright/test';

test('Learning selectors', async ({ page }) => {
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
  // 5 Partial attribute

  await page.locator('[role*="but"]').click();

  // 6 by text content
  await page.locator('text=CLICK ME').click();

  // 7 combine selectors for precision, combined class and text -  find exact text match
  await page.locator('.button-style:text("CLICK ME")').click();

  // 8 Find elements containing specific text, has-text - doesn't have to be a perfect match
  await page.locator('button:has-text("click m")').click();

  // 9 Attribute and text combination
  await page.locator('[data-action="increment"]:text("CLICK ME")').click();
  // 10 Playwright locators - https://playwright.dev/docs/locators#locate-by-test-id
  //get by text

  await page.getByText('CLICK ME').click();

  // 11 By role, regex, the i means it ignore case of words
  await page.getByRole('button', { name: /click me/i }).click();

  // 12 Assert the counter

  await expect(page.getByText(13)).toBeVisible();
  // 12 example 2
  await expect(page.locator('#counter')).toContainText('13');

  await page.pause();
});
