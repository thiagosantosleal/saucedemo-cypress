export const CartPage = {

    validateProductInCart(productName: string) {

        cy.get('.cart_item')
            .should('contain', productName);

    },

    clickCheckout() {

        cy.get('[data-test="checkout"]')
            .click();

    }

}