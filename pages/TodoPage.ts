import { Page } from "@playwright/test";

export default class TodoPage {
  private get welcomeMsg() { return "[data-testid=confirm-password]" }
  private get deleteBtn() { return "[data-testid=delete]" }
  private get noTodosMsg() { return "[data-testid=no-todos]" }
  private get todoItem() { return "[data-testid=todo-item]" }

  async open(page: Page) {
    await page.goto("/todo");
  }

  getWelcomeMsg(page: Page) {
    return page.locator(this.welcomeMsg);
  }

  async deleteTodo(page: Page) {
    await page.click(this.deleteBtn);
  }

  async getNoTodosMsg(page: Page) {
    return page.locator(this.noTodosMsg);
  }

  async getTodoItemText(page: Page) {
    return page.locator(this.todoItem).innerText();
  }
}