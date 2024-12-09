import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { removeEmptyProps } from '../../../helpers/utils';

export async function updateCompany(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation UpdateCompany(
      $attributes: CompanyAttributes
      $companyType: ID
      $company_uid: ID!
      $externalIdentifier: ExternalIdentifierInput
    ) {
      updateCompany(
        attributes: $attributes
        companyTypeUid: $companyType
        uid: $company_uid
        externalIdentifier: $externalIdentifier
      ) {
        failReasons
        record {
          id
        }
      }
    }
	`;
  
  let variables = {
    company_uid: this.getNodeParameter('companyUid', index) as string,
    companyType: this.getNodeParameter('companyTypeUid', index) as string,
  } as IDataObject;

  const externalIdentifier = this.getNodeParameter('externalIdentifier', index) as IDataObject;
  if (externalIdentifier.group && externalIdentifier.client) {
    variables.externalIdentifier = externalIdentifier;
  }

  let attributes = this.getNodeParameter('attributes', index) as IDataObject;
  const attrListProps = ['industryNames', 'tags'];
  attrListProps.forEach(prop => {
    if (!attributes[prop]) {
      return;
    }
    const listValue = (attributes[prop] as string)
      .split(/,/g)
      .map(str => str.trim())
      .filter(str => str !== '');
    if (listValue.length > 0) {
      attributes[prop] = listValue;
    }
  });

  // Add attributes to variables
  variables.attributes = removeEmptyProps(attributes);

  console.log('updateCompany Variables:', variables);

  body.variables = JSON.stringify(variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.updateCompany);
}
