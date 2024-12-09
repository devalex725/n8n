import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
  show: {
    resource: ['contact'],
    operation: ['updateListMembers'],
  },
};

export const updateListMembersDescription: ContactProperties = [
  {
    displayName: 'Custom Fields',
    name: 'customFields',
    placeholder: 'Add Field',
    type: 'collection',
    options: [
      {
        displayName: 'Custom Field Text',
        name: 'Custom Field Text',
        type: 'string',
        default: '',
      },
      {
        displayName: 'Custom Yes No',
        name: 'Custom Yes No',
        type: 'options',
        options: [
          {
            name: 'Yes', value: 'Yes',
          },
          {
            name: 'No', value: 'No',
          },
        ],
        default: 'Yes',
      },
      {
        displayName: 'Status',
        name: 'Status',
        type: 'string',
        default: '',
      },
    ],
    default: {},

    displayOptions,
  },
  {
    displayName: 'List UID',
    name: 'listUid',
    type: 'string',
    default: '',
    description: 'Contact list UID',
    displayOptions,
  },
  {
    displayName: 'Contacts',
    name: 'memberIds',
    type: 'collection',
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add contact',
		},
    default: {},
    required: true,
    description: 'Email or UID of contact',
    options: [
      {
        displayName: 'Email or UID',
        name: 'contactId',
        type: 'string',
        default: '',
        //required: true,
      },
    ],
		displayOptions,
  },
];
