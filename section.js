import getId from 'get-id';

export default {
	build({
		id = getId('section-'),
		title,
		fields = []
	} = {}) {
		return {
			htmlStringDefinition: {
				name: 'div',
				attributes: {
					class: 'section',
					id
				},
				children: [
					title ? {
						name: 'h2',
						attributes: {
							class: 'section-title',
							id: `${id}-heading`
						},
						children: [title]
					} : null,

					{
						name: 'div',
						attributes: {
							class: 'section-body'
						},
						children: [
							fields
						]
					}
				]
			},
			initializer: { id }
		};
	},
	initialize() { }
};
