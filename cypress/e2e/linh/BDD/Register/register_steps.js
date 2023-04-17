import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Register } from "./register_page";
const register = new Register();
Given("A user open register page", () => {
  cy.visit("https://strawpoll.com/signup/");
});
When("A user enter the name", () => {
  register.enterName();
});
When("A user enter the email address", () => {
  register.enterEmail();
});
When("A user enter the email address already exist", () => {
  register.enterEmailAlreadyExist();
});
When("A user enter the password", () => {
  register.enterPassword();
});
When("A user click agree", () => {
  register.clickButtonSwich();
});
When("A user click on the Sign up button", () => {
  register.clickButtonSingUp();
});
Then("A user register successful", () => {
  register.verifyRegisterSuccessfully();
});
Then("A user will be receving a error message email already exist", () => {
  register.verifyErrorEmail();
});
