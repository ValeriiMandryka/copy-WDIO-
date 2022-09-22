/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Base {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (url) { return browser.url(url)}

    

    
    findElement (element) {return $(element)}
    async clickElement (element) { await this.findElement(element).click()}
    async scrollToElement(element) { await this.findElement(element).scrollIntoView()}
    async mouseMoveTo(element) { await this.findElement(element).moveTo()}
    async setValue(element, value) {await this.findElement(element).setValue(value)}
    async waitForExist(element) {await this.findElement(element).waitForExist({ timeout: 60000 });}
    async addValue(element, value) {await this.findElement(element).addValue(value)}
}
