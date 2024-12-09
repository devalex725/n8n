import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function getAllGenericListItems(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		query GenericListItems($genericListUid: ID!, $page: Int!, $perPage: Int!) {
			genericListItems(
				genericListUid: $genericListUid
				page: $page
				perPage: $perPage
			) {
				entries {
					createdAt
					customFields {
						name
						stringValue
					}
					id
					updatedAt
				}
				pageInfo {
					totalEntries
					totalPages
				}
			}
		}
	`;

	const variables: IDataObject = {
		genericListUid: this.getNodeParameter('genericListUid', index) as string,
		page: 			this.getNodeParameter('page', index) as number,
		perPage: 		this.getNodeParameter('perPage', index) as number,
	};

	body.variables = JSON.stringify(variables);
	console.log('getAllGenericListItems Variables:', variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.genericListItems);
}
