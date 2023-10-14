import { registerHtmlComponent } from 'html-component';

import formHtmlComponent from './form.js';
registerHtmlComponent('form', formHtmlComponent);

import sectionHtmlComponent from './section.js';
registerHtmlComponent('section', sectionHtmlComponent);

import textHtmlComponent from './text.js';
registerHtmlComponent('text', textHtmlComponent);
