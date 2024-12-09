import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function addKeyContactToCompany(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation AddKeyContact(
			$company_uid: String!,
			$contact_uid: String!
		) {
			addCompanyKeyContact(
				companyUid: $company_uid,
				contactUid: $contact_uid
			) {
				failReasons
			}
		}
	`;

	const variables: IDataObject = {
		company_uid: this.getNodeParameter('companyUid', index) as string,
		contact_uid: this.getNodeParameter('contactUid', index) as string,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.addCompanyKeyContact);
}
