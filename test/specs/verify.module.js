const loginPage = require("../pageobjects/login.page")
const mainPage = require("../pageobjects/main.page")
const portalPage = require("../pageobjects/portal.page")


  

describe ("Verify module",() =>{

    it ("Open URL/accept cookies", async ()=>{
        await mainPage.open()
        await mainPage.clickBtnAcceptAndClose()
        await browser.setTimeout({'pageLoad': 30000,});
    })
    it ("Log in", async ()=>{
    
        await loginPage.login()
    })

    it ("Create a 'Verify profile' ability", async ()=>{
        
        await portalPage.waitForExistbBtnVerify()
        await portalPage.clickBtnVerify()
        await portalPage.clickBtnCreateVerifyProfile()
        await portalPage.setValueIntoinputFieldProfileName()
        await portalPage.clickSubmitBtnCreat()
        await browser.setTimeout({'pageLoad': 30000,});
        await expect(portalPage.succesfullMessage).toHaveText('Verify Profile created successfully')
              
        
      })
      it ("Verify ability to delete created 'Verify Profile'", async ()=>{
        await portalPage.clickIconDelete()
        await portalPage.waitForClickbleBtnDelete()
        await portalPage.clickSubmitBtnDelete()
        await browser.setTimeout({'pageLoad': 30000,});
        await expect(portalPage.text).toHaveText('Create Your First Verify Profile')
         
        
      })
    })


