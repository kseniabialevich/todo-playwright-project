import { test, expect } from "@playwright/test"
import User from "../models/User";
import SignupPage from "../pages/SignupPage";
import TodoPage from "../pages/TodoPage";

test("should be able to register to application", async ({ page }) => {
  const user = new User();

  const signupPage = new SignupPage();
  
  await signupPage.open(page);
  await signupPage.signup(page, user);
  const todoPage = new TodoPage();
  const welcomeMsg = todoPage.getWelcomeMsg(page);
  await expect(welcomeMsg).toBeVisible();
})