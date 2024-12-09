import type { INodeProperties } from 'n8n-workflow';

import * as getOppDetails from './getOppDetails';
import * as createCompanyOpportunity from './createCompanyOpportunity';

export { getOppDetails, createCompanyOpportunity };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['opportunity'],
			},
		},
		options: [
			{
				name: 'Get Opportunity Details',
				value: 'getOppDetails',
				action: 'Get opportunity details',
			},
			{
				name: 'Create Company Opportunity',
				value: 'createCompanyOpportunity',
				action: 'Create company opportunity',
			},
		],
		default: 'getOppDetails',
	},
	...getOppDetails.description,
	...createCompanyOpportunity.description,
];
