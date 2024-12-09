import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function removeCompanyOfficeLocation(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation RemoveCompanyOfficeLocation($companyOfficeLocationId: ID!) {
      removeCompanyOfficeLocation(
        companyOfficeLocationId: $companyOfficeLocationId
      ) {
        failReasons
      }
    }
	`;

  const variables: IDataObject = {
    companyOfficeLocationId: this.getNodeParameter('companyOfficeLocationId', index) as string,
  };
  
  body.variables = JSON.stringify(variables);
  console.log('removeCompanyOfficeLocation Variables:', variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.removeCompanyOfficeLocation);
}
