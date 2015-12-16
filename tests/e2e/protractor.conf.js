exports.config = {
	capabilities: {
		'browserName': 'chrome'
	},
	specs: [
	'./e2e/**/*.spec.js'
	],
	chromeOnly: true,
	rootElement: 'html',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	baseUrl: 'http://localhost:3333',
	framework: 'mocha',
	allScriptsTimeout: 500000,
}