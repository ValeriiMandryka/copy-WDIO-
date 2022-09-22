const Base = require('./Base');

const URL = 'https://telnyx.com/'
const btnAcceptAndClose = '//button[text()="Accept and close"]'
const btnJoinTheWaitList = '//header//a[text()="JOIN THE WAITLIST."]'
const logoTelnyx = '#Logo-Dark_svg__Layer_1' 
const textPowerfullProducts = '//*[text()="Powerful products."]'
const headerTop = '//*[@id="__next"]/child::div/header'
const linkCompareUs = '//*[@href="https://www.g2.com/categories/cloud-communication-platforms?utf8=%E2%9C%93&order=top_shelf"]'
const linkSeeAllProducts = '((//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[1]/descendant::div/a)[9]'
const linkSeeallSolutions = '((//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[2]/descendant::div/a)[4]'
const linkSeeAllUseCases = '((//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[2]/descendant::div/a)[9]'
const linkNetwork = '(//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[3]'
const linkSeeAllPrices = '((//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[6]/descendant::div/a)[9]'
const btnLogIn = '(//header//audio[@id="dialogAudio"]//following-sibling::a[text()="Log In"])[1]'

class MainPage extends Base {
    open () {return super.open(URL)}
    
    //Public elements for assertion
    get BtnAcceptAndClose () { return $(btnJoinTheWaitList)}
    get LogoTelnyx () { return $(logoTelnyx)}
    get HeaderTop () { return $(headerTop)}

    // Public HederTopMenus for assertion
    HeaderTopMenus(num)  {return $(`(//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[${num}]`)}
    PopUpProductsSubmenus(num) {return $(`((//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[1]/descendant::div/a)[${num}]`)}
    PopUpSolutionsSubmenus(num) {return $(`((//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[2]/descendant::div/a)[${num}]`)}
    PopUpResourcesSubmenus(num) {return $(`((//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[4]/descendant::div/a)[${num}]`)}
    PopUpCompanySubmenus(num) {return $(`((//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[5]/descendant::div/a)[${num}]`)}
    PopUpPricingSubmenus(num) {return $(`((//*[@class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"])[6]/descendant::div/a)[${num}]`)}
   
    //methods
    async clickBtnAcceptAndClose() {await super.clickElement(btnAcceptAndClose)}
    async clickBtnJoinTheWaitList() {await super.clickElement(btnJoinTheWaitList)}
    async clickLogoTelnyx() {await super.clickElement(logoTelnyx)}
    async clickLinkSeeAllProducts() {await super.clickElement(linkSeeAllProducts)}
    async clicklinkSeeallSolutions() {await super.clickElement(linkSeeallSolutions)} 
    async clicklinkSeeAllUseCases() {await super.clickElement(linkSeeAllUseCases)} 
    async clickNetwork() {await super.clickElement(linkNetwork)}
    async clicklinkSeeAllPrices() {await super.clickElement(linkSeeAllPrices)}
    async clickBtnLogIn() {await super.clickElement(btnLogIn)}

    async scrollTotextPowerfullProducts() {await super.scrollToElement(textPowerfullProducts)}
    async scrollToLinkCompareUs(){await super.scrollToElement(linkCompareUs)}

    async mouseOverProducts() {await super.mouseMoveTo(await this.HeaderTopMenus(1))}
    async mouseOverSolutions() {await super.mouseMoveTo(await this.HeaderTopMenus(2))}
    async mouseOverResources() {await super.mouseMoveTo(await this.HeaderTopMenus(4))}
    async mouseOverCompany() {await super.mouseMoveTo(await this.HeaderTopMenus(5))}
    async mouseOverPricing() {await super.mouseMoveTo(await this.HeaderTopMenus(6))}
    
    async waitForExistBtnLogIn() {await super.waitForExist(btnLogIn)}
    
}

module.exports = new MainPage();
