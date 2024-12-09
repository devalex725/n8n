import { IDataObject } from 'n8n-workflow';
import type { OpportunityProperties } from '../../Interfaces';
import {
	customFieldAttributesProperty,
	stringFixedCollectionProperty,
} from '../../../helpers/properties';

const displayOptions: IDataObject = {
	show: {
		resource: ['opportunity'],
		operation: ['createCompanyOpportunity'],
	},
};

export const createCompanyOpportunityDescription: OpportunityProperties = [
	{
		displayName: 'Company UID',
		name: 'companyUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'Custom Status UID',
		name: 'customStatusUid',
		type: 'string',
		default: '',
		required: true,
		displayOptions,
	},
	{
		displayName: 'AssignedTo Email',
		name: 'assignedToEmail',
		type: 'string',
		default: '',
		displayOptions,
	},
	{
		displayName: 'AssignedTo ID',
		name: 'assignedToId',
		type: 'string',
		default: '',
		displayOptions,
	},
	customFieldAttributesProperty({ displayOptions }),
	{
		displayName: 'Custom Status ID',
		name: 'customStatusId',
		type: 'string',
		default: '',
		displayOptions,
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		default: '',
		displayOptions,
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions,
	},
	stringFixedCollectionProperty(
		{
			displayName: 'Document URLs',
			name: 'documentUrls',
			displayOptions,
		},
		{
			displayName: 'URL',
			name: 'value',
			required: true,
		},
	),
	{
		displayName: 'Email Body',
		name: 'emailBody',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions,
	},
	stringFixedCollectionProperty(
		{
			displayName: 'Key Contact IDs',
			name: 'keyContactIds',
			displayOptions,
		},
		{
			displayName: 'UID',
			name: 'value',
			required: true,
		},
	),
	stringFixedCollectionProperty(
		{
			displayName: 'Lawyer IDs',
			name: 'lawyerIds',
			displayOptions,
		},
		{
			displayName: 'UID',
			name: 'value',
			required: true,
		},
	),
	{
		displayName: 'Message Reference',
		name: 'messageReference',
		type: 'string',
		default: '',
		displayOptions,
	},
	{
		displayName: 'Outcome',
		name: 'outcome',
		type: 'string',
		default: '',
		displayOptions,
	},
	{
		displayName: 'Proposed Fee',
		name: 'proposedFee',
		type: 'number',
		default: '',
		displayOptions,
	},
	{
		displayName: 'Refferal Source Email',
		name: 'referralSourceEmail',
		type: 'string',
		default: '',
		displayOptions,
	},
	{
		displayName: 'Refferal Source ID',
		name: 'referralSourceId',
		type: 'string',
		default: '',
		displayOptions,
	},
	stringFixedCollectionProperty(
		{
			displayName: 'Tags',
			name: 'tags',
			displayOptions,
		},
		{
			displayName: 'Tag',
			name: 'value',
			required: true,
		},
	),
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions,
	},
];
