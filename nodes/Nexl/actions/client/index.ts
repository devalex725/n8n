import type { INodeProperties } from 'n8n-workflow';

import * as prepareForClientSync from './prepareForClientSync';
import * as addClientForSync from './addClientForSync';
import * as completeClientSync from './completeClientSync';
import * as addClientAndSync from './addClientAndSync';

export {
	prepareForClientSync,
	addClientForSync,
	completeClientSync,
	addClientAndSync,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['client'],
			},
		},
		options: [
			{
				name: 'Prepare for Client Sync',
				value: 'prepareForClientSync',
				action: 'Prepare for client sync',
			},
			{
				name: 'Add Client for Sync',
				value: 'addClientForSync',
				action: 'Add client for sync',
			},
			{
				name: 'Complete Client Sync',
				value: 'completeClientSync',
				action: 'Complete client sync',
			},
			{
				name: 'Add Client and Sync',
				value: 'addClientAndSync',
				description: 'Add client and sync group',
				action: 'Add client and sync',
			},
		],
		default: 'prepareForClientSync',
	},
	...addClientForSync.description,
	...prepareForClientSync.description,
	...completeClientSync.description,
	...addClientAndSync.description,
];
