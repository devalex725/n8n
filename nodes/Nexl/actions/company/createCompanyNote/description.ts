import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['createCompanyNote'],
	},
};

export const createCompanyNoteDescription: CompanyProperties = [
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
    displayOptions,
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    typeOptions: {
      rows: 3
    },
    default: '',
    required: true,
    displayOptions,
  },
];
