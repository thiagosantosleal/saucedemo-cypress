import { LoginPage } from "../pages/LoginPage";

describe('Login', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('CT001 - Validar login com credenciais válidas', () => {

        LoginPage.login(
            'standard_user',
            'secret_sauce'
        );

        LoginPage.validateLoginSuccess();

    });

});