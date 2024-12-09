import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['updateContactCustomField'],
	},
};

export const updateContactCustomFieldDescription: ContactProperties = [
	{
		displayName: 'Contact UID',
		name: 'contactUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'Schema ID',
		name: 'schemaUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'String Value',
		name: 'stringValue',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
];
