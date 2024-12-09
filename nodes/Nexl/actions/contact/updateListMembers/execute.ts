import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { getCustomFieldAttrFromCollection, removeEmptyProps } from '../../../helpers/utils';

export async function updateListMembers(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation BulkUpdateListMember(
      $customFieldAttributes: [CustomFieldAttribute!]!,
      $listUid: ID,
      $memberIds: [ID!]!
    ) {
      bulkUpdateListMember(
        customFieldAttributes: $customFieldAttributes,
        listUid: $listUid,
        memberIds: $memberIds
      ) {
        failReasons
        gridMemberRecords {
          id
          contactId
          listId
        }
      }
    }
	`;
  
  const customFieldsCollection = this.getNodeParameter('customFields', index) as IDataObject;
  const memberIds = (this.getNodeParameter('memberIds', index) as IDataObject[])
                .map(contact => contact.contactId);

  const variables: IDataObject = {
    customFieldAttributes:  getCustomFieldAttrFromCollection(customFieldsCollection),
    listUid:                this.getNodeParameter('listUid', index) as string,
    memberIds,
  };
  
  body.variables = JSON.stringify(removeEmptyProps(variables));

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

  return this.helpers.returnJsonArray(responseData.data.bulkUpdateListMember);
}
