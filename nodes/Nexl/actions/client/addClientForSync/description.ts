import { IDataObject } from 'n8n-workflow';
import type { ClientProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['client'],
		operation: ['addClientForSync'],
	},
};

export const addClientForSyncDescription: ClientProperties = [
  {
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
		displayName: 'Client Name',
		name: 'clientName',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
		displayName: 'Group Name',
		name: 'groupName',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		default: '',
		displayOptions
	},
];
