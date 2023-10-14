import getId from 'get-id';

export default {
	build({
		id = getId('form-'),
		title,
		sections = []
	} = {}) {
		return {
			htmlStringDefinition: {
				name: 'form',
				attributes: {
					class: 'form',
					id
				},
				children: [
					title ? {
						name: 'h1',
						attributes: {
							class: 'form-title',
							id: `${id}-heading`
						},
						children: [title]
					} : null,
					sections,
					{
						name: 'div',
						children: [
							{
								name: 'button',
								attributes: {
									type: 'submit'
								},
								children: ['Submit']
							}
						]
					}
				]
			},
			initializer: { id }
		};
	},
	initialize() { }
};
