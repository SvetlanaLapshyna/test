const assert = require('assert')
console.log('---------------------------------------------') ;
console.log(' Open Page and Get different Locators'); 
console.log(' Steps:'); 
console.log(' 1 : Open Page - webdriver.io'); 
console.log(' 2 : Check xPath for Span with Text Fragment'); 
console.log(' 3 : Check xPath for Link with Href'); 
console.log(' 4 : Check xPath for Div with Text'); 
console.log(' 5 : Demonstration the click command for Link'); 
console.log(' 10 : Close Page'); 
console.log('---------------------------------------------') ;



describe('Get different Locators', () => {
    
    it('1. Open the Page', () => {
        console.log('---------------------------------------------') ;
        console.log('BEGIN STEP 1 : Open Page - webdriver.io'); 
        console.log('---------------------------------------------') ;
       
        browser.setTimeout({ 'pageLoad': 10000 });
        browser.url('https://yandex.by/');
        console.log('---------------------------------------------') ;
        console.log('END STEP 1 :  Page:' + browser.getUrl()); 
        console.log('---------------------------------------------') ;
        });


    it('2. Check xPath for Span with  Text Fragment', () => {
        console.log('---------------------------------------------') 
        console.log('BEGIN STEP 3 : Check xPath for Span with Text Fragment') 
        console.log('---------------------------------------------') 
    
        //const tagmy=$("//span[contains(text(),'Сейчас в СМИ')]")
        const tagmy=$("//span[contains(text(),'в СМИ')]")
    
        expect(tagmy).toExist();
        tagmy.getText();
        
        console.log('---------------------------------------------') 
        console.log('END STEP 3 : XPATH for Span with Text Fragment founded!'); 
        console.log('---------------------------------------------')      
    });


        it('3. Check xPath for Link with Href', () => {
            console.log('---------------------------------------------') 
            console.log('BEGIN STEP 3 : Check xPath for Link with Href') 
            console.log('---------------------------------------------') 
          
            const tagmy=$('//a[@href="https://yandex.by/maps?utm_source=main_stripe_big"]')
           
            expect(tagmy).toExist();
            
            console.log('---------------------------------------------') 
            console.log('END STEP 3 : XPATH for Link with Href founded!'); 
            console.log('---------------------------------------------')      
         });

         it('4. Check xPath for Div with Text', () => {
            console.log('---------------------------------------------') 
            console.log('BEGIN STEP 4 : Check xPath for Div with Text') 
            console.log('---------------------------------------------') 
          
            const tagmy=$("//div[text()='Новости']")
           // const tagmy=$("//*[text()='Новости']")
           
            expect(tagmy).toExist();
            
            const getTextTag=tagmy.getText()
    
            console.log('---------------------------------------------') 
             if (getTextTag) {
                console.log('Right XPATH founded! -  ' + getTextTag) 
                 } else {
                console.log('NOT founded Right XPATH!') 
                 } 
            console.log('---------------------------------------------') 
            console.log('END STEP 4 :  Check xPath for Div with Text!'); 
            console.log('---------------------------------------------')      
         });


         it('5. Demonstration the click command', () => {
            console.log('---------------------------------------------') 
            console.log('BEGIN STEP 5 : Demonstration the click command') 
            console.log('---------------------------------------------') 
          
            const blogBtn=$('//a[@data-id="images"]')
            blogBtn.click()
            browser.pause(2000)
            
            console.log('---------------------------------------------') 
            console.log('END STEP 5 :  Demonstration the click command!'); 
            console.log('---------------------------------------------')      
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
/*
        const lstHeaderLinks = $$(".//*[@class='navbar__items']/a");
 
        lstHeaderLinks.forEach(element => {
                console.log(element.getHTML());
                console.log(element.getText());

 */               
                
        


       // $("=API").click();

       /*
        console.log('LINK'); 
        const link = $('*=driver')
        console.log('RESULT - LINK');
        console.log(link.getText()) 
       */

    //});
/*
    it('2. Check right xPath', () => {
        console.log('---------------------------------------------') 
        console.log('BEGIN STEP 2 : Check right xPath') 
        console.log('---------------------------------------------') 
      //  browser.setTimeout({ implicit: 10, pageLoad: 10, script: 50 });
        const tagmy=$('//*[@id="__docusaurus"]/div[3]/header/div/p')
       // browser.setTimeout({  'script': 1 })
        expect(tagmy).toExist();
        
        const getTextTag=tagmy.getText()

        console.log('---------------------------------------------') 
         if (getTextTag) {
            console.log('Right XPATH founded! -  ' + getTextTag) 
             } else {
            console.log('NOT founded Right XPATH!') 
             } 
        console.log('---------------------------------------------') 
        console.log('END STEP 2 :  Right XPATH founded!'); 
        console.log('---------------------------------------------')      
     });

    it('3. Check wrong xPath', () => {
        console.log('---------------------------------------------') 
        console.log('BEGIN STEP 3 : Check wrong xPath') 
        console.log('---------------------------------------------') 
                   
        const tagmy=$('//*[@id="__docusaurus"]/div[3]/header/p')
        //browser.setTimeout({ 'implicit': 5000 })
        expect(tagmy).toExist();
        const getTextTag=tagmy.getText()

        if (getTextTag) {
           console.log('Wrong XPATH founded!' + getTextTag) 
            } else {
                 console.log('NOT founded Wrong XPATH!') 
            } 
        console.log('---------------------------------------------') 
        console.log('END STEP 3 :  Wrong XPATH founded!'); 
        console.log('---------------------------------------------')           

    });

*/




/*
    it('2. Check the title', () => {
        console.log('2 STEP: Check the title'); 
        const title= browser.getTitle();
                
        if (Boolean(title)) {
            console.log('1.2  Title exist!' + ' \n' + title ); 
        } else {
            console.log('1.2  Title NOT exist!:' + ' \n'); 
        };
    });


    it('3. Get Location for LOGO', () => {
                
        const logo = $('.navbar__brand');
        expect(logo).toBeDisplayed();
        
        let ifExist=
        console.log(ifExist); 

        if (ifExist) {
            console.log('1.3  LOGO exist!' + title); 
        } else {
            console.log('1.3  LOGO NOT exist!:'); 
        };
*/
    /*    const location = logo.getLocation();
        console.log(location); 
            
        const xLocation = logo.getLocation('x')
        console.log(xLocation); 
            
        const yLocation = logo.getLocation('y')
        console.log(yLocation); 
    });
    */

/*
    it('should fetch menu links and visit each page', () => {
        const links = $$('.navbar__items a')
        browser.pause(2000);
        links.forEach((link) => {
            link.click()
            browser.pause(2000);
        })
    })*/
/*

});
    

describe('webdriver.io page', () => {
    
    
    it('should have the right Placeholder for Search field in Header', () => {
      
        let PlaceholderMy=$('.DocSearch-Button-Placeholder');
        value=PlaceholderMy.getText();
        console.log('Placeholder in  Search field = ' + value);   
        assert(value==='Search');
        
    })
             
    it('click the SEARCH button', () => {
        //const blogBtn=$('a.footer__link-item [href="/blog"]');
        const blogBtn=$('.DocSearch-Button');
        blogBtn.click();
        //browser.pause(6000);
        
     })
     it('check displaying the SEARCH pop-up', () => {
        const elem = $('.DocSearch-SearchBar')
        expect(elem).toBeDisplayed()    
     })

     it('check attribute <placeholder> in SearchBar', () => {
        const elem = $('.DocSearch-Input')
        const elemPlaceholder = elem.getAttribute('placeholder');
        //value=elemPlaceholder.getText();
        console.log(elemPlaceholder);   
        assert(elemPlaceholder==='Search docs');   
     })

     it('input value in Search field', () => {
        const elem = $('.DocSearch-Input')
        elem.setValue('locator')
        browser.pause(2000);
     })
     it('check value is in Search field', () => {
        const elem = $('.DocSearch-Input')
        expect(elem).toHaveValueContaining('locator')
        browser.pause(1000);
     })

     it('enter inputed value in Search field', () => {
        browser.keys("\uE007"); 
        browser.pause(6000);
     })

 

    
})
*/

