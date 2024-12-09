import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
  show: {
    resource: ['company'],
    operation: ['updateCompany'],
  },
};

export const updateCompanyDescription: CompanyProperties = [
  {
    displayName: 'Company UID',
    name: 'companyUid',
    type: 'string',
    default: '',
    required: true,
    displayOptions,
  },
  {
    displayName: 'Company Type UID',
    name: 'companyTypeUid',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Attributes',
    name: 'attributes',
    type: 'collection',
    placeholder: 'Select attribute',
    default: {},
    options: [
      {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        default: '',
      },
      {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        typeOptions: { rows: 3 },
        default: '',
      },
      {
        displayName: 'Linked URL',
        name: 'linkedinUrl',
        type: 'string',
        default: '',
      },
      {
        displayName: 'Twitter URL',
        name: 'twitterUrl',
        type: 'string',
        default: '',
      },
      {
        displayName: 'Website',
        name: 'website',
        type: 'string',
        default: '',
      },
      {
        displayName: 'Homepage',
        name: 'homepage',
        type: 'string',
        default: '',
      },
      {
        displayName: 'Number of Employees',
        name: 'numberOfEmployees',
        type: 'number',
        default: '',
      },
      {
        displayName: 'Tags',
        name: 'tags',
        type: 'string',
        default: '',
        placeholder: 'Comma separated text',
        description: 'Comma-separated text',
      },
      {
        displayName: 'Industry Names',
        name: 'industryNames',
        type: 'string',
        default: '',
        placeholder: 'Comma separated text',
        description: 'Comma-separated text',
      },
    ],
    displayOptions,
  },
  {
    displayName: 'External Identifier',
    name: 'externalIdentifier',
    placeholder: 'Add information',
    type: 'fixedCollection',
    default: {},

    options: [
      {
        name: 'list',
        displayName: '',
        values: [
          {
            displayName: 'Client',
            name: 'client',
            type: 'string',
            default: '',
          },
          {
            displayName: 'Group',
            name: 'group',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    displayOptions,
  },

];
