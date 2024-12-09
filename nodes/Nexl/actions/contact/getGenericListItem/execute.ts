import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function getGenericListItem(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		query GenericListItem($itemUid: ID!) {
			genericListItem(itemUid: $itemUid) {
				createdAt
				customFields {
					name
					stringValue
				}
				id
				updatedAt
			}
		}
	`;

	const variables: IDataObject = {
		itemUid: this.getNodeParameter('uid', index) as string,
	};

	body.variables = JSON.stringify(variables);
	console.log('getGenericListItem Variables:', variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.genericListItem);
}
