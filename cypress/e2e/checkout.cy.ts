import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

describe('Checkout', () => {

    beforeEach(() => {

        LoginPage.visit();

        LoginPage.login(
            'standard_user',
            'secret_sauce'
        );

        InventoryPage.addProductToCart(
            'Sauce Labs Backpack'
        );

        InventoryPage.openCart();

        CartPage.clickCheckout();

    });

    it('CT007 - Validar checkout com todos os campos obrigatórios preenchidos', () => {

        CheckoutPage.fillCheckoutData(
            'Thiago',
            'Leal',
            '06700-000'
        );

        CheckoutPage.clickContinue();

        CheckoutPage.validateOverviewPage();

    });

});