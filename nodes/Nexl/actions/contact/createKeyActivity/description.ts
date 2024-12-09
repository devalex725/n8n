import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
  show: {
    resource: ['contact'],
    operation: ['createKeyActivity'],
  },
};

export const createKeyActivityDescription: ContactProperties = [
  {
    displayName: 'Activity Title',
    name: 'activityTitle',
    type: 'string',
    default: '',
    required: true,
    displayOptions
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    typeOptions: {
      rows: 4
    },
    default: '',
    displayOptions
  },
  {
    displayName: 'External Contact',
    name: 'externalContact',
    type: 'string',
    placeholder: 'name@email.com',
    required: true,
    default: '',
    displayOptions
  },
  {
    displayName: 'Internal Contact',
    name: 'internalContact',
    type: 'string',
    placeholder: 'name@email.com',
    required: true,
    default: '',
    displayOptions
  },
  {
    displayName: 'Activity Category',
    name: 'activityCategory',
    type: 'options',
    options: [
      {
        name: 'Business Development',
        value: 'BUSINESS_DEVELOPMENT',
      },
      {
        name: 'Marketing',
        value: 'MARKETING',
      }
    ],
    default: 'BUSINESS_DEVELOPMENT',
    displayOptions,
  },
  {
    displayName: 'Activity List UID',
    name: 'listUid',
    type: 'string',
    default: '',
    displayOptions
  },
  {
    displayName: 'Notes',
    name: 'notes',
    type: 'string',
    typeOptions: {
      rows: 4
    },
    default: '',
    displayOptions
  },
];
