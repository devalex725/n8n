import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['company'],
		operation: ['updateCompanyOfficeLocation'],
	},
};

export const updateCompanyOfficeLocationDescription: CompanyProperties = [
	{
		displayName: 'Office Location ID',
		name: 'companyOfficeLocationId',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'Headquarter Location',
		name: 'headquarterLocation',
		type: 'options',
		options: [
			{ name: 'True', value: true },
			{ name: 'False', value: false },
		],
		default: true,
		displayOptions,
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
		displayOptions,
	},
	{
		displayName: 'Post Code',
		name: 'postCode',
		type: 'number',
		default: '',
		displayOptions,
	},
	{
		displayName: 'Primary Location',
		name: 'primaryLocation',
		type: 'options',
		options: [
			{ name: 'True', value: true },
			{ name: 'False', value: false },
		],
		default: true,
		displayOptions,
	},
];
