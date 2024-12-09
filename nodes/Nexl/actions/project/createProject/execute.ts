import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { removeEmptyProps } from '../../../helpers/utils';

export async function createProject(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation CreateProject($attributes: ProjectAttribute!) {
			createProject(attributes: $attributes) {
				failReasons
				record {
					createdAt
					firmWide
					id
					readOnly
					teamMembersCount
					title
				}
			}
		}
	`;

	const attributes: IDataObject = {
		title: this.getNodeParameter('title', index) as string,
		description: this.getNodeParameter('description', index) as string,
		iconCode: this.getNodeParameter('iconCode', index) as string,
		colorCode: this.getNodeParameter('colorCode', index) as string,
		firmWide: this.getNodeParameter('firmWide', index) as boolean,
		folderId: this.getNodeParameter('folderId', index) as boolean,
		sourceProjectId: this.getNodeParameter('sourceProjectId', index) as boolean,
	};

	const variables: IDataObject = {
		attributes: removeEmptyProps(attributes),
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.createProject);
}
