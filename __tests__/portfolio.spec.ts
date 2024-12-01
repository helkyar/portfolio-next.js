import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/en')
})

test.describe('Landing', () => {
  test('test visibility', async ({ page }) => {
    await expect(page.getByRole('banner')).toBeVisible()
    await expect(
      page.getByRole('heading', { name: "Hey, I'm Javi" }),
    ).toBeVisible()
    await expect(
      page.getByRole('link', { name: 'Introduction to MDX MDX is a' }),
    ).toBeVisible()
    await expect(page.getByText('Recent ProjectsSpreadsheet')).toBeVisible()
    await expect(page.getByText('LinkedInGitHub')).toBeVisible()
  })
  test('test language change ', async ({ page }) => {
    await page.getByRole('button', { name: 'change language' }).click()
    await page.getByRole('link', { name: 'español' }).click()
    await expect(
      page.getByRole('heading', { name: 'Hola, soy Javi' }),
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Publicaciones Recientes' }),
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Proyectos Recientes' }),
    ).toBeVisible()
  })
  test('test navigation', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: "Hey, I'm Javi" }),
    ).toBeVisible()
    await page.getByRole('link', { name: 'Posts', exact: true }).click()
    await expect(page.getByRole('heading', { name: 'Posts' })).toBeVisible()
    await page.goto('http://localhost:3000/en/posts?query=r')
    await expect(
      page.locator('div').filter({ hasText: /^Reset$/ }),
    ).toBeVisible()
    await page.getByRole('link', { name: 'Projects' }).click()
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible()
    await page.getByRole('link', { name: 'Contact' }).click()
    await expect(
      page.getByRole('heading', { name: "Let's talk about your project" }),
    ).toBeVisible()
    await expect(
      page
        .locator('form')
        .filter({ hasText: 'SubmitBy submitting this form' })
        .locator('div')
        .first(),
    ).toBeVisible()
  })
})
