import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function deleteTrigger(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const triggerId = this.getNodeParameter('triggerId', index) as string;

	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'DELETE';
	const endpoint = `webhooks/triggers/${triggerId}`;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data);
}
