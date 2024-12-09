import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function createGenericListWebhook(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation CreateGenericListWebhook(
			$destinationUrl: String!,
			$list_id: String!
			$triggerEvent: WebhookTriggerEvent!
		) {
			createGenericListWebhook(
				fragmentFields: "itemId: id customFields { customName: name customValue: stringValue } genericList { listId: id listTitle: title }"
				triggerEvent: $triggerEvent
				destinationUrl: $destinationUrl
				listUid: $list_id
			) {
				failReasons
			}
		}
	`;

	const variables: IDataObject = {
		destinationUrl: this.getNodeParameter('destinationUrl', index) as string,
		list_id: this.getNodeParameter('listId', index) as string,
		triggerEvent: this.getNodeParameter('triggerEvent', index) as string,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.createGenericListWebhook);
}
