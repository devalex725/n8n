import { IDataObject } from 'n8n-workflow';
import type { WebhookProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['webhook'],
		operation: ['createOppStatusWebhook'],
	},
};

export const createOppStatusWebhookDescription: WebhookProperties = [
  {
		displayName: 'Webhook URL',
		name: 'destinationUrl',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
];
