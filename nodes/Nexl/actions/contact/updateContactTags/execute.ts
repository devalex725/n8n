import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function updateContactTags(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation UpdateTagsOnContacts(
      $contact_email_or_id: ID!
      $add_tags: String
      $remove_tags: String
      $set_tags: String
    ) {
      updateTagsOnContacts(
        contactUid: $contact_email_or_id
        add: $add_tags
        remove: $remove_tags
        replace: $set_tags
      ) {
        failReasons
        infos {
          tags
        }
      }
    }
	`;

  const variables: IDataObject = {
    contact_email_or_id: this.getNodeParameter('emailOrId', index) as string,
    add_tags: this.getNodeParameter('addTags', index) as string,
    remove_tags: this.getNodeParameter('removeTags', index) as string,
    set_tags: this.getNodeParameter('setTags', index) as string,
  };
  
  body.variables = JSON.stringify(variables);
  console.log('updateContactTags Variables:', variables);

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  return this.helpers.returnJsonArray(responseData.data.updateTagsOnContacts);
}
