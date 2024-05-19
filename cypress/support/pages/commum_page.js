//<reference types="cypress" />

export default {
    acessarCadastroUsuario() {
        cy.visit('/')
            .get('.logo')

        cy.get('.fa-lock')
            .click()
    }
}