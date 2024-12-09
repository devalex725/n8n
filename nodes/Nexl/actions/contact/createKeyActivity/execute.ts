import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { removeEmptyProps } from '../../../helpers/utils';

export async function createKeyActivity(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const body = {} as IDataObject;
  const qs = {} as IDataObject;
  const requestMethod = 'POST';
  const endpoint = `graphql`;

  body.query = `
		mutation CreateKeyActivity (
      $activityTitle: String!,
      $description: String,
      $externalContacts:[String!],
      $interactionEndAt: ISO8601DateTime,
      $interactionOn: ISO8601DateTime!,
      $internalContacts: [String!],
      $keyActivityCategory: KeyActivityCategory!,
      $keyActivityListUid: ID,
      $notes: String,
      $sourceReferenceId: String
    ) {
      createKeyActivity(
        activityTitle: $activityTitle,
        description: $description,
        externalContacts: $externalContacts,
        interactionEndAt: $interactionEndAt,
        interactionOn: $interactionOn,
        internalContacts: $internalContacts,
        keyActivityCategory: $keyActivityCategory,
        keyActivityListUid: $keyActivityListUid,
        notes: $notes,
        sourceReferenceId: $sourceReferenceId
      ) {
        failReasons
        keyActivity {
          id
          activityTitle
          category
          description
          interactionEndAt
          interactionOn
          notes {
            plainText
          }
        }
      }
    }
	`;
  
  const variables: IDataObject = {
    activityTitle:        this.getNodeParameter('activityTitle', index) as string,
    description:          this.getNodeParameter('description', index) as string,
    interactionOn:        (new Date()).toISOString(),
    externalContacts:     [this.getNodeParameter('externalContact', index) as string],
    internalContacts:     [this.getNodeParameter('internalContact', index) as string],
    keyActivityCategory:  this.getNodeParameter('activityCategory', index) as string,
    notes:                this.getNodeParameter('notes', index) as string,
    keyActivityListUid:   this.getNodeParameter('listUid', index) as string,
  };
  body.variables = JSON.stringify(removeEmptyProps(variables));

  const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  
  return this.helpers.returnJsonArray(responseData.data.createKeyActivity as IDataObject);
}
