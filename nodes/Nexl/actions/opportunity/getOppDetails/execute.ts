import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getOppDetails(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		query Opportunity($uid: ID!) {
			opportunity(uid: $uid) {
				archived
				assignedTo { email }
				company {
					domain
					domains
					id
					info { name }
					logoUrl
					openOpportunityCount
					pendingTaskCount
					upcomingMeetingCount
				}
				createdAt
				createdBy { email 	firstName  id  lastName  profileImageUrl   userId }
				customFields { id   name  schemaId  stringValue }
				customStatus { id   name  outcome }
				date
				description { html  plainText   trixHtml }
				emailBody { html  plainText   trixHtml }
				id
				includedLawyers { email }
				keyContacts { archivedAt  createdAt   emailAddresses  id  primaryEmail }
				outcome
				project { id  title }
				proposedFee
				proposedFeeAmount {
					cents
					currency { name   isoCode   symbol }
					format
				}
				referralSource { id   primaryEmail }
				tags
				title
				trackingNumber
				updatedAt
			}
		}
	`;

	const variables: IDataObject = {
		uid: this.getNodeParameter('uid', index) as string,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  
	return this.helpers.returnJsonArray(responseData.data.opportunity);
}
