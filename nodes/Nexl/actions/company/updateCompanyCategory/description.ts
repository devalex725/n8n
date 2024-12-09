import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';
import { CompanyDefaultTypes } from '../../../helpers';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['updateCompanyCategory'],
	},
};

export const updateCompanyCategoryDescription: CompanyProperties = [
	{
		displayName: 'Comapny Domain or UID',
		name: 'domainOrId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
    displayName: 'Category',
    name: 'category',
    type: 'options',
    options: CompanyDefaultTypes,
    default: 'UNCLASSIFIED',
    displayOptions,
  },
];
