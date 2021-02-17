const assert = require('assert')
//const Page = require('./page');
const BasicPage = require('../pageobjects/basic.page');
const MenuPage = require('../pageobjects/menu.page');

let varUrl='https://webdriver.io/'


describe('CHECK', () => {
    
    it('1. Open the Page', () => {
        console.log('---------------------------------------------') ;
        console.log('BEGIN STEP 1 : Open Page - webdriver.io'); 
        console.log('---------------------------------------------') ;
        console.log('---- Open Page ------ '); 
        browser.setTimeout({ 'pageLoad': 10000 });
        BasicPage.open();
        console.log('---- Check title ------'); 
        browser.setTimeout({ 'pageLoad': 10000 });
        BasicPage.check();
       /*
        console.log('---- Open API ------'); 
        browser.setTimeout({ 'pageLoad': 10000 });
        MenuPage.open('docs/api/');    
        */
        console.log('---------------------------------------------') ;
        console.log('END STEP 1 :  Page:' + browser.getUrl()); 
        console.log('---------------------------------------------') ;
        });

    });


       /*
        browser.setTimeout({ 'pageLoad': 10000 });
        browser.url(varUrl);
        let tagmy=$("//p[@class='hero__subtitle']");
        expect(tagmy).toExist();
        const texttag='Next-gen browser and mobile automation test framework for Node.js'
        const texttagmy=tagmy.getText();
        assert(texttagmy==texttag);
        */
       

    