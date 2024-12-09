import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['getContactDetails'],
	},
};

export const getContactDetailsDescription: ContactProperties = [
	{
		displayName: 'Contact Email or UID',
		name: 'contactId',
		type: 'string',
		default: '',
		required: true,

		displayOptions
	}
];
