import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['addKeyContactToCompany'],
	},
};

export const addKeyContactToCompanyDescription: CompanyProperties = [
	{
		displayName: 'Company UID',
		name: 'companyUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
		displayName: 'Contact UID',
		name: 'contactUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
];
