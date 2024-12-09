import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { getCustomFieldAttrFromCollection } from '../../../helpers/utils';

export async function addItemToGenericList(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation AddItemToGenericList(
			$customFieldAttributes: [CustomFieldAttribute!],
			$genericListUid: ID!
		) {
			addItemToGenericList(
				customFieldAttributes: $customFieldAttributes,
				genericListUid: $genericListUid
			) {
				failReasons
				record {
					createdAt
					id
					updatedAt
				}
			}
		}
	`;

	const customFieldsCollection = this.getNodeParameter('customFields', index) as IDataObject;

	const variables: IDataObject = {
		customFieldAttributes: getCustomFieldAttrFromCollection(customFieldsCollection),
    genericListUid: this.getNodeParameter('listUid', index) as string
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.addItemToGenericList);
}
