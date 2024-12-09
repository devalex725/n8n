import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { removeEmptyProps } from '../../../helpers/utils';

export async function createCompany(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation CreateCompany(
    $additionalDomains: [String!],
      $assignedTo: String,
      $attributes: CompanyAttributes,
      $companyDefaultType: CompanyTypeDefault,
      $companyTypeUid: ID,
      $companyTypesUids: [ID!],
      $domain: String!,
      $externalIdentifier: ExternalIdentifierInput,
      $secondaryCompanyTypeUids: [ID!]
    ) {
      createCompany(
        additionalDomains: $additionalDomains,
        assignedTo: $assignedTo,
        attributes: $attributes,
        companyDefaultType: $companyDefaultType,
        companyTypeUid: $companyTypeUid,
        companyTypesUids: $companyTypesUids,
        domain: $domain,
        externalIdentifier: $externalIdentifier,
        secondaryCompanyTypeUids: $secondaryCompanyTypeUids
      ) {
        failReasons
        uid
      }
    }
	`;
  
  let variables = {
    assignedTo: this.getNodeParameter('assignedTo', index) as string,
    companyDefaultType: this.getNodeParameter('companyDefaultType', index) as string,
    companyTypeUid: this.getNodeParameter('companyTypeUid', index) as string,
    domain: this.getNodeParameter('domain', index) as string,
  } as IDataObject;

  // Remove empty values
  variables = removeEmptyProps(variables);

  const externalIdentifier = this.getNodeParameter('externalIdentifier', index) as IDataObject;
  if (externalIdentifier.group && externalIdentifier.client) {
    variables.externalIdentifier = externalIdentifier;
  }

  // Filter and set list collection values
  ['additionalDomains', 'companyTypeUids', 'secondaryCompanyTypeUids'].forEach(prop => {
    const listValue = (this.getNodeParameter(prop, index) as IDataObject[])
      .filter(item => item.value !== '')
      .map(item => item.value);
    if (listValue.length > 0) {
      variables[prop] = listValue;
    }
  });

  let attributes = this.getNodeParameter('attributes', index) as IDataObject;
  const attrListProps = ['correspondenceEmails', 'correspondenceNumbers', 'industryNames', 'internalIndustryIds', 'tags'];
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
  attributes.name = this.getNodeParameter('name', index) as string;
  attributes.description = this.getNodeParameter('description', index) as string;
  // Add attributes to variables
  variables.attributes = removeEmptyProps(attributes);

  console.log('createCompany variables:', variables);

  body.variables = JSON.stringify(variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.createCompany);
}
