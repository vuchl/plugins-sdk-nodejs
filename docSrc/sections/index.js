const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');

const pluginNpmUrl = 'http://npmjs.org/package/staffbase-plugins-nodejs';
const pluginNpmName = 'staffbase-sso';
const apiRefPath = 'docs/API.MD';

const SBConsts = require('../../src/utils/tokenDataConsts.js');

module.exports = {
	getTplPromise: function() {
		let overviewPromise = new Promise( (resolve, reject) => {
			fs.readFile(path.join(__dirname, './overview.tpl'), (err, overviewData) => {
				if (err) {
					reject(err);
				} else {
					resolve(overviewData.toString());
				}
			});
		});
		let installationPromise = new Promise( (resolve, reject) => {
			fs.readFile(path.join(__dirname, './installation.tpl'), (err, installationTpl) => {
				if (err) {
					reject(err);
				} else {
					let tpl = handlebars.compile(installationTpl.toString());
					let rendered = tpl({
						pluginNpmUrl: pluginNpmUrl,
						pluginNpmName: pluginNpmName,
					});
					resolve(rendered);
				}
			});
		});
		let apiRefPromise = new Promise( (resolve, reject) => {
			fs.readFile(path.join(__dirname, './reference.tpl'), (err, apiRefTpl) => {
				if (err) {
					reject(err);
				} else {
					let tpl = handlebars.compile(apiRefTpl.toString());
					let rendered = tpl({
						apiRefPath: apiRefPath,
					});
					resolve(rendered);
				}
			});
		});
		let usagePromise = new Promise( (resolve, reject) => {
			fs.readFile(path.join(__dirname, './usage.tpl'), (err, usageTpl) => {
				if (err) {
					reject(err);
				} else {
					let tpl = handlebars.compile(usageTpl.toString());
					let rendered = tpl({
						pluginNpmName: pluginNpmName,
						secretKeyEnv: SBConsts.secretKeyEnv,
						pluginIDEnv: SBConsts.pluginIDEnv,
					});
					resolve(rendered);
				}
			});
		});
		let contributionPromise = new Promise( (resolve, reject) => {
			fs.readFile(path.join(__dirname, './contribution.tpl'), (err, contribTpl) => {
				if (err) {
					reject(err);
				} else {
					let tpl = handlebars.compile(contribTpl.toString());
					let rendered = tpl({

					});
					resolve(rendered);
				}
			});
		});
		let testPromise = new Promise( (resolve, reject) => {
			fs.readFile(path.join(__dirname, './tests.tpl'), (err, testsTpl) => {
				if (err) {
					reject(err);
				} else {
					let tpl = handlebars.compile(testsTpl.toString());
					let rendered = tpl({

					});
					resolve(rendered);
				}
			});
		});
		let licensePromise = new Promise( (resolve, reject) => {
			fs.readFile(path.join(__dirname, './license.tpl'), (err, licenseTpl) => {
				if (err) {
					reject(err);
				} else {
					let tpl = handlebars.compile(licenseTpl.toString());
					let rendered = tpl({

					});
					resolve(rendered);
				}
			});
		});
		return Promise.all([
			overviewPromise,
			installationPromise,
			apiRefPromise,
			usagePromise,
			contributionPromise,
			testPromise,
			licensePromise,
		]);
	},
};
