import {
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

import { router } from './actions/router';
import actionsProperties from './actions/actionsProperties';

export class Nexl implements INodeType {
	description: INodeTypeDescription;

	constructor() {
		this.description = {
			displayName: 'Nexl',
			name: 'nexl',
			icon: 'file:nexl.svg',
			group: ['transform'], //output
			version: 1,
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Consumes Nexl CRM API',
			defaults: {
				name: 'Nexl',
			},
			inputs: ['main'],
			outputs: ['main'],
			credentials: [
				{
					name: 'nexlApi',
					required: true,
				},
			],
			properties: [...actionsProperties],
		};
	}

	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return await router.call(this);
	}
}
