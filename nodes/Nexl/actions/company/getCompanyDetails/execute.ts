import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getCompanyDetails(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		query GetCompany($domain_or_company_id: String!) {
      company(uid: $domain_or_company_id) {
        id
        info { name tags }
        externalIdentifier { client group }
        companyType { typeName }
      }
    }
	`;

  const variables: IDataObject = {
    domain_or_company_id: this.getNodeParameter('domainOrId', index) as string,
  };
  
  body.variables = JSON.stringify(variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.company);
}
