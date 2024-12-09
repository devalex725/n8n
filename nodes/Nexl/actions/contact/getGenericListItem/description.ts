import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['getGenericListItem'],
	},
};

export const getGenericListItemDescription: ContactProperties = [
  {
    displayName: 'Item UID',
    name: 'uid',
    type: 'string',
    default: '',
    required: true,
		displayOptions,
  },
];