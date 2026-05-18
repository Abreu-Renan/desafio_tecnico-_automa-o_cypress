const Signup = '.shop-menu > .nav > :nth-child(4) > a';


class portal {
    acessarLogin() {
        cy.get(Signup).click();
    }
}
export default new portal();

