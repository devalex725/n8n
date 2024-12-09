import type { INodeProperties } from 'n8n-workflow';
import * as contact from './contact';
import * as company from './company';
import * as client from './client';
import * as webhook from './webhook';
import * as project from './project';
import * as opportunity from './opportunity';
import * as misc from './misc';

const actionsProperties: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Client',
				value: 'client',
			},
			{
				name: 'Company',
				value: 'company',
			},
			{
				name: 'Contact',
				value: 'contact',
			},
			{
				name: 'Misc',
				value: 'misc',
			},
			{
				name: 'Opportunity',
				value: 'opportunity',
			},
			{
				name: 'Project',
				value: 'project',
			},
			{
				name: 'Webhook',
				value: 'webhook',
			},
		],
		default: 'contact',
	},
	...contact.descriptions,
	...company.descriptions,
	...client.descriptions,
	...webhook.descriptions,
	...project.descriptions,
	...opportunity.descriptions,
	...misc.descriptions,
];

export default actionsProperties;
