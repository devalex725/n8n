import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['updateCompanyTags'],
	},
};

export const updateCompanyTagsDescription: CompanyProperties = [
	{
		displayName: 'Comapny Domain or UID',
		name: 'domainOrId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
    displayName: 'Add Tags',
    name: 'addTags',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Remove Tags',
    name: 'removeTags',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Set Tags',
    name: 'setTags',
    type: 'string',
    default: '',
    displayOptions,
  },
];
