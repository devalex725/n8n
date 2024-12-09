import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['getCompanyOfficeLocations'],
	},
};

export const getCompanyOfficeLocationsDescription: CompanyProperties = [
	{
		displayName: 'Company ID',
		name: 'companyId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
    displayName: 'Page',
    name: 'page',
    type: 'number',
    default: 1,
    displayOptions,
  },
  {
    displayName: 'Rows Per Page',
    name: 'perPage',
    type: 'number',
    default: 10,
    displayOptions,
  },
];
