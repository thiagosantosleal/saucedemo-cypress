import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

describe('Carrinho', () => {

    beforeEach(() => {

        LoginPage.visit();

        LoginPage.login(
            'standard_user',
            'secret_sauce'
        );

    });

    it('CT003 - Validar adição de produto ao carrinho', () => {

        InventoryPage.addProductToCart(
            'Sauce Labs Backpack'
        );

        InventoryPage.validateCartBadge('1');

    });

});