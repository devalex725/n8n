import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function createCompanyNote(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation CreateCompanyNote(
      $companyUid: ID!
      $contactUid: ID
      $content: String!
    ) {
      createCompanyNote(
        companyUid: $companyUid
        contactUid: $contactUid
        content: $content
      ) {
        failReasons
        id
      }
    }
	`;

  const variables: IDataObject = {
    companyUid: this.getNodeParameter('companyUid', index) as string,
    contactUid: this.getNodeParameter('contactUid', index) as string,
    content:    this.getNodeParameter('content', index) as string,
  };
  
  body.variables = JSON.stringify(variables);
  console.log('createCompanyNote Variables:', variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.createCompanyNote);
}
