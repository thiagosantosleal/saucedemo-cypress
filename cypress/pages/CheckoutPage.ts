export const CheckoutPage = {

    fillFirstName(firstName: string) {

        cy.get('[data-test="firstName"]')
            .clear()
            .type(firstName);

    },

    fillLastName(lastName: string) {

        cy.get('[data-test="lastName"]')
            .clear()
            .type(lastName);

    },

    fillPostalCode(postalCode: string) {

        cy.get('[data-test="postalCode"]')
            .clear()
            .type(postalCode);

    },

    clickContinue() {

        cy.get('[data-test="continue"]')
            .click();

    },

    fillCheckoutData(firstName: string, lastName: string, postalCode: string) {

        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillPostalCode(postalCode);

    },

    validateOverviewPage() {

        cy.url()
            .should('include', '/checkout-step-two.html');

        cy.get('.title')
            .should('contain', 'Checkout: Overview');

    },

    clickFinish() {

        cy.get('[data-test="finish"]')
            .click();

    },

    validatePurchaseSuccess() {

        cy.get('.complete-header')
            .should('contain', 'Thank you for your order!');

    }

}