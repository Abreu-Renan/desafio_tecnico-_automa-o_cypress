import { faker } from '@faker-js/faker';

class CadastroBackEndAPI {
    constructor() {
        this.baseUrl = Cypress.config('baseUrl');
    }

    buildCadastroBody() {
        return {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: Cypress.env('password'),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            company: faker.company.name(),
            address: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: faker.location.country(),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobile_number: Cypress.env('celular')
        };
    }

    fazerRequisicaoCadastro(data = this.buildCadastroBody()) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/api/createAccount`,
            body: data
        }).as('cadastroResponse');
    }

    validarResponse() {
        cy.get('@cadastroResponse').then((response) => {
            expect(response.status).to.eq(200);
        });
    }
}

export default new CadastroBackEndAPI();