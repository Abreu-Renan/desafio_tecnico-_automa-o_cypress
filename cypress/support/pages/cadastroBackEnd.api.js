import { faker } from '@faker-js/faker';

const API_URL = Cypress.config('baseUrl');

class CadastroBackEndAPI {
    buildCadastroBody() {
        return {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: Cypress.env('password'),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
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
            url: `${API_URL}/api/createAccount`,
            form: true,
            body: data,
            failOnStatusCode: false
        }).as('cadastroResponse');
    }

    validarResponse() {
        cy.get('@cadastroResponse').then((response) => {
            expect(response.status).to.eq(201);
        });
    }
}

export default new CadastroBackEndAPI();