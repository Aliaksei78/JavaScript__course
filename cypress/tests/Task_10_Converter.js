///<reference types="Cypress" />

import MainPage from "../pageObjects/mainPage"
import ConvertPage from "../pageObjects/convertPage"
import Chance from 'chance'


describe("Converter e2e test", () => {
    beforeEach(function () {
        cy.fixture('currency').then(currensy => {
            this.currency = currensy;                        // now 'this.currency' visible for tests BUT ARROW FUNCTIONS DO NOT BE EXIST in 'before()' 
        });                                                  // and 'it()' in this case  https://docs.cypress.io/api/commands/fixture#this-context
    });

    it("Task 10 one", function () {
        let targetCurrency = Chance().pickone(this.currency.rates);

        cy.log('GIVEN User is at Main Page:');
        MainPage.open();

        cy.log('WHEN User selects needed currencies:')
        MainPage.getInputAmount.click().clear().type(1);
        MainPage.getSelectFrom.type(this.currency.base).type(`{enter}`);
        MainPage.getSelectTo.type(targetCurrency.shortName).type(`{enter}`);
        MainPage.getButtonConvert.click();

        cy.log('THEN User can see currencies convert rate at Convert Page:')
        ConvertPage.getRateInfo.then(rateInfo => {
            expect(parseFloat(rateInfo.text())).to.equal(targetCurrency.rate)      // test always fail because our fixture is static but the rate at the
        })                                                                         // site is dynamic
    });


    it("Task 10 scope", function () {
        let scopeTargetCurrency = this.currency.rates;
        scopeTargetCurrency.forEach((targetCurrency) => {
            cy.log('GIVEN User is at Main Page:');
            MainPage.open();

            cy.log('WHEN User selects needed currencies:')
            MainPage.getInputAmount.click().clear().type(1);
            MainPage.getSelectFrom.type(this.currency.base).type(`{enter}`);
            MainPage.getSelectTo.type(targetCurrency.shortName).type(`{enter}`);
            MainPage.getButtonConvert.click();

            cy.log('THEN User can see currencies convert rate at Convert Page:')
            ConvertPage.getRateInfo.then(rateInfo => {
                expect(parseFloat(rateInfo.text())).to.equal(targetCurrency.rate)      // test always fail because our fixture is static but the rate at the site is dynamic
            })
        })
    });
});