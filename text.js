import getId from 'get-id';

export default {
	build({
		id = getId('text-'),
		title
	} = {}) {
		return {
			htmlStringDefinition: {
				name: 'div',
				attributes: {
					class: 'text',
					id: `${id}-field`
				},
				children: [
					{
						name: 'label',
						attributes: {
							for: id
						},
						children: [title || 'Untitled']
					},
					{
						name: 'input',
						attributes: {
							id,
							name: id,
							type: 'text'
						}
					}
				]
			},
			initializer: { id }
		};
	},
	initialize() { }
};
