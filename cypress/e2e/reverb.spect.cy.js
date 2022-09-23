import '../pages/reverb/homeReverbPage'
import homeReverbPage from '../pages/reverb/homeReverbPage'
import '../pages/reverb/productPage'
import productPage from '../pages/reverb/productPage'

    let email = "testNG2022@outlook.com"
    let password = "prueba2022"
    let test = "TestDidWithCypress"
    let text = "guitar"


describe ('checkPoint', () => {

    beforeEach(() => {
        cy.visit('https://reverb.com/')
    });

    it('Sign In to account', () => {
        homeReverbPage.clickSignIn();
        homeReverbPage.typeEmail(email);
        homeReverbPage.typePassword(password);
        homeReverbPage.clickLoginBtn();
        homeReverbPage.elements.avatarUser().should('be.visible')
    });

    it('Add Review', () => {
        homeReverbPage.typeInSearchBar(text);
        homeReverbPage.clickSearchBtn();
        homeReverbPage.clickImageProduct();
        productPage.clickWriteProductReview();
        productPage.clickLoginBtn();
        productPage.typeEmail(email);
        productPage.typePassword(password);
        productPage.clickLogInBtn();
        productPage.elements.alerReview().should('be.visible')
    });

    it('Add email to subscribe', () => {
        homeReverbPage.typeInEmailToSubscribe(email);
        homeReverbPage.elements.formAlert().should('be.visible');
    });

})