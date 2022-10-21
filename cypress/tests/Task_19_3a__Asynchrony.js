///<reference types="Cypress" />


describe('Task 19.3a Asynchrony', () => {

    it('cy.request into "it + new Promise() separated"', () => {

        const products = new Promise((resolve, reject) => {
            cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916').then(response => {
                console.clear()
                if (response.body["products"]) {
                    resolve(response.body["products"])
                }
                reject('Products list receiving was failed')
            })
        })

        products
            .then(products => {     //'products' came from 'resolve(response.body["products"])' above
                console.log(`Total number of goods in the list: ${products.length}`)
                console.log('Data for the first product in the list:\n' + JSON.stringify(products[0], '', 4))
                cy.log('Total number of goods and data for the first product look in the console (there more readable)')
            })
            .catch(error => console.error('Error: ' + error))

        // additional part just for practice:
        const products2 = new Promise((resolve, reject) => {
            products.then(products => {
                console.log(`Total number of goods in the list from Promise2 where we are manipulating of Promise1: ${products.length + 10}`)
                if (products.length + 10) {
                    resolve(products.length + 10)
                }
                reject('Manipulating with products list was failed')
            }).catch(error => console.error('Error: it is a consequence of the error: ' + error))
        })

        products2
            .then(products2 => {     //'products2' came from 'resolve(products.length + 10)' above
                console.log(`Total number of goods in the list from block where we are using Promise2: ${products2 + 20}  !!! Chain of promises works !!!`)
            })
            .catch(error => console.error('Error: ' + error))
    })
})
