let text_name = "Thales";
let text_select = ['Creation a test', 'Making a test', 'Deploy a test'];
let value_select = ['creation a test', 'making a test', 'deploying a test'];

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('/')
        cy.wait(2000);
    })

    it('Test form', () => {
        cy.get('#header').find('h1').should('have.text','Training - Cypress');
        cy.get('#content label').eq(0).should('have.text','Enter name: ');
        cy.get('#test').select('Making a test');
        cy.get('.buttonSend').should('have.text','Send');
        cy.get('.buttonClear').should('have.text','Clear');
        cy.get('#footer').find('h5').should('have.text','Adriene');
        cy.get('#footer').find('h6').should('have.text','02/2021');
    })

    it('Test select', () => {
        cy.get('#test')
            .select('Creation a test').should('have.value','creation a test')
            .select('Making a test').should('have.value','making a test')
            .select('Deploy a test').should('have.value','deploying a test');
    })

    it('Test upload a file', () => {
        cy.get('#file').attachFile('logo.jpg');
        cy.get('#file').should('have.value','C:\\fakepath\\logo.jpg')
    })

    it('Test SEND button', () => {
        cy.get('#name').type(text_name);
        cy.get('#test').select(value_select[2]);
        cy.get('#file').attachFile('logo.jpg');
        cy.get('.buttonSend').should('have.text','Send').click();
        cy.get('#demo').should('have.text',text_name+' is '+value_select[2]);
        cy.get('#output').should('be.visible');
    })

    it('Test CLEAR button', () => {
        cy.get('.buttonClear').should('have.text','Clear').click();
        cy.get('#demo').should('have.text','');
        cy.get('#output').should('not.visible');
    })
})