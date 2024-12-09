import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';


export async function updateContactCustomField(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation UpdateContactCustomField(
      $contact_uid: ID!
      $schema_uid: ID!
      $string_value: String!
    ) {
      updateContactCustomField(
        contactUid: $contact_uid
        schemaUid: $schema_uid
        stringValue: $string_value
      ) {
        failReasons
      }
    }
	`;

  const variables: IDataObject = {
    contact_uid: this.getNodeParameter('contactUid', index) as string,
    schema_uid: this.getNodeParameter('schemaUid', index) as string,
    string_value: this.getNodeParameter('stringValue', index) as string,
  };
  
  body.variables = JSON.stringify(variables);
  console.log('updateContactCustomField Variables:', variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.updateContactCustomField);
}
