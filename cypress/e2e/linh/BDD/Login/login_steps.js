import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "./Login_page";

const login = new Login();

Given("A user open login page", () => {
  cy.visit("https://practice.automationtesting.in/my-account/");
});
When("A user enter the username {string}", (email) => {
  login.enterEmail(email);
});
When("A user enter the password {string}", (password) => {
  login.enterPassword(password);
});
When("A user enter the username and password", (table) => {
  table.hashes().forEach((row) => {
    login.enterEmail(row.username);
    login.enterPassword(row.password);
  });
});
When("User enter {string} and {string}", (email, password) => {
  login.enterEmail(email);
  login.enterPassword(password);
});
When("A user click on the login button", () => {
  login.clickButtonLogin();
});
Then("A user will be logged in", () => {
  login.verifyLoginSuccessfully();
});
Then("A user will be receving a failed message", () => {
  login.verifyErrorMsg();
});
