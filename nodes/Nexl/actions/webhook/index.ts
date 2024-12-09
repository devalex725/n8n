import type { INodeProperties } from 'n8n-workflow';

import * as createOppStatusWebhook from './createOppStatusWebhook';
import * as deleteTrigger from './deleteTrigger';
import * as createGenericListWebhook from './createGenericListWebhook';
import * as createContactListWebhook from './createContactListWebhook';

export {
	createOppStatusWebhook,
	deleteTrigger,
	createGenericListWebhook,
	createContactListWebhook,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webhook'],
			},
		},
		options: [
			{
				name: 'Create a Webhook for Opportunity Status Change',
				value: 'createOppStatusWebhook',
				action: 'Create a webhook for opportunity status change',
			},
			{
				name: 'Delete Trigger',
				value: 'deleteTrigger',
				action: 'Delete a trigger',
			},
			{
				name: 'Create a Webhook for Generic List',
				value: 'createGenericListWebhook',
				action: 'Create a webhook for generic list',
			},
			{
				name: 'Create a Webhook for Contact List',
				value: 'createContactListWebhook',
				action: 'Create a webhook for contact list',
			},
		],
		default: 'createOppStatusWebhook',
	},
	...createContactListWebhook.description,
	...createGenericListWebhook.description,
	...createOppStatusWebhook.description,
	...deleteTrigger.description,
];
