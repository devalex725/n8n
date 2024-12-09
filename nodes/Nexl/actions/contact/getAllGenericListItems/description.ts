import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['getAllGenericListItems'],
	},
};

export const getAllGenericListItemsDescription: ContactProperties = [
  {
    displayName: 'List UID',
    name: 'genericListUid',
    type: 'string',
    default: '',
    required: true,
		displayOptions,
  },
  {
    displayName: 'Page',
    name: 'page',
    type: 'number',
    default: 1,
    required: true,
    displayOptions,
  },
  {
    displayName: 'Rows Per Page',
    name: 'perPage',
    type: 'number',
    default: 10,
    required: true,
    displayOptions,
  },
];