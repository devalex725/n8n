import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['removeCompanyOfficeLocation'],
	},
};

export const removeCompanyOfficeLocationDescription: CompanyProperties = [
	{
		displayName: 'Office Location ID',
		name: 'companyOfficeLocationId',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
];
