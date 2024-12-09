import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getCompanyOfficeLocations(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		query CompanyOfficeLocations($companyId: ID!, $page: Int, $perPage: Int) {
			companyOfficeLocations(
				companyId: $companyId
				page: $page
				perPage: $perPage
			) {
				entries {
					companyOfficeLocationId
					headquarter
					location {
						brief
						city
						country {
							name
							code
						}
						id
						postCode
						state
						streetAddress
					}
					primary
				}
				pageInfo {
					totalEntries
					totalPages
				}
			}
		}

	`;

	const variables: IDataObject = {
		companyId: this.getNodeParameter('companyId', index) as string,
		page: this.getNodeParameter('page', index) as number,
		perPage: this.getNodeParameter('perPage', index) as number,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.companyOfficeLocations);
}
