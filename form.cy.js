

describe('Mod 4 Project', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
       

    it('sanity check to make sure tests work', () => {

        expect(1 + 2).to.equal(3);
        expect( 2 + 2).not.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});

        
       })

       describe('test functionality of fields', () => {
        it('Test functionality of Name input', () => {
            const username = cy.get('input[name=username]');
            username.type('This is a Name')
            username.should('have.value', 'This is a Name')
        })
        it('Test functionality of Email input', () => {
            const email = cy.get('input[name=email]');
            email.type('email@thisisanemail.com')
        })
        it('Test functionality of Password input', () => {
            const password = cy.get('input[name=password]');
            password.type('ThisIsAPassword1234')
        })
        it('Test functionality of Checkbox input', () => {
            const checkBox = cy.get('input[name=tos]');
            checkBox.click()
            checkBox.check()
        })

        it('Test functionality of submit button', () => {
            const username = cy.get('input[name=username]');
            username.type('This is a Name')
            username.should('have.value', 'This is a Name')
    
            const email = cy.get('input[name=email]');
            email.type('email@thisisanemail.com')
    
            const password = cy.get('input[name=password]');
            password.type('ThisIsAPassword1234')
    
            const checkBox = cy.get('input[name=tos]');
            checkBox.click()

            const submitBtn = cy.get(`button`)
            submitBtn.click()
            cy.contains('This is a Name')
        })
       })









})