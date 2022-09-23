class homeReverbPage{
        
        elements = {
            signin: () => cy.get(":nth-child(6) > .reverb-header__nav__link"),
            emailInput: () => cy.get('input[id="signin--login"]'),
            passwordInput: () => cy.get('input[id="signin--password"]'),
            loginBtn: () => cy.get(".scaling-mtb-2").contains("Log In"),
            avatarUser: () => cy.get('[alt="User Avatar"]'),
            inputEmailSubscribe: () => cy.get(".input-group__input").eq(1),
            formAlert: () => cy.get(".newsletter-signup"),
            searchBar: () => cy.get('.site-search__controls__input'),
            imageProduct: () => cy.get('.image-box').eq(2),
            searchBtn: () => cy.get('.site-search__controls__submit'),
            subscribeButton: () => cy.get("#input-group__button button").eq(1)
        }
        //////Inputs/////

        typeEmail(email){
            this.elements.emailInput().type(email);
        }
        typePassword(password){
            this.elements.passwordInput().type(password);
        }

        typeInSearchBar(info){
            this.elements.searchBar().type(info);
        }

        typeInEmailToSubscribe(email){
            this.elements.inputEmailSubscribe().type(email);
        }

       
        
        //////Clicks/////

        clickSignIn(){
            this.elements.signin().click();
        }
        clickLoginBtn(){
            this.elements.loginBtn().click();
        }
        clickSearchBtn(){
            this.elements.searchBtn().click();
        }
        clickImageProduct(){
            this.elements.imageProduct().click();
        }
        clickSubscribeBtn(){
            this.elements.subscribeButton().click();
        }
      
}



module.exports = new homeReverbPage(); 