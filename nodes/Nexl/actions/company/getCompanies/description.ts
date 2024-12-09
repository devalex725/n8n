import { IDataObject } from 'n8n-workflow';
import type { CompanyProperties } from '../../Interfaces';
import { CompanyFilterProperties, CompanyOrderyBy, FilterOperators, TimeFilterPositions, TimeFilterProperties } from '../../../helpers';

const displayOptions: IDataObject = {
  show: {
    resource: ['company'],
    operation: ['getCompanies'],
  },
};

export const getCompaniesDescription: CompanyProperties = [
  {
    displayName: 'Term',
    name: 'term',
    type: 'string',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Company Default Type',
    name: 'companyDefaultType',
    type: 'options',
    options: [
      { name: 'Not Sure', value: '' },
      { name: 'Client', value: 'CLIENT' },
      { name: 'Prospect', value: 'PROSPECT' },
      { name: 'Unclassified', value: 'UNCLASSIFIED' },
    ],
    default: '',
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
    displayName: 'Company UIDs',
    name: 'companyUids',
    type: 'collection',
    default: {},
    typeOptions: {
      multipleValues: true,
      multipleValueButtonText: 'Add company',
    },
    options: [
      {
        displayName: 'UID',
        name: 'uid',
        type: 'string',
        default: '',
      }
    ],
    displayOptions,
  },
  {
    displayName: 'Exclude Work History Companies',
    name: 'excludeWorkHistoryCompanies',
    type: 'options',
    options: [
      { name: 'Not Sure', value: '' },
      { name: 'Yes', value: true },
      { name: 'No', value: false }
    ],
    default: '',
    displayOptions,
  },
  {
    displayName: 'Include Archived',
    name: 'includeArchived',
    type: 'options',
    options: [
      { name: 'Not Sure', value: '' },
      { name: 'Yes', value: true },
      { name: 'No', value: false }
    ],
    default: false,
    displayOptions,
  },
  {
    displayName: 'Include Individuals',
    name: 'includeIndividuals',
    type: 'options',
    options: [
      { name: 'Not Sure', value: '' },
      { name: 'Yes', value: true },
      { name: 'No', value: false }
    ],
    default: '',
    displayOptions,
  },
  {
    displayName: 'Know by UID',
    name: 'knowByUid',
    type: 'string',
    description: 'Filters by Employee uid or Employee email who knows contacts',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Owner UID',
    name: 'ownerUid',
    type: 'string',
    description: 'Filters by owner Employee uid or Employee email',
    default: '',
    displayOptions,
  },
  {
    displayName: 'Properties',
    name: 'properties',
    placeholder: 'Add property condition',
    type: 'fixedCollection',
    default: {},
    typeOptions: {
      multipleValues: true,
    },

    options: [
      {
        name: 'filtersList',
        displayName: 'Property Condition',
        values: [
          {
            displayName: 'Property',
            name: 'property',
            type: 'options',
            options: CompanyFilterProperties,
            default: 'NAME'
          },
          {
            displayName: 'Operator',
            name: 'operator',
            type: 'options',
            options: FilterOperators,
            default: 'IS'
          },
          {
            displayName: 'Value',
            name: 'value',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    displayOptions,
  },
  {
    displayName: 'Times',
    name: 'timeFilters',
    placeholder: 'Add time condition',
    type: 'fixedCollection',
    default: {},
    typeOptions: {
      multipleValues: true,
    },

    options: [
      {
        name: 'filtersList',
        displayName: 'Time Filter Condition',
        values: [
          {
            displayName: 'Property',
            name: 'property',
            type: 'options',
            options: TimeFilterProperties,
            default: 'CREATED_AT'
          },
          {
            displayName: 'Position',
            name: 'position',
            type: 'options',
            options: TimeFilterPositions,
            default: 'AFTER'
          },
          {
            displayName: 'Value',
            name: 'value',
            type: 'dateTime',
            default: '',
          },
        ],
      },
    ],
    displayOptions,
  },
  {
    displayName: 'Order By',
    name: 'orderBy',
    type: 'options',
    options: CompanyOrderyBy,
    default: 'COMPANY_NAME_ASC',
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
