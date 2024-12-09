import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['updateContact'],
	},
};

export const updateContactDescription: ContactProperties = [
	{
		displayName: 'Contact UID',
		name: 'contactUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'Attributes',
		name: 'attributes',
		type: 'collection',
		default: {},
		options: [
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Twitter URL',
				name: 'twitterUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LinkedIn URL',
				name: 'linkedinUrl',
				type: 'string',
				default: '',
			},
		],
		displayOptions,
	},
];
