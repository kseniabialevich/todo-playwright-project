import { faker } from "@faker-js/faker";

export default class User {
  private firstName: string;
  private lastName: string;
  private email: string;
  private password: string;
  private accessToken: string;
  private userId: string;

  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  getUserId() {
    return this.userId;
  }

  setUserId(userId: string) {
    this.userId = userId
  }
}