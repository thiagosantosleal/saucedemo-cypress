import { personal, company } from '../fixtures/consultancy.json'

describe('Formulário de Consultoria', () => {
    // before(() => {
    //     cy.log('Isso acontece antes de todos os testes uma única vez')
    // })

    BeforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    })

    it('Deve solicitar consultoria individual', () => {
        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()
        cy.validadeConsultancyModal()
    })

    it('Deve solicitar consultoria In Company', () => {
        cy.fillConsultancyForm(company)
        cy.submitConsultancyForm()
        cy.validadeConsultancyModal()
    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.submitConsultancyForm()

        cy.contains('label', 'Nome Completo *')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'Email *')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'termos de uso')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Você precisa aceitar os termos de uso')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
    })

    // AfterEach(() => {
    //     cy.log('Isso acontece depois de cada teste')
    // })

    // After(() => {
    //     cy.log('Isso acontece depois de todos os testes uma única vez')
    // })
})