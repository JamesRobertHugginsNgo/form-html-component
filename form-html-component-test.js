/* global console */

import Util from 'util';

import { buildHtmlComponent, initialize } from 'html-component';
import makeHtmlString from 'make-html-string';

import './form-html-component.js';

function inspect(object) {
	return Util.inspect(object, { showHidden: false, depth: null, colors: true });
}

const componentDefinition = {
	type: 'form',
	title: 'Form Title',
	sections: [
		{
			type: 'section',
			title: 'Section Title',
			fields: [
				// {
				// 	type: 'text',
				// 	title: 'Text Label'
				// },
				// {
				// 	type: 'text',
				// 	title: 'Text Label'
				// },
				// {
				// 	type: 'text',
				// 	title: 'Text Label'
				// }
			]
		}
	]
};

console.group('COMPONENT DEFINITION');
console.log(inspect(componentDefinition));
console.log();
console.groupEnd();

const { htmlStringDefinition, initializers } = buildHtmlComponent(componentDefinition);

console.group('HTML DEFINITION');
console.log(inspect(htmlStringDefinition));
console.log();
console.groupEnd();

const htmlString = makeHtmlString(htmlStringDefinition);

console.group('HTML STRING');
console.log(htmlString);
console.log();
console.groupEnd();

console.group('INITIALIZERS');
console.log(inspect(initializers));
console.log();
console.groupEnd();

console.group('INITIALIZE');
initialize(initializers);
console.log();
console.groupEnd();
