import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function createContactByEmail(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation CreateContact($email: String!) {
      createContact(email: $email) {
        record {
          contactId: id
          company { companyId: id }
        }
      }
    }
	`;

  const variables: IDataObject = {
    email: this.getNodeParameter('email', index) as string
  };
  
  body.variables = JSON.stringify(variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.createContact);
}
