import { IDataObject, INodeProperties } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['addMemberToCompanyList'],
	},
};

const fieldsProperties: INodeProperties[] = [];
for (let i = 1; i < 11; i++) {
	fieldsProperties.push({
		displayName: 'Custom Name' + i,
		name: 'custom_name' + i,
		type: 'string',
		default: '',
		displayOptions,
	});
	fieldsProperties.push({
		displayName: 'Custom Value' + i,
		name: 'custom_value' + i,
		type: 'string',
		default: '',
		displayOptions,
	});
}

export const addMemberToCompanyListDescription: CompanyProperties = [
	{
		displayName: 'List UID',
		name: 'listUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'Company UID',
		name: 'companyUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	...fieldsProperties
];
