///<reference types="Cypress" />


describe('Task 19.2 Asynchrony', () => {

    before(() => {
        cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916').its('body').as("products")
        console.clear()
    })

    it('cy.request into "before"', function () {     //arrow function does not work in this case because it does not have context
        console.log(`Total number of goods in the list: ${this.products["products"].length}`)
        console.log('Data for the first product in the list:\n' + JSON.stringify(this.products["products"][0], '', 4))
        cy.log('Total number of goods and data for the first product look in the console (there more readable)')
    })
})