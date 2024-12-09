import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['addItemToGenericList'],
	},
};

export const addItemToGenericListDescription: ContactProperties = [
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
    displayName: 'Generic List UID',
    name: 'listUid',
    type: 'string',
    default: '',
    required: true,
		displayOptions,
  },
];