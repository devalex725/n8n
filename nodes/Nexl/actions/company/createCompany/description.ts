import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';
import { CompanyDefaultTypes } from '../../../helpers';

const displayOptions: IDataObject = {
  show: {
    resource: ['company'],
    operation: ['createCompany'],
  },
};

export const createCompanyDescription: CompanyProperties = [
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    required: true,
    displayOptions,
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    typeOptions: { rows: 3 },
    default: '',
    displayOptions,
  },
  {
    displayName: 'Domain',
    name: 'domain',
    type: 'string',
    default: '',
    required: true,
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
      {
        displayName: 'Internal Industry IDs',
        name: 'internalIndustryIds',
        type: 'string',
        default: '',
        placeholder: 'Comma separated text',
        description: 'Internal industry IDs or internal industry names',
      },
      {
        displayName: 'Correspondence Emails',
        name: 'correspondenceEmails',
        type: 'string',
        default: '',
        placeholder: 'Comma separated text',
        description: 'Comma-separated text',
      },
      {
        displayName: 'Correspondence Numbers',
        name: 'correspondenceNumbers',
        type: 'string',
        default: '',
        placeholder: 'Comma separated text',
        description: 'Comma-separated text',
      },
    ],
    displayOptions,
  },
  {
    displayName: 'Company Default Type',
    name: 'companyDefaultType',
    type: 'options',
    default: 'UNCLASSIFIED',
    options: CompanyDefaultTypes,
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
    displayName: 'Company Type UIDs',
    name: 'companyTypeUids',
    type: 'collection',
    default: {},
    typeOptions: {
      multipleValues: true,
      multipleValueButtonText: 'Add UID',
    },
    options: [
      {
        displayName: 'UID',
        name: 'value',
        type: 'string',
        default: '',
      }
    ],
    displayOptions,
  },
  {
    displayName: 'Secondary Company Type UIDs',
    name: 'secondaryCompanyTypeUids',
    type: 'collection',
    default: {},
    typeOptions: {
      multipleValues: true,
      multipleValueButtonText: 'Add UID',
    },
    options: [
      {
        displayName: 'UID',
        name: 'value',
        type: 'string',
        default: '',
      }
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
        name: 'item',
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
  {
    displayName: 'Assigned To',
    name: 'assignedTo',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Additional Domains',
    name: 'additionalDomains',
    type: 'collection',
    default: {},
    typeOptions: {
      multipleValues: true,
      multipleValueButtonText: 'Add domain',
    },
    options: [
      {
        displayName: 'Domain',
        name: 'value',
        type: 'string',
        default: '',
      }
    ],
    displayOptions,
  },

];
