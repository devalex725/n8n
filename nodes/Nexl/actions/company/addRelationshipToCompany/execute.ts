import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function addRelationshipPartnerToCompany(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation AddRelationshipPartner(
			$company_uid: String!,
			$employee_uid: String!
		) {
			addCompanyRelationshipPartner(
				companyUid: $company_uid,
				ownerUid: $employee_uid
			) {
				failReasons
			}
		}
	`;

	const variables: IDataObject = {
		company_uid: this.getNodeParameter('companyUid', index) as string,
		employee_uid: this.getNodeParameter('employeeUid', index) as string,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.addCompanyRelationshipPartner);
}
