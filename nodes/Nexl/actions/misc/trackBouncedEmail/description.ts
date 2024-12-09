import { IDataObject } from 'n8n-workflow';
import type { MiscProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['misc'],
		operation: ['trackBouncedEmail'],
	},
};

export const trackBouncedEmailDescription: MiscProperties = [
  {
		displayName: 'Bounced At',
		name: 'bouncedAt',
		type: 'dateTime',
		default: '',
		displayOptions
	},
  {
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		typeOptions: {
			rows: 3
		},
		default: '',
		displayOptions
	},
  {
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		default: '',
		displayOptions
	},
  {
		displayName: 'Sent by Email',
		name: 'sentByEmail',
		type: 'string',
		default: '',
		displayOptions
	},
];
