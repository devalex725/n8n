import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { getCustomFieldAttrFromCollection } from '../../../helpers/utils';

export async function addListMember(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation AddMemberToContactList(
      $contactUid: String!,
      $customFields: [CustomFieldAttribute!],
      $listUid: ID!,
      $upsert: Boolean!
    ) {
      addMemberToContactList(
        contactUid: $contactUid,
        customFields: $customFields,
        listUid: $listUid,
        upsert: $upsert
      ) {
        failReasons
        record {
          id
        }
      }
    }
	`;

  const customFieldsCollection = this.getNodeParameter('customFields', index) as IDataObject;

  const variables: IDataObject = {
    contactUid:   this.getNodeParameter('contactUid', index) as string,
    customFields: getCustomFieldAttrFromCollection(customFieldsCollection),
    listUid:      this.getNodeParameter('listUid', index) as string,
    upsert:       this.getNodeParameter('upsert', index) as boolean,
  };
  
  body.variables = JSON.stringify(variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.addMemberToContactList);
}
