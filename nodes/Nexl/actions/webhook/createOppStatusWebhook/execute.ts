import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function createOppStatusWebhook(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation CreateOppStatusWebook($destinationUrl: String!) {
			createWebhook(
				fragmentFields: "eventId: id fromStatus { fromName: name } toStatus { toName: name } opportunity { opportunityId: id title outcome company { info { companyName: name } } }" 
				triggerEvent: OPPORTUNITY_TRACKING_STATUS_CHANGED
				destinationUrl: $destinationUrl
			) {
				failReasons
			}
		}
	`;

	const variables: IDataObject = {
		destinationUrl: this.getNodeParameter('destinationUrl', index) as string,
	};

	body.variables = JSON.stringify(variables);
	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.createWebhook);
}
