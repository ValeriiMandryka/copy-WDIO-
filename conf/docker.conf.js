const {config} = require("../wdio.conf");
const path = require("path");

const dockerConfig = {
...config,
services: ["docker"],
capabilities: [
 {
   maxInstances: 5,
   browserName: "firefox",
   'moz:firefoxOptions': 
            {args: ['--headless', '--start-maximized', '--no-sandbox', '--disable -gpu', '--window-size=1920,780', '--allow-insecure-localhost']},
 },
//  {
//    maxInstances: 5,
//    browserName: "chrome",
//   'goog:chromeOptions': {args: ['--headless', '--start-maximized', '--no-sandbox', '--disable -gpu', '--window-size=1920,780', '--allow-insecure-localhost']},
//  },
//  {
//     maxInstances: 5,
//     browserName: 'MicrosoftEdge',
//     'ms:edgeOptions': {args: ['--headless', '--start-maximized', '--no-sandbox', '--disable -gpu', '--window-size=1920,780', '--allow-insecure-localhost']},
//     acceptInsecureCerts: true
//     },
],
logLevel: 'warn',

port:4444,
path: "/",

};

exports.config = dockerConfig;