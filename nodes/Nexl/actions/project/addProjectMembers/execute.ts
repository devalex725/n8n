import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function addProjectMembers(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation AddProjectMembers($member_emails: [String!]!, $project_id: ID!) {
			addProjectMembers(memberEmails: $member_emails, uuid: $project_id) {
				failReasons
			}
		}
	`;

	const fieldInput = this.getNodeParameter('memberEmails', index) as IDataObject;
	let memberEmails: IDataObject[] = [];
	if (fieldInput.list) {
		memberEmails = (fieldInput.list as IDataObject[]).map((item) => item.value) as IDataObject[];
	}

	const variables: IDataObject = {
		project_id: this.getNodeParameter('projectId', index) as string,
		member_emails: memberEmails,
	};

	body.variables = JSON.stringify(variables);
	console.log('addProjectMembers Variables:', variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.addProjectMembers);
}
