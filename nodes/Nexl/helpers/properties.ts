import { IDataObject, INodeProperties } from 'n8n-workflow';

export const customFieldAttributesProperty = (defaultProps: IDataObject = {}): INodeProperties => ({
	displayName: 'Custom Field Attributes',
	name: 'customFieldAttributes',
	placeholder: 'Add attribute',
	type: 'fixedCollection',
	typeOptions: {
		multipleValues: true,
	},
	default: {},

	options: [
		{
			name: 'list',
			displayName: '',
			values: [
				{
					displayName: 'JSON Value',
					name: 'jsonValue',
					type: 'string',
					typeOptions: {
						rows: 3,
					},
					default: '',
				},
				{
					displayName: 'Name',
					name: 'name',
					type: 'string',
					default: '',
				},
				{
					displayName: 'Schema ID',
					name: 'schemaId',
					type: 'string',
					default: '',
				},
				{
					displayName: 'Value',
					name: 'value',
					type: 'string',
					typeOptions: {
						rows: 3,
					},
					description: 'JSON',
					default: '',
				},
			],
		},
	],
	...defaultProps,
});

export const stringFixedCollectionProperty = (
	defaultProps: IDataObject = {},
	itemDefaultProps: IDataObject = {}
): INodeProperties => ({
	displayName: 'Multiple Strings',
	name: 'multiStrings',
	type: 'fixedCollection',
	typeOptions: {
		multipleValues: true,
	},
	default: {},
	required: true,
	options: [
		{
			name: 'list',
			displayName: '',
			values: [
				{
					displayName: 'Item',
					name: 'item',
					type: 'string',
					default: '',
					...itemDefaultProps,
				},
			]
		}
	],
	...defaultProps,
});
