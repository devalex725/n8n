import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function trackBouncedEmail(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation TrackBouncedEmail(
			$bouncedAt: ISO8601DateTime
			$comment: String
			$email: String!
			$sentByEmail: String
		) {
			trackBouncedEmail(
				bouncedAt: $bouncedAt
				comment: $comment
				email: $email
				sentByEmail: $sentByEmail
			) {
				failReasons
			}
		}
	`;

	const variables: IDataObject = {
		bouncedAt: (new Date(this.getNodeParameter('bouncedAt', index) as number)).toISOString(),
		comment: this.getNodeParameter('comment', index) as string,
		email: this.getNodeParameter('email', index) as string,
		sentByEmail: this.getNodeParameter('sentByEmail', index) as string,
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  
	return this.helpers.returnJsonArray(responseData.data.trackBouncedEmail);
}