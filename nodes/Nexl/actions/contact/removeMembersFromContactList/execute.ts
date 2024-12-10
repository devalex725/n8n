import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function removeMembersFromContactList(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation RemoveMembersFromContactList(
			$listMemberEmails: [String!]
			$listMemberUids: [ID!]
			$uid: ID!
		) {
			removeMembersFromContactList(
				listMemberEmails: $listMemberEmails
				listMemberUids: $listMemberUids
				uid: $uid
			) {
				failReasons
			}
		}
	`;

	const variables = {
		listMemberEmails: (this.getNodeParameter('listEmailTobeRemoved', index) as IDataObject[])
			.filter((item) => item.email !== '')
			.map((item) => (item.email as string).trim()),
		listMemberUids: (this.getNodeParameter('listUIDTobeRemoved', index) as IDataObject[])
			.filter((item) => item.uid !== '')
			.map((item) => (item.uid as string).trim()),
		uid: (this.getNodeParameter('listUid', index) as string).trim(),
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.removeMembersFromContactList);
}
