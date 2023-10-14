import getId from 'get-id';
import { registerHtmlComponent } from 'html-component';

registerHtmlComponent('form', {
	build({
		id = getId('form-'),
		title,
		sections = []
	} = {}) {
		return {
			htmlStringDefinition: {
				name: 'form',
				attributes: { id },
				children: [
					title ? {
						name: 'h1',
						attributes: { id: `${id}-heading` },
						children: [title]
					} : null,
					...sections
				]
			},
			initializer: { id }
		};
	},
	initialize() { }
});
