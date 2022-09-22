const loginPage = require("../pageobjects/login.page")
const mainPage = require("../pageobjects/main.page")




describe ("Logining",() =>{

    it ("Open URL/accept cookies", async ()=>{
        await mainPage.open()
        await mainPage.clickBtnAcceptAndClose()
        await browser.setTimeout({'pageLoad': 30000,});
    })

    it ("Verify Log in with valid credentials", async ()=>{
    
        await loginPage.login()
        await expect(browser).toHaveUrlContaining('https://portal.telnyx.com/')
    })
})