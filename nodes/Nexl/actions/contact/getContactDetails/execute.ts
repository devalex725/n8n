import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getContactDetails(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		query GetContact($email_or_contact_id: String!) {
      contact(uid: $email_or_contact_id) {
        id
        info {
          firstName lastName jobTitle phoneNumbers twitterUrl linkedinUrl imageUrl tags educations
        }
        company {
          companyId: id
          info { companyName: name }
        }
      }
    }
	`;

  const variables: IDataObject = {
    email_or_contact_id: this.getNodeParameter('contactId', index) as string
  };
  
  body.variables = JSON.stringify(variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.contact);
}
