import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function updateCompanyOfficeLocation(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation UpdateCompanyOfficeLocation(
      $companyOfficeLocationId: ID!
      $headquarterLocation: Boolean
      $locationAttributes: LocationAttributes
      $primaryLocation: Boolean
    ) {
      updateCompanyOfficeLocation(
        companyOfficeLocationId: $companyOfficeLocationId
        headquarterLocation: $headquarterLocation
        locationAttributes: $locationAttributes
        primaryLocation: $primaryLocation
      ) {
        failReasons
      }
    }
	`;

  const variables: IDataObject = {
    companyOfficeLocationId: this.getNodeParameter('companyOfficeLocationId', index) as string,
    locationAttributes: {
      city:          this.getNodeParameter('city', index) as string,
      streetAddress: this.getNodeParameter('streetAddress', index) as string,
      state:         this.getNodeParameter('state', index) as string,
      country:       this.getNodeParameter('country', index) as string,
      postCode:      this.getNodeParameter('postCode', index) as string,
    },
    headquarterLocation: this.getNodeParameter('headquarterLocation', index) as boolean,
    primaryLocation:     this.getNodeParameter('primaryLocation', index) as boolean,
  };
  
  body.variables = JSON.stringify(variables);
  console.log('updateCompanyOfficeLocation Variables:', variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.updateCompanyOfficeLocation);
}
