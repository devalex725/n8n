import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getListMembers(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		query ListMembers(
      $contactUids: [ID!],
      $filter: ListMembersFilter,
      $orderBy: ListMembersOrderBy,
      $page: Int,
      $perPage: Int,
      $term: String,
      $uid: ID,
      $withMissingFields: Boolean
    ) {
      listMembers(
        contactUids: $contactUids,
        filter: $filter,
        orderBy: $orderBy,
        page: $page,
        perPage: $perPage,
        term: $term,
        uid: $uid,
        withMissingFields: $withMissingFields
      ) {
        entries {
          id,
          listId,
          contact {id, emailAddresses}
        }
        pageInfo {
          totalEntries
          totalPages
        }
      }
    }
	`;

  const contactUids = (this.getNodeParameter('contactUids', index) as IDataObject[])
                .map(contact => contact.contactId);

  const variables: IDataObject = {
    uid: this.getNodeParameter('listUid', index) as string,
    contactUids,
  };

  body.variables = JSON.stringify(variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.listMembers);
}
