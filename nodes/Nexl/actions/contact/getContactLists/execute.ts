import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function getContactLists(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		query Lists(
      $filter: ListFiltering
      $orderBy: ListsOrderBy
      $page: Int
      $perPage: Int
    ) {
      lists(filter: $filter, orderBy: $orderBy, page: $page, perPage: $perPage) {
        entries {
          allowDuplicates
          category
          contactsCount
          createdAt
          discardedAt
          id
          name
          tabUid
          updatedAt
          project {
            title
            id
          }
        }
        pageInfo {
          totalEntries
          totalPages
        }
      }
    }
	`;


	let variables: IDataObject = {
		filter: {
      term: this.getNodeParameter('term', index) as string,
      listStatus: this.getNodeParameter('listStatus', index) as string,
      usageModes: this.getNodeParameter('usageModes', index) as string[],
    },
		orderBy: this.getNodeParameter('orderBy', index) as string,
		page: this.getNodeParameter('page', index) as string,
		perPage: this.getNodeParameter('perPage', index) as string,
	};

	body.variables = JSON.stringify(variables);
	console.log('getContactLists variables:', variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.lists);
}
