import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function addClientAndSync(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation AddClientAndSync(
			$client_id: String!
			$client_name: String!
			$group_id: String!
			$group_name: String!
			$domain: String
		) {
			clientSyncAddClientCompanyAndSync(
				clientIdentifier: $client_id
				clientName: $client_name
				groupName: $group_name
				groupIdentifier: $group_id
				domain: $domain
			) {
				failReasons
			} 
		}
	`;

	const variables: IDataObject = {
		client_id: this.getNodeParameter('clientId', index) as string,
		client_name: this.getNodeParameter('clientName', index) as string,
		group_id: this.getNodeParameter('groupId', index) as string,
		group_name: this.getNodeParameter('groupId', index) as string,
		domain: this.getNodeParameter('domain', index) as string,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.clientSyncAddClientCompanyAndSync);
}
