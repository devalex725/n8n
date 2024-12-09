import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['addRelationshipPartnerToCompany'],
	},
};

export const addRelationshipPartnerToCompanyDescription: CompanyProperties = [
	{
		displayName: 'Comapny UID',
		name: 'companyUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
		displayName: 'Employee UID',
		name: 'employeeUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
];
