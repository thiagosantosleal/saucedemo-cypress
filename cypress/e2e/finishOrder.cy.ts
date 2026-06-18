import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

describe('Finalização da Compra', () => {

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

        CheckoutPage.fillCheckoutData(
            'Thiago',
            'Leal',
            '06700-000'
        );

        CheckoutPage.clickContinue();

    });

    it('CT011 - Validar finalização da compra com sucesso', () => {

        CheckoutPage.clickFinish();

        CheckoutPage.validatePurchaseSuccess();

    });

});