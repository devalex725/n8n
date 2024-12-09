import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['addListMember'],
	},
};

export const addListMemberDescription: ContactProperties = [
	{
		displayName: 'Contact Email',
		name: 'contactUid',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'name@email.com',
		description: 'Contact Email or UID',
		displayOptions
	},
	{
		displayName: 'Custom Fields',
		name: 'customFields',
		placeholder: 'Add Field',
		type: 'collection',
		options: [
			{
				displayName: 'Custom Field Text',
				name: 'Custom Field Text',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Yes No',
				name: 'Custom Yes No',
				type: 'options',
				options: [
					{
						name: 'Yes', value: 'Yes',
					},
					{
						name: 'No', value: 'No',
					},
				],
				default: 'Yes',
			},
			{
				displayName: 'Status',
				name: 'Status',
				type: 'string',
				default: '',
			},
		],
		default: {},

		displayOptions,
	},
	{
		displayName: 'List UID',
		name: 'listUid',
		type: 'string',
		required: true,
		default: '',
		description: 'List UID that contact will be added to',
		displayOptions,
	},
	{
		displayName: 'Upsert',
		name: 'upsert',
		type: 'options',
		options: [
			{ name: 'True', value: true },
			{ name: 'False', value: false },
		],
		default: true,
		noDataExpression: true,
		displayOptions,
	},
];
