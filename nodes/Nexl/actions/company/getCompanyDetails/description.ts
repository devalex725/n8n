import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['getCompanyDetails'],
	},
};

export const getCompanyDetailsDescription: CompanyProperties = [
	{
		displayName: 'Comapny Domain or UID',
		name: 'domainOrId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	}
];
