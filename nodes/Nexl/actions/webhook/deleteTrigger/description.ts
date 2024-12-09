import { IDataObject } from 'n8n-workflow';
import type { WebhookProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['webhook'],
		operation: ['deleteTrigger'],
	},
};

export const deleteTriggerDescription: WebhookProperties = [
  {
		displayName: 'Trigger ID',
		name: 'triggerId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
];
