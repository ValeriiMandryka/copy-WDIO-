const loginPage = require("../pageobjects/login.page")
const mainPage = require("../pageobjects/main.page")
const portalPage = require("../pageobjects/portal.page")



  

describe ("Messaging module",() =>{

    it ("Open URL/accept cookies", async ()=>{
        await mainPage.open()
        await mainPage.clickBtnAcceptAndClose()
        await browser.setTimeout({'pageLoad': 30000,});
    })
    it ("Log in", async ()=>{
    
        await loginPage.login()
    })

    it ("Create a 'Messaging profile' ability", async ()=>{
  
        await portalPage.waitForExisteBtnMasseging()
        await portalPage.clickBtnMasseging()
        await portalPage.waitForClickbleBtnCreateYourFistProfile()
        await portalPage.clickBtnCreateYourFistProfile()
        await portalPage.setValueIntoInputFieldMessagingProfileName()
        await portalPage.clickSubmitBtnSave()
        await portalPage.waiitForExistCreatedProfile()
        await expect(portalPage.createdMessagingProfile).toHaveText('Valerii')
             
    })
    it ("Verify ability to edit created 'Verify Profile'", async ()=>{
        await portalPage.clickIconEdit()
        await portalPage.clickInputFieldMessagingProfile()
        await portalPage.addValueChangedIntoInputFieldMessagingProfileName()
        await portalPage.waitForSubmitButtonClickable()
        await portalPage.clickSubmitBtnSave()
        await browser.setTimeout({'pageLoad': 30000,});
        await expect(portalPage.changedMessagingProfile).toHaveText('Valerii123')
        
    })
      it ("Verify ability to delete created 'Verify Profile'", async ()=>{
        await portalPage.clickIconDelete()
        await portalPage.clickSubmitBtnDelete()
        await expect(portalPage.createdMessagingProfile).not.toBeExisting()
        
      })
    })