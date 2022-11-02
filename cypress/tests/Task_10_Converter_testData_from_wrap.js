///<reference types="Cypress" />

import MainPage from "../pageObjects/mainPage"
import ConvertPage from "../pageObjects/convertPage"
import Chance from 'chance'

describe("Converter e2e test", () => {
    beforeEach(function () {
        cy.fixture('currency').then(currency => {
            cy.wrap(currency).as('currency');                                          // Not the best way for using all data from array
        });
    });

    it("Task 10 one random target currency", function () {
        cy.get('@currency').then(currency => {
            let targetCurrency = Chance().pickone(currency.rates);                     // No problems for using one set data from array

            cy.log('GIVEN User is at Main Page:');
            MainPage.open();

            cy.log('WHEN User selects needed currencies:')
            MainPage.getInputAmount.click().clear().type(1);
            MainPage.getSelectFrom.type(currency.base).type(`{enter}`);
            MainPage.getSelectTo.type(targetCurrency.shortName).type(`{enter}`);
            MainPage.getButtonConvert.click();

            cy.log('THEN User can see currencies convert rate at Convert Page:')
            ConvertPage.getRateInfo.then(rateInfo => {
                expect(parseFloat(rateInfo.text())).to.equal(targetCurrency.rate)      // test always fail because our fixture is static but the rate at the
            })                                                                         // site is dynamic
        })

    });


    it(`Task 10 scope:`, function () {                                                 // BUT DOES NOT START FOR ALL DATA FROM ARRAY (FIXTURE)
        cy.get('@currency').then(currency => {                                         // BECAUSE WE DO NOT HAVE A POSSIBILITY PUT
            currency.rates.forEach((targetCurrency) => {                               // cy.get('@currency').then(currency => {
                cy.log('GIVEN User is at Main Page:');                                 //     currency.rates.forEach((targetCurrency) => {
                MainPage.open();                                                       // BEFORE BLOCK 'it'
                //                                                                     // test work only for first data from array
                cy.log('WHEN User selects needed currencies:')
                MainPage.getInputAmount.click().clear().type(1);
                MainPage.getSelectFrom.type(currency.base).type(`{enter}`);
                MainPage.getSelectTo.type(targetCurrency.shortName).type(`{enter}`);
                MainPage.getButtonConvert.click();

                cy.log('THEN User can see currencies convert rate at Convert Page:')
                ConvertPage.getRateInfo.then(rateInfo => {
                    expect(parseFloat(rateInfo.text())).to.equal(targetCurrency.rate)      // test always fail because our fixture is static but the rate at the site is dynamic
                })
            })
        })
    });
})