import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { removeEmptyProps } from '../../../helpers/utils';

export async function getCompanies(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		query Companies(
      $filter: CompanyFiltering,
      $orderBy: CompaniesOrderBy,
      $page: Int,
      $perPage: Int
    ) {
      companies(
        filter: $filter,
        orderBy: $orderBy,
        page: $page,
        perPage: $perPage
      ) {
        entries {
          archivedAt
          companyType { id typeName }
          companyTypes { id typeName }
          contacts
          createdAt
          domain
          domains
          externalIdentifier { id group client }
          hasCustomLogo
          id
          info { id name description }
          interactionsLast { id interactionAt }
          interactionsTotal { id interactions }
          isBlocked
          isInternal
          isSubDomainCompany
          logoUrl
          openOpportunityCount
          pendingTaskCount
          upcomingMeetingCount
          updatedAt
        }
        pageInfo {
          totalEntries
          totalPages
        }
      }
    }
	`;
  
  let filter = {
    term: this.getNodeParameter('term', index) as string,
    companyDefaultType: this.getNodeParameter('companyDefaultType', index) as string,
    companyTypeUid: this.getNodeParameter('companyTypeUid', index) as string,
    excludeWorkHistoryCompanies: this.getNodeParameter('excludeWorkHistoryCompanies', index) as string,
    includeArchived: this.getNodeParameter('includeArchived', index) as string,
    includeIndividuals: this.getNodeParameter('includeIndividuals', index) as string,
    knowByUid: this.getNodeParameter('knowByUid', index) as string,
    ownerUid: this.getNodeParameter('ownerUid', index) as string,
  } as IDataObject;

  filter.companyUids = (this.getNodeParameter('companyUids', index) as IDataObject[])
    .filter(company => company.uid !== '')
    .map(company => company.uid);

  const propertiesFilter = (this.getNodeParameter('properties', index) as IDataObject);
  if (propertiesFilter.filtersList) {
    filter.properties = (propertiesFilter.filtersList as IDataObject[])
      .filter(item => item.property !== '' && item.value !== '');
  }

  const timesFilter = (this.getNodeParameter('timeFilters', index) as IDataObject);
  if (timesFilter.filtersList) {
    filter.timeFilters = ((this.getNodeParameter('timeFilters', index) as IDataObject).filtersList as IDataObject[])
      .filter(item => item.property !== '' && item.value !== '');
  }

  // Remove empty values
  filter = removeEmptyProps(filter);

  let variables: IDataObject = {
    filter,
    orderBy: this.getNodeParameter('orderBy', index) as string,
    page: this.getNodeParameter('page', index) as string,
    perPage: this.getNodeParameter('perPage', index) as string,
  };

  // Remove empty values
  variables = removeEmptyProps(variables);
  console.log('getCompanies variables:', variables);

  body.variables = JSON.stringify(variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.companies);
}
