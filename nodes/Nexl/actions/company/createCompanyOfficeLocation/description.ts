import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['createCompanyOfficeLocation'],
	},
};

export const createCompanyOfficeLocationDescription: CompanyProperties = [
	{
		displayName: 'Comapny Domain or UID',
		name: 'domainOrId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
    displayName: 'City',
    name: 'city',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Street Address',
    name: 'streetAddress',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'State',
    name: 'state',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Country',
    name: 'country',
    type: 'string',
    default: '',
		required: true,
    displayOptions,
  },
  {
    displayName: 'Post Code',
    name: 'postCode',
    type: 'string',
    default: '',
    displayOptions,
  },
];
