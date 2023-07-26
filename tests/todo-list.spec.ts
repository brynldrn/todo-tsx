import { test } from '@playwright/test';

test('has all todo items', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByText('Searh by title: #1delectus aut autem#2quis ut nam facilis ...#3fugiat veniam min').click();
  await page.getByRole('link', { name: '#1 delectus aut autem' }).click();
  await page.getByRole('link', { name: '⬅️ Back' }).click();
  await page.getByRole('link', { name: '#2 quis ut nam facilis ...' }).click();
  await page.getByRole('link', { name: '⬅️ Back' }).click();
});