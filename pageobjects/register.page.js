const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $("//input[@id='register-email']") }
    get inputUsername () { return $("//input[@id='register-displayName']") }
    get inputPassword () { return $("//input[@id='register-password']") }
    
    get btnLoginFormOpen () { return $("//button[@class='sitetoolbar__login']") }

    get btnRegSwitch () { return $("//button[@data-switch='register-form']") }
    get btnAgreement () { return $("//input[@id='accept-agreement']") }
    get btnSubmit () { return $("//button[@type='submit' and span='Зарегистрироваться']") }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    open_loginForm() {

         this.btnLoginFormOpen.click(); 
    }
   
    switch_register () {
         this.btnRegSwitch.click(); 
    }

   

    register (email,username,password) {
        this.open_loginForm() ;
        this.switch_register();

        this.inputEmail.setValue(email);
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);

        this.btnAgreement.click();
       
        this.btnSubmit.click();
   }

    /**
     * overwrite specifc options to adapt it to page object
     */
    /*
    open () {
        return super.open();
    }*/
}

module.exports = new RegisterPage();
