import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';
import { ContactListsOrderBy } from '../../../helpers';

const displayOptions: IDataObject = {
  show: {
    resource: ['contact'],
    operation: ['getContactLists'],
  },
};

export const getContactListsDescription: ContactProperties = [
  {
    displayName: 'Term',
    name: 'term',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'List Status',
    name: 'listStatus',
    type: 'options',
    options: [
      {name: 'ACTIVE', value: 'ACTIVE'},
      {name: 'ARCHIVED', value: 'ARCHIVED'},
    ],
    default: 'ACTIVE',
    displayOptions,
  },
  {
    displayName: 'Usage Modes',
    name: 'usageModes',
    type: 'multiOptions',
    options: [
      {name: 'MARKETING', value: 'MARKETING'},
      {name: 'PERSONAL', value: 'PERSONAL'},
      {name: 'PROJECT', value: 'PROJECT'},
    ],
    default: [],
    displayOptions,
  },
  {
    displayName: 'Order By',
    name: 'orderBy',
    type: 'options',
    options: ContactListsOrderBy,
    default: 'CREATED_AT_ASC',
    displayOptions,
  },
  {
    displayName: 'Page',
    name: 'page',
    type: 'number',
    default: 1,
    displayOptions,
  },
  {
    displayName: 'Rows Per Page',
    name: 'perPage',
    type: 'number',
    default: 10,
    displayOptions,
  },
];
