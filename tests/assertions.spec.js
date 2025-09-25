import { expect, test } from '@playwright/test';

test.describe('Learn assertion', () => {
  test('Verify web page behavior', async ({ page }) => {
    const URL = 'https://the-internet.herokuapp.com/';
    await page.goto(URL);
    // 1. To have URL
    await expect(page).toHaveURL(URL);
    // 2. To have title
    await expect(page).toHaveTitle('The Internet');
  });
  test('Continue with assertions', async ({ page }) => {
    const URL = 'https://the-internet.herokuapp.com/';
    await page.goto(URL);
    // 3. Heading, assert visibility
    await expect(page.locator('.heading')).toContainText('Welcome to the-internet');
    await expect(page.locator('h1')).toBeVisible();

    // 4. Assert element to have text
    await expect(page.locator('h2')).toHaveText('Available Examples');

    // 5. Assert contains text, toContainText will pass if partil match
    await expect(page.locator('body')).toContainText('WYSIWYG');
  });

  // *****$$('a')***** If you type in console, will give you the total number of link in page
  test.only('Continue with assertions p2', async ({ page }) => {
    const URL = 'https://the-internet.herokuapp.com/';
    const checkURL = 'https://the-internet.herokuapp.com/checkboxes';
    await page.goto(URL);

    await expect(page.locator('a')).toHaveCount(46);

    // 7. elements to be checked
    await page.goto(checkURL);
    await expect(page.locator('h3')).toHaveText('Checkboxes');
    // 2 Ways to mitigate items not lording/ for stability if build it stylisticly fails
    await page.waitForTimeout(1000);
    await page.waitForLoadState('networkidle');

    let checkbox = await page.getByRole('checkbox').nth(0);
    await checkbox.waitFor();
    // Returns locator to the n-th matching element. You can add the position
    await page.getByRole('checkbox').nth(0).check();
    await page.getByRole('checkbox').nth(1).uncheck();

    await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
    await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();
    await page.pause();
  });
});
