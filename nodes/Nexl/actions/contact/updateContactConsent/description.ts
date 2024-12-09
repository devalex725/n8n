import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';
import { ConsentStatusOptions } from '../../../helpers';

const displayOptions: IDataObject = {
	show: {
		resource: ['contact'],
		operation: ['updateContactConsent'],
	},
};

export const updateContactConsentDescription: ContactProperties = [
  {
    displayName: 'Contact UID',
    name: 'contactUid',
    type: 'string',
    default: '',
    required: true,
		displayOptions,
  },
  {
    displayName: 'How Was Consent Given?',
    name: 'howWasConsentGiven',
    type: 'string',
		typeOptions: {
			rows: 2
		},
    default: '',
		displayOptions,
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
		options: ConsentStatusOptions,
    default: 'CONSENT_GIVEN',
		required: true,
		displayOptions,
  },
  {
    displayName: 'When Consent Was Given',
    name: 'whenWasConsentGiven',
    type: 'dateTime',
    default: '',
		displayOptions,
  },
];
