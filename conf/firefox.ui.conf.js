const {config} = require("../wdio.conf");
const path = require("path");

const firefoxConfig = {
...config,
services: ["selenium-standalone"],
capabilities: [{
maxInstances: 1,
browserName: "firefox",
'moz:firefoxOptions': {

args: [ '--start-maximized', '--no-sandbox', '--disable -gpu',  '--allow-insecure-localhost']

},
}],
logLevel: 'warn',
// reporters: [['allure', {
//     outputDir: 'allure-results',
//     disableWebdriverStepsReporting: true,
//     disableWebdriverScreenshotsReporting: true,
// }]],


path: "/wd/hub",

};

exports.config = firefoxConfig;