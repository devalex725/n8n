import { IDataObject } from 'n8n-workflow';
import type { WebhookProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['webhook'],
		operation: ['createContactListWebhook'],
	},
};

export const createContactListWebhookDescription: WebhookProperties = [
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
		default: 'LISTS_CONTACT_MEMBER_CREATED',
		required: true,
		options: [
			{name: 'LISTS_CONTACT_MEMBER_CREATED', value: 'LISTS_CONTACT_MEMBER_CREATED'},
			{name: 'LISTS_CONTACT_MEMBERS_UPDATED', value: 'LISTS_CONTACT_MEMBERS_UPDATED'},
			{name: 'LISTS_CONTACT_MEMBERS_REMOVED', value: 'LISTS_CONTACT_MEMBERS_REMOVED'},
		],
		displayOptions
	}
];
