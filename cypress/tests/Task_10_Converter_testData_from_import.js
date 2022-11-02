///<reference types="Cypress" />

import MainPage from "../pageObjects/mainPage"
import ConvertPage from "../pageObjects/convertPage"
import Chance from 'chance'
import userCurrency from '../fixtures/currency.json'                            // The best way for using all data from array

describe("Converter e2e test", () => {

    it("Task 10 - one randon target currency", function () {
        let targetCurrency = Chance().pickone(userCurrency.rates);              // No problems for using one set data from array

        cy.log('GIVEN User is at Main Page:');
        MainPage.open();

        cy.log('WHEN User selects needed currencies:')
        MainPage.getInputAmount.click().clear().type(1);
        MainPage.getSelectFrom.type(userCurrency.base).type(`{enter}`);
        MainPage.getSelectTo.type(targetCurrency.shortName).type(`{enter}`);
        MainPage.getButtonConvert.click();

        cy.log('THEN User can see currencies convert rate at Convert Page:')
        ConvertPage.getRateInfo.then(rateInfo => {
            expect(parseFloat(rateInfo.text())).to.equal(targetCurrency.rate)      // test always fail because our fixture is static but the rate at the
        })                                                                         // site is dynamic
    });


    userCurrency.rates.forEach((targetCurrency) => {                               // No problems for using all data from array
        it(`Task 10 - scope: ${targetCurrency.shortName}`, function () {
            cy.log('GIVEN User is at Main Page:');
            MainPage.open();

            cy.log('WHEN User selects needed currencies:')
            MainPage.getInputAmount.click().clear().type(1);
            MainPage.getSelectFrom.type(userCurrency.base).type(`{enter}`);
            MainPage.getSelectTo.type(targetCurrency.shortName).type(`{enter}`);
            MainPage.getButtonConvert.click();

            cy.log('THEN User can see currencies convert rate at Convert Page:')
            ConvertPage.getRateInfo.then(rateInfo => {
                expect(parseFloat(rateInfo.text())).to.equal(targetCurrency.rate)      // test always fail because our fixture is static but the rate at the site is dynamic
            })
        })
    });
});