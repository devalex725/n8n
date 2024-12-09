import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function removeMemberFromContact(
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

	const contactUids = (this.getNodeParameter('contactUids', index) as IDataObject[]).map(
		(contact) => contact.contactId,
	);

	const variables: IDataObject = {
		uid: this.getNodeParameter('listUid', index) as string,
		contactUids,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.listMembers);
}
