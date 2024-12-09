import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['setCompanyClientAndGroup'],
	},
};

export const setCompanyClientAndGroupDescription: CompanyProperties = [
	{
		displayName: 'Comapny Domain or UID',
		name: 'domainOrId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
    displayName: 'Client',
    name: 'client',
    type: 'string',
    default: '',
		required: true,
    displayOptions,
  },
  {
    displayName: 'Group',
    name: 'group',
    type: 'string',
    default: '',
		required: true,
    displayOptions,
  },
];
