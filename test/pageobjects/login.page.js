const Base = require('./Base');
const mainPage = require('./main.page');

const email = 'ValeriicorporateLQ@gmail.com'
const password = 'Qwerty!123456'
const inputFieldEmail = '//*[@aria-label="loginForm"]//descendant::div/input[@name="email"]'
const inputFieldPassword = '//*[@aria-label="loginForm"]//descendant::div/input[@name="password"]'
const btnSubmitLogIn = '//*[@type="submit"][text()="Log in"]'

class LoginPage extends Base {

async login() {
    await mainPage.waitForExistBtnLogIn()
    await mainPage.clickBtnLogIn()
    await browser.setTimeout({'pageLoad': 60000,});
    await super.setValue(inputFieldEmail, email)
    await super.setValue(inputFieldPassword, password)
    await super.findElement(btnSubmitLogIn).waitForClickable()
    await super.clickElement(btnSubmitLogIn)
    await browser.setTimeout({'pageLoad': 60000,});
    
}

}
module.exports = new LoginPage();