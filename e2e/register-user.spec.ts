import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/users/registration");
});

test("User Registration Form", async ({ page }) => {
  const firstNameInput = await page.getByLabel("First Name");
  const lastNameInput = await page.getByLabel("Last Name");
  const userNameInput = await page.getByLabel("User Name");

  await test.step("should display all form fields", async () => {
    await expect(firstNameInput).toBeVisible();
    await expect(lastNameInput).toBeVisible();
    await expect(userNameInput).toBeVisible();
  });

  await test.step("fill all user information to register", async () => {
    await firstNameInput.fill("Niman");
    await lastNameInput.fill("ohja");
    await userNameInput.fill("Niman ohja");
  });

  await test.step("click on register button to submit user details", async () => {
    const submitButton = await page.getByTestId("user__registration--submit");
    await submitButton.click();
  });
});
