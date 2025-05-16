const { test, expect } = require('@playwright/test');

exports.dashBoardPage = class dashBoardPage{

      constructor(page){

        this.page= page
        
        this.pim = page.locator('a[href="/web/index.php/pim/viewPimModule"]')


        
     }

     async clickonPIM(){

       await  this.pim.click()
     }
}