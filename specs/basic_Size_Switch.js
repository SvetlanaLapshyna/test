const assert = require('assert')
//const Page = require('./page');
//const myPage = require('../pageobjects/basic.page');

let varUrl='https://yandex.by/'
let varTitle='Яндекс'

describe('Open the page and Check Title and Logo', () => {

console.log('---------------------------------------------') ;
console.log(' Open Page and Change the page Size'); 
console.log(' Steps:'); 
console.log(' 1 : Open Page - webdriver.io'); 
console.log(' 2 : GetWindowSize'); 
console.log(' 3 : SetWindowSize'); 
console.log(' 4 : Maximize Window');
console.log(' 5 : Switch Window'); 
console.log(' 10 : Close Page'); 
console.log('---------------------------------------------') ;
    
    it('1. Open the Page', () => {
        console.log('---------------------------------------------') ;
        console.log('BEGIN STEP 1 : Open Page - webdriver.io'); 
        console.log('---------------------------------------------') ;
        //browser.setTimeout({ 'pageLoad': 10000 });
       
        //Page.open();
       browser.url(varUrl);
       
        browser.pause(3000);
        console.log('----------Check the Url-----------'); 
        expect(browser).toHaveUrl(varUrl);
        console.log('----------Check the title-----------'); 
        expect(browser).toHaveTitle(varTitle);   
        
        const tagmy=$("//a[@class='home-link home-logo__link']")
        tagmy.waitForDisplayed({ timeout: 3000 });
        /*
        const title= browser.getTitle();
                    
            if (Boolean(title)) {
                console.log('----------Title Exist---------------' ); 
            } else {
                console.log('----------Title NOT Exist ------'); 
            };
*/

        //response.to.have.status(200);

        //console.log('check url'); 
        //let obgResult=expect(browser).toHaveUrl('https://webdriver.io/');
       // console.log(obgResult); 
        console.log('---------------------------------------------') ;
        console.log('END STEP 1 :  Page : ' + varUrl); 
        console.log('---------------------------------------------') ;
        });

        it("2. GetWindowSize  ", function() {
            console.log('---------------------------------------------') ;
            console.log('BEGIN STEP 2 : GetWindowSize'); 
            console.log('---------------------------------------------') ;  
            console.log(browser.getWindowSize());
           
            console.log('---------------------------------------------') ;
            console.log('END STEP 2 :  GetWindowSize - OK!'); 
            console.log('---------------------------------------------') ;
        });

        it("3. SetWindowSize ", function() {
            console.log('---------------------------------------------') ;
            console.log('BEGIN STEP 3 : SetWindowSize'); 
            console.log('---------------------------------------------') ;  
            browser.setWindowSize(100, 300);
            browser.pause(2000);
            console.log(browser.getWindowSize());
            console.log('---------------------------------------------') ;
            console.log('END STEP 3 :  SetWindowSize - OK!'); 
            console.log('---------------------------------------------') ;
         });

         it("4. Maximize Window", function() {
            console.log('---------------------------------------------') ;
            console.log('BEGIN STEP 4 : maximizeWindow'); 
            console.log('---------------------------------------------') ;  
      
            browser.maximizeWindow();
            browser.pause(2000);
            console.log(browser.getWindowSize());
            console.log('---------------------------------------------') ;
            console.log('END STEP 4 :  maximizeWindow - OK!'); 
            console.log('---------------------------------------------') ;
        });

        it("5. SwtichWindow", function() {
            console.log('---------------------------------------------') ;
            console.log('BEGIN STEP 5 : SwtichWindow'); 
            console.log('---------------------------------------------') ;  
            const isxUrl=browser.getUrl();
            browser.newWindow(
                    "https://www.google.com/",
                    "Google Window",
                    "width=800,height=700,resizable,scrollbars=yes,status=1"
            );
            browser.pause(2000);
            console.log(browser.getTitle()); // print google title

            browser.switchWindow(isxUrl);
            browser.pause(2000);
            console.log(browser.getTitle()); // print landatest title

            console.log('---------------------------------------------') ;
            console.log('END STEP 5 :  SwtichWindow - OK!'); 
            console.log('---------------------------------------------') ;
            
    });


        it("10. Close Page", function() {
            console.log('---------------------------------------------') ;
            console.log('BEGIN STEP 10 : Close Page'); 
            console.log('---------------------------------------------') ;  
      
            browser.closeWindow();
           
            console.log('---------------------------------------------') ;
            console.log('END STEP 10 :  Close Page - OK!'); 
            console.log('---------------------------------------------') ;
        });



});

            
                
        


