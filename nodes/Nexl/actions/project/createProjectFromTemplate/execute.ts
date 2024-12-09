import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function createProjectFromTemplate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation CreateProjectFromTemplate($templateProjectId: ID!) {
		  createProjectFromTemplate(templateProjectId: $templateProjectId) {
				failReasons
				record {
					colorCode
					createdAt
					id
					nexlApps
					title
					updatedAt
				}
			}
		}
	`;

	const variables: IDataObject = {
		templateProjectId: this.getNodeParameter('templateProjectId', index) as string,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.createProjectFromTemplate);
}
