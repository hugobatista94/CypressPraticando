// <reference types="cypress" />

export default {

        clicarCadastrar() {
            cy.get('#btnRegister')
                .click()
        },

        // validarMessagemErro()  {
        //     cy.get('.errorLabel')
        //         .then ((element) => {
        //             expect(element).to.be.visible
        //             expect(element.text()).eq('O campo nome deve ser prenchido')
        //         })
        // },

        // validarMessagemErro()  {
        //     cy.get('.errorLabel')
        //         .should('be.visible')
        //         .should('have.text', 'O campo nome deve ser prenchido')
        // },

        validarMessagemErro(mensagem)  {
            cy.get('.errorLabel')
                .should('be.visible')
                .should('have.text', mensagem)
        }, 

        preencheNome(nome) {
            cy.get('#user')
               .type(nome)
        }, 

        preencheEmail(email) {
            cy.get('#email')
               .type(email)
        }, 

        preenchePassword(password) {
            cy.get('#password')
               .type(password)
        },

        validarMensagemSucesso(person){
            cy.get('#swal2-title')
              .should('be.visible')
              .should('have.text', 'Cadastro realizado!')

            cy.get('#swal2-html-container')  
              .should('be.visible')
              .should('have.text', `Bem-vindo ${person}`)
            }
        
}