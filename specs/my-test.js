const LoginPage = require('../pageobjects/login.page');
const DetailedPage = require('../pageobjects/detailed.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login('yourlight@yandex.ru', 's527527');

       // expect(SecurePage.ProfileShort).toBeExisting();
       // expect(SecurePage.ProfileShort).toHaveTextContaining('День рождения:');
    });

    it('Check the Detailed Page - <Profile Info> exists', () => {
       expect(DetailedPage.ProfileShort).toBeExisting();
    });

    it('Check the Detailed Page - <Profile Info> contains   FIO', () => {
          expect(DetailedPage.ProfileShort).toHaveTextContaining('Светлана Лапшина');
     });

});



