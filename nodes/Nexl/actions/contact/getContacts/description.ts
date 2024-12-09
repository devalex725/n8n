import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';
import { ContactFilterProperties, ContactOrderyBy, FilterOperators } from '../../../helpers';

const displayOptions: IDataObject = {
  show: {
    resource: ['contact'],
    operation: ['getContacts'],
  },
};

export const getContactsDescription: ContactProperties = [
  {
    displayName: 'Term',
    name: 'term',
    type: 'string',
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
    displayName: 'Include Internal Contact',
    name: 'includeInternalContact',
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
    displayName: 'Missing Key Data',
    name: 'missingKeyData',
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
    displayName: 'With Bounced Emails',
    name: 'withBouncedEmails',
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
    displayName: 'With Job Changes',
    name: 'withJobChanges',
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
		displayName: 'With Custom Fields',
		name: 'withCustomField',
		placeholder: 'Add field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},

		options: [
			{
				name: 'list',
				displayName: '',
				values: [
					{
						displayName: 'Field Name',
						name: 'name',
						type: 'string',
						default: '',
            required: true,
					},
					{
						displayName: 'Field Value',
						name: 'value',
						type: 'string',
						default: '',
            required: true,
					},
				],
			},
		],
		displayOptions,
	},
  {
    displayName: 'Filters',
    name: 'filters',
    placeholder: 'Add condition',
    type: 'fixedCollection',
    default: {},
    typeOptions: {
      multipleValues: true,
    },

    options: [
      {
        name: 'list',
        displayName: 'Filter Condition',
        values: [
          {
            displayName: 'Property',
            name: 'property',
            type: 'options',
            options: ContactFilterProperties,
            default: ''
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
    displayName: 'Order By',
    name: 'orderBy',
    type: 'options',
    options: ContactOrderyBy,
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
