import type { INodeProperties } from 'n8n-workflow';

import * as trackBouncedEmail from './trackBouncedEmail';

export { trackBouncedEmail };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['misc'],
			},
		},
		options: [
			{
				name: 'Track Bounced Email',
				value: 'trackBouncedEmail',
				action: 'Track bounced email',
			},
		],
		default: 'trackBouncedEmail',
	},
	...trackBouncedEmail.description,
];
