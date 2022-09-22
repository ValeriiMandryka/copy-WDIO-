const {config} = require("../wdio.conf");
const path = require("path");

const firefoxHeadlessConfig = {
...config,
services: ["selenium-standalone"],
capabilities: [{
maxInstances: 4,
browserName: "firefox",
'moz:firefoxOptions': {

args: ['--headless', '--start-maximized', '--no-sandbox', '--disable -gpu', '--window-size=1920,780', '--allow-insecure-localhost']

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

exports.config = firefoxHeadlessConfig;