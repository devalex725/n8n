import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function updateContactConsent(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation UpdateContactConsent(
			$attributes: ContactConsentAttribute!
			$contactUid: ID!
		) {
			updateContactConsent(attributes: $attributes, contactUid: $contactUid) {
				failReasons
				record {
					autoChangedReason
					howWasConsentGiven
					id
					status
					whenWasConsentGiven
				}
			}
		}
	`;

	const attributes = {
		howWasConsentGiven: this.getNodeParameter('howWasConsentGiven', index) as string,
		status: this.getNodeParameter('status', index) as string,
		whenWasConsentGiven: (new Date(this.getNodeParameter('whenWasConsentGiven', index) as number)).toISOString(),
	};

	const variables: IDataObject = {
		attributes,
    contactUid: this.getNodeParameter('contactUid', index) as string
	};

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.updateContactConsent);
}
