import { IDataObject } from 'n8n-workflow';
import type { WebhookProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['webhook'],
		operation: ['createGenericListWebhook'],
	},
};

export const createGenericListWebhookDescription: WebhookProperties = [
  {
		displayName: 'Webhook URL',
		name: 'destinationUrl',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
	{
		displayName: 'List ID',
		name: 'listId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
	{
		displayName: 'Trigger Event',
		name: 'triggerEvent',
		type: 'options',
		default: 'GENERIC_LISTS_ITEM_CREATED',
		required: true,
		options: [
			{name: 'GENERIC_LISTS_ITEM_CREATED', value: 'GENERIC_LISTS_ITEM_CREATED'},
		],
		displayOptions
	}
];
