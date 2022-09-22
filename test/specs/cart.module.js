const loginPage = require("../pageobjects/login.page")
const mainPage = require("../pageobjects/main.page")
const portalPage = require("../pageobjects/portal.page")




describe ("cart module funcionality",() =>{

    it ("Open URL/accept cookies", async ()=>{
        await mainPage.open()
        await mainPage.clickBtnAcceptAndClose()
        await browser.setTimeout({'pageLoad': 30000,});
    })

    it ("Verify Log in with valid credentials", async ()=>{
    
        await loginPage.login()
        
    })
    it ("Verify the ability ya add a sim to the Cart", async ()=>{
        //await portalPage.waitfForExistIconCart()
        await portalPage.clickIconCart()
        await portalPage.clickBtnAddSimCard()
        await expect(portalPage.textOfSuccesfullAddedSim).toHaveText('Added 1 SIM to your cart.')

    })

})