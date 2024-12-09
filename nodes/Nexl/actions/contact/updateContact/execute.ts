import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';


export async function updateContact(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation UpdateContact($uid: ID!, $attributes: ContactAttributes!) {
      updateContact(uid: $uid, attributes: $attributes) {
        failReasons
        record {
          id
        }
      }
    }
	`;

  const variables: IDataObject = {
    uid: this.getNodeParameter('contactUid', index) as string,
    attributes: this.getNodeParameter('attributes', index) as IDataObject,
  };
  
  body.variables = JSON.stringify(variables);
  console.log('updateContact Variables:', variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.updateContact);
}
