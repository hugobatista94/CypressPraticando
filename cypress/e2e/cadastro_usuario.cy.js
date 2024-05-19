// <reference types="cypress" />

import {faker} from '@faker-js/faker';

import commum_page from "../support/pages/commum_page";
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page";



describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMessagemErro('O campo nome deve ser prenchido')
    });

    it('Campo E-mail vazio', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMessagemErro('O campo e-mail deve ser prenchido corretamente')

    });

    it('Campo E-mail invalido', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail('testeEmail')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMessagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo senha vazio', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMessagemErro('O campo senha deve ter pelo menos 6 dígitos')
 
    });

    it('Campo senha invalido', () => {
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preenchePassword('123')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMessagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro com sucesso', async () => {

        const person = await faker.person.fullName()

        cadastro_usuario_page.preencheNome(person)
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preenchePassword('123456')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(person)
    });


})