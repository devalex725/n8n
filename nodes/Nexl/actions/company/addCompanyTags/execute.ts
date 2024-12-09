import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function addCompanyTags(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation AddCompanyTags($company_domain_or_id: ID!, $tags: String!) {
			addCompanyTags(companyUid: $company_domain_or_id, tags: $tags) {
				failReasons
			}
		}
	`;

	const variables: IDataObject = {
		company_domain_or_id: this.getNodeParameter('companyDomainOrId', index) as string,
		tags: this.getNodeParameter('tags', index) as string,
	};

	body.variables = JSON.stringify(variables);
	console.log('addCompanyTags Variables:', variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.addCompanyTags);
}
