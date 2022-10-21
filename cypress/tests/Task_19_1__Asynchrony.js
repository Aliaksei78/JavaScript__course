///<reference types="Cypress" />


describe('Task 19.1 Asynchrony', () => {

    it('cy.request into "it"', () => {
        cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916').then(response => {
            cy.wrap(response.body["products"]).as('products')
            console.clear()
        })

        cy.get('@products').then(products => {
            console.log(`Total number of goods in the list: ${products.length}`)
            console.log('Data for the first product in the list:\n' + JSON.stringify(products[0], '', 4))
            cy.log('Total number of goods and data for the first product look in the console (there more readable)')
        })
    })
})