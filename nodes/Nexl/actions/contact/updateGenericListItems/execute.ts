import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { getCustomFieldAttrFromCollection } from '../../../helpers/utils';

export async function updateGenericListItems(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation UpdateGenericListItems(
      $customFieldAttributes: [CustomFieldAttribute!],
      $uids: [ID!]!
    ) {
      updateGenericListItems(
        customFieldAttributes: $customFieldAttributes,
        uids: $uids
      ) {
        failReasons
      }
    }
	`;

	const customFieldsCollection = this.getNodeParameter('customFields', index) as IDataObject;
	const uids = (this.getNodeParameter('uids', index) as IDataObject[])
		.filter((item) => item.uid !== '')
		.map((item) => item.uid);

	const variables: IDataObject = {
		customFieldAttributes: getCustomFieldAttrFromCollection(customFieldsCollection),
    uids
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.updateGenericListItems);
}
