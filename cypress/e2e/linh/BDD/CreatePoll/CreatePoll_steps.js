import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CreatePoll } from "./CreatePoll_page";
const faker = require("faker");
const createPoll = new CreatePoll();
const randomTitle = `Title ${Cypress._.random(0, 999)}`;
const randomOption1 = faker.lorem.words();
const randomOption2 = faker.lorem.words();
const today = new Date();
const currentDate = today.getDate();
const futureDate = new Date(new Date().setDate(today.getDate() + 1)).getDate();

Given("A user login into homepage", () => {
  createPoll.loginHomepage();
});
When("A user click on create poll", () => {
  createPoll.clickButtonCreatePoll();
});
When("A user fill title", () => {
  createPoll.enterTitle(randomTitle);
});

When("A user select Voting type {string}", (votingtype) => {
  createPoll.selectVotingType(votingtype);
});
When("A user fill answer options", () => {
  createPoll.fillOptions(randomOption1, randomOption2);
});
When("A user select day", () => {
  createPoll.selectDay(currentDate, futureDate);
});
When("A user click on the Create poll button", () => {
  createPoll.clickButtonSubmit();
});
Then("A user create poll successful", () => {
  createPoll.verifyLoginCreateSuccessfully(randomTitle);
});
