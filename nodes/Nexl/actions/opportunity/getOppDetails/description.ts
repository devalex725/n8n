import { IDataObject } from 'n8n-workflow';
import type { OpportunityProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['opportunity'],
		operation: ['getOppDetails'],
	},
};

export const getOppDetailsDescription: OpportunityProperties = [
  {
		displayName: 'Opportunity UID',
		name: 'uid',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
];
