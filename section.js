import getId from 'get-id';
import { registerHtmlComponent } from 'html-component';

registerHtmlComponent('section', {
	build({
		id = getId('section-'),
		title,
		fields = []
	} = {}) {
		return {
			htmlStringDefinition: {
				name: 'div',
				attributes: { id },
				children: [
					title ? {
						name: 'h2',
						attributes: { id: `${id}-heading` },
						children: [title]
					} : null,
					...fields
				]
			},
			initializer: { id }
		};
	},
	initialize() { }
});
