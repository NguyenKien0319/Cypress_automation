import{ When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import {Register} from "./RegisterAction";
const rgt = new Register();
Given ('I navigate to the register page', () => {
  rgt.loadRegisterPage()
})
When ('I fill my informations into the form',() => {
  rgt.typeInfor()
 })
When('I choose my gender', ()=>{
  rgt.chooseGender()
})
When ('I choose my hobbies',() =>{
  rgt.selectHobbies()
})
When ('I choose my language',() =>{
  rgt.selectLanguage()
})
When ('I select my skill',() => {
  rgt.selectSkill()
})
When ('I select my country',() => {
  rgt.selectCountry()
})