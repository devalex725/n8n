import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
  show: {
    resource: ['contact'],
    operation: ['removeMembersFromContactList'],
  },
};

export const removeMembersFromContactListDescription: ContactProperties = [
	{
    displayName: 'Emails',
    name: 'listEmailTobeRemoved',
    type: 'collection',
    typeOptions: {
      multipleValues: true,
      multipleValueButtonText: 'Add email',
    },
    default: {},
    required: true,
    description: 'Email of contact to be removed',
    options: [
      {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        default: '',
				placeholder: ""
      },
    ],
    displayOptions,
  },

	{
    displayName: 'UIDs',
    name: 'listUIDTobeRemoved',
    type: 'collection',
    typeOptions: {
      multipleValues: true,
      multipleValueButtonText: 'Add UID',
    },
    default: {},
    required: true,
    description: 'UID of contact to be removed',
    options: [
      {
        displayName: 'UID',
        name: 'uid',
        type: 'string',
        default: '',
      },
    ],
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
];
