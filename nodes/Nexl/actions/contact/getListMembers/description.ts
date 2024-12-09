import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
  show: {
    resource: ['contact'],
    operation: ['getListMembers'],
  },
};

export const getListMembersDescription: ContactProperties = [
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
    name: 'contactUids',
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
