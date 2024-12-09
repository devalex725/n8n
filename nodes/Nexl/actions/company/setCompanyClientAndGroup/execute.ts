import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function setCompanyClientAndGroup(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation UpdateCompanyCategory(
      $company_domain_or_id: ID!,
      $client: String!,
      $group: String!
    ) {
      updateCompany(
        uid: $company_domain_or_id,
        externalIdentifier: { client: $client, group: $group }
      ) {
        failReasons
      }
    }
	`;

	const variables: IDataObject = {
		company_domain_or_id: this.getNodeParameter('domainOrId', index) as string,
		client: this.getNodeParameter('client', index) as string,
		group: this.getNodeParameter('group', index) as string,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.updateCompany);
}
