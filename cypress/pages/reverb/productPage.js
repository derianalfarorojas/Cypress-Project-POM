class productPage{
    elements = {
        writeProductReviewBtn: () => cy.get(".csp-review-button").contains("Write a Product Review"),
        loginBtn: () => cy.get(".signup-signin__tab").contains("Log In"),
        emailInput: () => cy.get('input[id="signin--login"]'),
        passwordInput: () => cy.get('input[id="signin--password"]'),
        logInBtn: () => cy.get(".scaling-mtb-2").contains("Log In"),
        alerReview: () => cy.get(".alert-box__content").contains("Your review has been published. Thanks for helping other musicians!")

        
    }
    //////Inputs//////

    typeEmail(email){
        this.elements.emailInput().type(email);
    }
    typePassword(password){
        this.elements.passwordInput().type(password);
    }


    //////Clicks//////


    clickWriteProductReview(){
        this.elements.writeProductReviewBtn().click();
    }
    clickLoginBtn(){
        this.elements.loginBtn().click();
    }
    clickLogInBtn(){
        this.elements.logInBtn().click();
    }



}

module.exports = new productPage