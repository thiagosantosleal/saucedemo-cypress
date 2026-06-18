export const InventoryPage = {

    addProductToCart(productName: string) {

        cy.contains('.inventory_item', productName)
            .find('button')
            .click();

    },

    removeProduct(productName: string) {

        cy.contains('.inventory_item', productName)
            .find('button')
            .click();

    },

    validateCartBadge(quantity: string) {

        cy.get('.shopping_cart_badge')
            .should('contain', quantity);

    },

    openCart() {

        cy.get('.shopping_cart_link')
            .click();

    }

}