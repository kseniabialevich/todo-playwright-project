import { test, expect } from "@playwright/test";
import User from "../models/User";
import UserApi from "../apis/UserApi";
import TodoApi from "../apis/TodoApi";
import SignupPage from "../pages/SignupPage";
import TodoPage from "../pages/TodoPage";
import NewTodoPage from "../pages/NewTodoPage";

test("sould be able to add a new todo", async ({ page, request, context }) => {
  const user = new User();
  
  const signupPage = new SignupPage();
  await signupPage.signupApi(request, user, context);

  const newTodoPage = new NewTodoPage();
  await newTodoPage.open(page);
  await newTodoPage.addTodo(page, "Learn Playwright");

  const todoPage = new TodoPage();
  const todoItem = todoPage.getTodoItemText(page)
  expect(await todoItem).toEqual("Learn Playwright");
});

test("should be able to delete a todo", async ({ page, request, context }) => {
  const user = new User();
  const signupPage = new SignupPage();
  await signupPage.signupApi(request, user, context);

  const newTodoPage = new NewTodoPage();
  await newTodoPage.addTodoApi(request, user);

  const todoPage = new TodoPage();
  await todoPage.open(page);
  await todoPage.deleteTodo(page);
  const noTodosMsg = await todoPage.getNoTodosMsg(page);
  await expect(noTodosMsg).toBeVisible();
});