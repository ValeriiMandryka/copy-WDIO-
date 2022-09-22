const Base = require("./Base");

//Values
const profileName = 'Valerii'
const profileNameChanged ='123'
//elements for Verify module
const btnVerify = '(//*[text()="Verify"])[2]'
const btnCreateVerifyProfile = '//*[text()="Create Verify Profile"]'
const inputFieldProfileName = '//*[@data-testid="app.verify.profiles.edit.form-name"]'
const submitBtnCreat = '//*[@data-testid="app.verify.profiles.edit.form-submit"]'
const iconDelete = '//*[@class="TelnyxIcon_telnyxIcon-tx-29uTJw telnyx-icon-trash fa-fw"]'
const submitBtnDelete = '//aside//span[text()="Delete"]'
//elements for Messaging module
//creat
const btnMasseging = '(//*[text()="Messaging"])[2]'
const btnCreateYourFistProfile = '//*[@class="Button_content-tx-1n4VDd"]'
const inputFieldMessagingProfileName = '//*[@theme="portal-2019"]'
const submitBtnSave = '//*[text()="Save"]'
//Edit
const iconEdite = '//*[@class="TelnyxIcon_telnyxIcon-tx-29uTJw telnyx-icon-edit fa-fw"]'
//elements for Cart module
const cart = '//*[text()="Cart"]'
const btnAddSimCard = '//*[text()="Add SIM to Cart"]'

class PortalPage extends Base {
//Public elements for assertion for Verify module
get succesfullMessage() {return $('//*[text()="Verify Profile created successfully"]')}
get succesfullMessage() {return $('//*[text()="Verify Profile created successfully"]')}
get text() {return $('//*[@class="Text-cpHOas Section__Header-cMJZlf ruGbE juXwaZ"]')}
//methods for Verify module
 async clickBtnVerify() { await super.clickElement(btnVerify)}
 async setValueIntoinputFieldProfileName() {await super.setValue(inputFieldProfileName, profileName)}
 async clickBtnCreateVerifyProfile() { await super.clickElement(btnCreateVerifyProfile)}
 async waitForExistbBtnVerify() {await super.waitForExist(btnVerify)}
 async clickSubmitBtnCreat() {await super.clickElement(submitBtnCreat)}
 async clickIconDelete() {await super.clickElement(iconDelete)}
 async clickSubmitBtnDelete() {await super.clickElement(submitBtnDelete), {force: true}}
 async waitForClickbleBtnDelete() {await super.findElement(submitBtnDelete).waitForClickable()}

     //Messaging module
    //Create
 //Public elements for assertion 
 get createdMessagingProfile() {return $('//*[@data-testid="row-name"]')}

    
 //methods  
 async waitForExisteBtnMasseging() {await super.waitForExist(btnMasseging)}
 async clickBtnMasseging() {await super.clickElement(btnMasseging)}
 async waitForClickbleBtnCreateYourFistProfile() {await super.findElement(btnCreateYourFistProfile).waitForClickable()}
 async clickBtnCreateYourFistProfile() {await super.clickElement(btnCreateYourFistProfile)}
 async setValueIntoInputFieldMessagingProfileName() {await super.setValue(inputFieldMessagingProfileName, profileName )}
 async clickSubmitBtnSave() {await super.clickElement(submitBtnSave)}
 async waitForSubmitButtonClickable() {await this.findElement(submitBtnSave).waitForClickable()}
 async waiitForExistCreatedProfile() {await this.createdMessagingProfile.waitForExist()}

  
  
 
      //Edit
 //Public elements for assertion 
 get changedMessagingProfile() {return $('//*[@class="tx-2jo5gH tx-2tY6qe tx-FwKkh"]')}
 //methods 
 
 async clickIconEdit() {await super.clickElement(iconEdite)} 
 async clickInputFieldMessagingProfile() {await super.clickElement(inputFieldMessagingProfileName)}
 async addValueChangedIntoInputFieldMessagingProfileName() {await super.addValue(inputFieldMessagingProfileName, profileNameChanged )}

     //Cart
    //Public elements for assertion
 get textOfSuccesfullAddedSim() {return $('//*[text()="Added 1 SIM to your cart."]')}
 //methods
 async waitfForExistIconCart() {await super.findElement(cart).waitForExist()}
 async clickIconCart() {await super.clickElement(cart)}
 async clickBtnAddSimCard() {await super.clickElement(btnAddSimCard)}



}

module.exports = new PortalPage ()