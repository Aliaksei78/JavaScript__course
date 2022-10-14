class MainPage {

    open(targetUrl = '') {
        cy.visit('' + targetUrl)            // baseUrl built-in automatically from cypress.config.js
    }

    get getInputAmount() {
        return cy.get('#amount');
    }

    get getSelectFrom() {
        return cy.get('#midmarketFromCurrency')
    }

    get getSelectTo() {
        return cy.get('#midmarketToCurrency')
    }

    get getButtonConvert() {
        return cy.get('button[type="submit"]')
    }

}

export default new MainPage;