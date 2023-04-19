/// <reference types="cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../HomePage/HomePage.spec";


  beforeEach(() => {
    cy.viewport(1600, 720);
  });
  Given("I navigate to the Website", () => {
    homePage.enterURL();
  });
  Then("Validate the menus in home page", (datatable) => {
    datatable.hashes().forEach((element) => {
    homePage.validateMenus(element.menu_name);
  });
  });
  Then("Validate the title after login", (datatable) => {
    datatable.hashes().forEach((element) => {
    homePage.verifyPageTitle(element.title);
  });
  });