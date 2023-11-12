import { APIRequestContext, Page } from "@playwright/test";
import TodoApi from "../apis/TodoApi";
import User from "../models/User";

export default class NewTodoPage {
  private get newTodoInput() { return "[data-testid=new-todo]" }
  private get submitBtn() { return "[data-testid=submit-newTask]"}

  async open(page: Page) {
    await page.goto("/todo/new");
  }

  async addTodo(page: Page, task: string) {
    await page.type(this.newTodoInput, task);
    await page.click(this.submitBtn);
  }

  async addTodoApi(request: APIRequestContext, user: User) {
    await new TodoApi().addTodo(request, user);
  }
}