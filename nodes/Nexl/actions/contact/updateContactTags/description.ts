import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['updateContactTags'],
	},
};

export const updateContactTagsDescription: ContactProperties = [
	{
		displayName: 'Contact Email or UID',
		name: 'emailOrId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
  {
    displayName: 'Add Tags',
    name: 'addTags',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Remove Tags',
    name: 'removeTags',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Set Tags',
    name: 'setTags',
    type: 'string',
    default: '',
    displayOptions,
  },
];
