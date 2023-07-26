import { test } from '@playwright/test';

test('todo 1 displays correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/todo/1');
  await page.getByText('⬅️ BackItem #: 1Creator: Leanne GrahamTitle: delectus aut autem').click();
  await page.getByText('1').click();
  await page.getByText('Leanne Graham').click();
  await page.getByText('delectus aut autem').click();
  await page.getByRole('link', { name: '⬅️ Back' }).click();
});

test('todo 2 displays correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/todo/2');
  await page.getByText('2').click();
  await page.getByText('Leanne Graham').click();
  await page.getByText('quis ut nam facilis et officia qui').click();
  await page.getByRole('link', { name: '⬅️ Back' }).click();
});

test('todo 200 displays correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/todo/200');
  await page.getByText('200').click();
  await page.getByText('Clementina DuBuque').click();
  await page.getByText('ipsam aperiam voluptates qui').click()
  await page.getByRole('link', { name: '⬅️ Back' }).click();
});