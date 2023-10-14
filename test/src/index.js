/* global console document */

import { buildHtmlComponent, initialize } from 'html-component';
import makeHtmlString from 'make-html-string';

import './index.scss';

import '../../form-html-component.js';

const componentDefinition = {
	name: 'div',
	attributes: {
		class: 'container'
	},
	children: {
		type: 'form',
		title: 'Form Title',
		sections: [
			{
				name: 'p',
				children: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				]
			},
			{
				type: 'section',
				title: 'Section Title',
				fields: [
					{
						type: 'text',
						title: 'Text Label'
					},
					{
						type: 'text',
						title: 'Text Label'
					},
					{
						type: 'text',
						title: 'Text Label'
					}
				]
			},
			{
				type: 'section',
				title: 'Section Title',
				fields: [
					{
						name: 'p',
						children: [
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						]
					}
				]
			}
		]
	}
};

console.group('COMPONENT DEFINITION');
console.log(componentDefinition);
console.log();
console.groupEnd();

const { htmlStringDefinition, initializers } = buildHtmlComponent(componentDefinition);

console.group('HTML DEFINITION');
console.log(htmlStringDefinition);
console.log();
console.groupEnd();

const htmlString = makeHtmlString(htmlStringDefinition);
document.body.innerHTML = htmlString;

console.group('HTML STRING');
console.log(htmlString);
console.log();
console.groupEnd();

console.group('INITIALIZERS');
console.log(initializers);
console.log();
console.groupEnd();

const state = {};

console.group('INITIALIZE');
initialize(initializers, state);
console.log();
console.groupEnd();

console.group('STATE');
console.log(state);
console.log();
console.groupEnd();
