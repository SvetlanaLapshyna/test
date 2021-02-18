const assert = require('assert');
const loginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');


const varUrl='https://learn.javascript.ru/'
const varUrlWebdr='https://webdriver.io/'


console.log('---------------------------------------------') ;
console.log(' Open Page and register'); 
console.log(' Steps:'); 
console.log(' 1 : Open Page - ' + varUrl); 
console.log(' 2 : Click Login-button'); 


console.log(' 10 : Close Page'); 
console.log('---------------------------------------------') ;

describe('Open page and Register with Credentials' + varUrl, () => {
     it('should register with valid credentials', () => {
        RegisterPage.open('');
        browser.pause(2000);

        /*
        browser.url(varUrlWebdr);
        console.log(' -------wait---------------'); 
        browser.waitUntil( ()=> {
            return $("//h1[text()='Современный учебник JavaScript']").isDisplayed();
             }, 5000, 'Page is not opened');
       console.log(' -------wait- OK--------------'); 
        */
      // browser.saveScreenshot('D:\Tranning\Test_ts\test\specs\123.png');

        RegisterPage.register('yourlight@yandex.ru', 'Sveta', '123123');
        browser.pause(2000)

        RegisterPage.display_VerifyEmailMsg();
        
        /*
        RegisterPage.open_loginForm();
        browser.pause(2000)
        RegisterPage.switch_register();
        browser.pause(2000)
        */

       // expect(SecurePage.ProfileShort).toBeExisting();
       // expect(SecurePage.ProfileShort).toHaveTextContaining('День рождения:');
    });
/*
    it('Check the Detailed Page - <Profile Info> exists', () => {
       expect(DetailedPage.ProfileShort).toBeExisting();
    });

    it('Check the Detailed Page - <Profile Info> contains   FIO', () => {
          expect(DetailedPage.ProfileShort).toHaveTextContaining('Светлана Лапшина');
     });

*/
    });
