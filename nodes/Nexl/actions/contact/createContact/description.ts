import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';
import { customFieldAttributesProperty } from '../../../helpers/properties';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['createContact'],
	},
};

export const createContactDescription: ContactProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		default: '',
		required: true,
		displayOptions,
	},
  
	{
		displayName: 'Contact Attributes',
		name: 'attributes',
		type: 'collection',
		placeholder: 'Select attribute',
		default: {},
		options: [
			{
				displayName: 'Department',
				name: 'department',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Educations',
				name: 'educations',
				type: 'string',
				placeholder: 'Comma separted text',
				default: '',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LinkedIn URL',
				name: 'linkedinUrl',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Office',
				name: 'office',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Office Location ID',
				name: 'officeLocationId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone Numbers',
				name: 'phoneNumbers',
				type: 'string',
				placeholder: 'Comma separted text',
				default: '',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				placeholder: 'Comma separted text',
				default: '',
			},
			{
				displayName: 'Twitter URL',
				name: 'twitterUrl',
				type: 'string',
				default: '',
			},
		],
		displayOptions,
	},
	customFieldAttributesProperty({ displayOptions }),
	{
		displayName: 'Location Attributes',
		name: 'Location Attributes',
		type: 'collection',
		default: {},
		options: [
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Post Code',
				name: 'postCode',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Street Address',
				name: 'streetAddress',
				type: 'string',
				default: '',
			},
		],
		displayOptions,
	},
];
