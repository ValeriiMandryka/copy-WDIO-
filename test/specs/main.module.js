


const mainPage = require("../pageobjects/main.page")





describe ("Main page ",() =>{

    it ("Open URL/accept cookies", async ()=>{
        await mainPage.open()
        await mainPage.clickBtnAcceptAndClose()
        await browser.setTimeout({'pageLoad': 30000,});
      })

    it ("Verify functionality of Logo Icon 'Telnyx'", async ()=>{
    
        await mainPage.clickBtnJoinTheWaitList()
        await mainPage.clickLogoTelnyx()
        await expect(browser).toHaveUrl('https://telnyx.com/')
        
    })
    it ("Verify the ability of the head navigation  menu to appear and disappear", async ()=>{
        await mainPage.scrollTotextPowerfullProducts()
        await expect(mainPage.HeaderTop).not.toBeDisplayedInViewport()
        await mainPage.scrollToLinkCompareUs()
        await expect(mainPage.HeaderTop).toBeDisplayedInViewport()
        
    })
    it ("Verify the pop-up functionality of the 'Products'", async ()=>{
        await mainPage.mouseOverProducts()
        await expect(mainPage.PopUpProductsSubmenus(1)).toBeDisplayed()
        await expect(mainPage.PopUpProductsSubmenus(2)).toBeDisplayed()
        await expect(mainPage.PopUpProductsSubmenus(3)).toBeDisplayed()
        await expect(mainPage.PopUpProductsSubmenus(4)).toBeDisplayed()
        await expect(mainPage.PopUpProductsSubmenus(5)).toBeDisplayed()
        await expect(mainPage.PopUpProductsSubmenus(6)).toBeDisplayed()
        await expect(mainPage.PopUpProductsSubmenus(7)).toBeDisplayed()
        await expect(mainPage.PopUpProductsSubmenus(8)).toBeDisplayed()
        await expect(mainPage.PopUpProductsSubmenus(9)).toBeDisplayed()
    })
    it ("Verify the pop-up functionality of the Solutions", async ()=>{
        await mainPage.mouseOverSolutions()
        await expect(mainPage.PopUpSolutionsSubmenus(1)).toBeDisplayed()
        await expect(mainPage.PopUpSolutionsSubmenus(2)).toBeDisplayed()
        await expect(mainPage.PopUpSolutionsSubmenus(3)).toBeDisplayed()
        await expect(mainPage.PopUpSolutionsSubmenus(4)).toBeDisplayed()
        await expect(mainPage.PopUpSolutionsSubmenus(5)).toBeDisplayed()
        await expect(mainPage.PopUpSolutionsSubmenus(6)).toBeDisplayed()
        await expect(mainPage.PopUpSolutionsSubmenus(7)).toBeDisplayed()
        await expect(mainPage.PopUpSolutionsSubmenus(8)).toBeDisplayed()
        await expect(mainPage.PopUpSolutionsSubmenus(9)).toBeDisplayed()
    })
    it ("Verify the pop-up functionality of the Resources", async ()=>{
        await mainPage.mouseOverResources()
        await expect(mainPage.PopUpResourcesSubmenus(1)).toBeDisplayed()
        await expect(mainPage.PopUpResourcesSubmenus(2)).toBeDisplayed()
        await expect(mainPage.PopUpResourcesSubmenus(3)).toBeDisplayed()
        await expect(mainPage.PopUpResourcesSubmenus(4)).toBeDisplayed()
        await expect(mainPage.PopUpResourcesSubmenus(5)).toBeDisplayed()
        await expect(mainPage.PopUpResourcesSubmenus(6)).toBeDisplayed()
    })
    it ("Verify the pop-up functionality of the Company", async ()=>{
        await mainPage.mouseOverCompany()
        await expect(mainPage.PopUpCompanySubmenus(1)).toBeDisplayed()
        await expect(mainPage.PopUpCompanySubmenus(2)).toBeDisplayed()
        await expect(mainPage.PopUpCompanySubmenus(3)).toBeDisplayed()
        await expect(mainPage.PopUpCompanySubmenus(4)).toBeDisplayed()
    })
    it ("Verify the pop-up functionality of the Pricing", async ()=>{
        await mainPage.mouseOverPricing()
        await expect(mainPage.PopUpPricingSubmenus(1)).toBeDisplayed()
        await expect(mainPage.PopUpPricingSubmenus(2)).toBeDisplayed()
        await expect(mainPage.PopUpPricingSubmenus(3)).toBeDisplayed()
        await expect(mainPage.PopUpPricingSubmenus(4)).toBeDisplayed()
        await expect(mainPage.PopUpPricingSubmenus(5)).toBeDisplayed()
        await expect(mainPage.PopUpPricingSubmenus(6)).toBeDisplayed()
        await expect(mainPage.PopUpPricingSubmenus(7)).toBeDisplayed()
        await expect(mainPage.PopUpPricingSubmenus(8)).toBeDisplayed()
        await expect(mainPage.PopUpPricingSubmenus(9)).toBeDisplayed()
    })
    it ("Check redirection to the 'Products' page and its activity", async ()=>{
       await mainPage.mouseOverProducts()
       await mainPage.clickLinkSeeAllProducts()
       await browser.setTimeout({'pageLoad': 10000,});
       await expect(browser).toHaveUrl("https://telnyx.com/products")
    })
    it ("Check redirection to the 'Solutions' page and its activity", async ()=>{
        await mainPage.mouseOverSolutions()
        await mainPage.clicklinkSeeallSolutions()
        await browser.setTimeout({'pageLoad': 10000,});
        await expect(browser).toHaveUrl("https://telnyx.com/solutions")
    })
    it ("Check redirection to the 'Use-cases' page and its activity", async ()=>{
        await mainPage.mouseOverSolutions()
        await mainPage.clicklinkSeeAllUseCases()
        await browser.setTimeout({'pageLoad': 30000,});
        await expect(browser).toHaveUrl("https://telnyx.com/use-cases")
    })
    it ("Verify the redirection to 'Network' page", async ()=>{
        await mainPage.clickNetwork()
        await browser.setTimeout({'pageLoad': 30000,});
        await expect(browser).toHaveUrl('https://telnyx.com/solutions/global-ip-network')
    })
    it ("Check redirection to the 'Pricing' page and its activity", async ()=>{
        await mainPage.mouseOverPricing()
        await mainPage.clicklinkSeeAllPrices()
        await browser.setTimeout({'pageLoad': 30000,});
        await expect(browser).toHaveUrl("https://telnyx.com/pricing")
    })
    it ("Check redirection to the 'Join to the waitlist' page and its activity", async ()=>{
        await mainPage.clickBtnJoinTheWaitList()
        await browser.setTimeout({'pageLoad': 30000,});
        await expect(browser).toHaveUrl("https://telnyx.com/products/storage")
    })
    
})
   