const assert=require('assert');
let var1=9;
let var2=3*3;
let var3=(3-4)*8;
let var4=-9;

//const assert = require('assert');
function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result=1;

    for(let i = 0; i < n; i++){
        result *= x;
    }
    return result;
  }


  describe("pow", function() {

    before(() => console.log("Тестирование началось – перед тестами"));
    after(() => console.log("Тестирование закончилось – после всех тестов"));
  
   // beforeEach(() => console.log("Перед тестом – начинаем выполнять тест"));
    //afterEach(() => console.log("После теста – заканчиваем выполнение теста"));

    describe("возводит x в степень 3 for many tests", function() {
  
      function makeTest(x) {
        let expected = x * x * x;
        it(`${x} в степени 3 будет ${expected}`, function() {
          assert.equal(pow(x, 3), expected);
        });
      }
  
      for (let x = 1; x <= 5; x++) {
        makeTest(x);
        console.log(`pow for many - ${x}!`)
      }

      
    });
    describe("возводит 3 в степень 5 for 1 test", function() {
        let x=3
        let n=5
        let resExpected = x * x * x * x * x;
        //let rez_exp=pow(2, 3)
        it(`возводит ${x} в степень ${n} - for 1 test`, function() {

        assert.equal(pow(x, n), resExpected);
        console.log('pow for 1 - done!')
        });
  
    });

    it("для отрицательных n возвращает NaN", function() {
        assert.equal (pow(2, -1),NaN);
      });
    
      it("для дробных n возвращает NaN", function() {
        assert.equal(pow(2, 1.5),NaN);
      });

});


//    describe("pow", function() {

    
  
  /*   it("возводит в степень n - for many test", function() {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function() {
              assert.equal(pow(x, 3), expected);
              console.log(`${x} в степени 3 будет ${expected}`)
            });
          }
        
          for (let x = 1; x <= 5; x++) {
            makeTest(x);

          } */

        //assert.equal(pow(2, 3), 8);
        //console.log('pow for many - done!')
     // });

 

describe('Math tests',()=> {
    

    xit('should return true for Expression № 1' , () =>{
         assert.equal(var1, var2,'Неверное равенство!');
    })
    xit('should return true for Expression № 2' , () =>{
        assert.equal(var3, var4,'Неверное равенство!');
   })


    xit('should return true for Right Expression old' , () =>{
        assert.equal(var1, var2,'Неверное равенство!');
      
       if (assert(3*3==9)) {
           console.log('Верное равенство!' );
       } else{
           console.log('Неверное равенство!' )
       };
       

       if (assert.equal(var1, var2)) {
           console.log('Верное равенство!' );
       } else{
           console.log('Неверное равенство!' );
       }
       
      
       //assert(9==4*3);
       //console.log('----------------------' +  assert.AssertionError.message);
       //console.log('----------------------' +  assert.AssertionError.code);
       //assert.AssertionError.message
       //assert.AssertionError.code
       
   })
}) 

