import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function createCompanyOfficeLocation(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation CreateCompanyOfficeLocation (
      $company_domain_or_id: ID!
      $city: String
      $street_address: String
      $state: String
      $country: String!
      $post_code: String
    ) {
      createCompanyOfficeLocation (
        companyId: $company_domain_or_id,
        locationAttributes: {
          city: $city
          streetAddress: $street_address
          state: $state
          postCode: $post_code
          country: $country
        }
      ) {
        failReasons
      }
    }
	`;

  const variables: IDataObject = {
    company_domain_or_id: this.getNodeParameter('domainOrId', index) as string,
    city:             this.getNodeParameter('city', index) as string,
    street_address:   this.getNodeParameter('streetAddress', index) as string,
    state:            this.getNodeParameter('state', index) as string,
    country:          this.getNodeParameter('country', index) as string,
    post_code:        this.getNodeParameter('postCode', index) as string,
  };
  
  body.variables = JSON.stringify(variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.createCompanyOfficeLocation);
}
