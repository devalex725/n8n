import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['addCompanyTags'],
	},
};

export const addCompanyTagsDescription: CompanyProperties = [
	{
		displayName: 'Company Domain or ID',
		name: 'companyDomainOrId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
];
