import type { INodeProperties } from 'n8n-workflow';

import * as addListMember from './addListMember';
import * as createKeyActivity from './createKeyActivity';
import * as updateListMembers from './updateListMembers';
import * as getListMembers from './getListMembers';
import * as createContact from './createContact';
import * as getContactDetails from './getContactDetails';
import * as createContactByEmail from './createContactByEmail';
import * as updateGenericListItems from './updateGenericListItems';
import * as getGenericListItem from './getGenericListItem';
import * as getAllGenericListItems from './getAllGenericListItems';
import * as addItemToGenericList from './addItemToGenericList';
import * as getContacts from './getContacts';
import * as updateContactConsent from './updateContactConsent';
import * as updateContact from './updateContact';
import * as updateContactCustomField from './updateContactCustomField';
import * as updateContactTags from './updateContactTags';
import * as getContactLists from './getContactLists';
import * as removeMembersFromContactList from './removeMembersFromContactList';

export {
	getContactDetails,
	createContactByEmail,
	updateGenericListItems,
	getGenericListItem,
	getAllGenericListItems,
	addItemToGenericList,
	addListMember,
	createKeyActivity,
	updateListMembers,
	getListMembers,
	createContact,
	getContacts,
	updateContactConsent,
	updateContact,
	updateContactCustomField,
	updateContactTags,
	getContactLists,
	removeMembersFromContactList
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: [
			{
				name: 'Add a Member to Contact List',
				value: 'addListMember',
				action: 'Add a member to contact list',
			},
			{
				name: 'Add Item to Generic List',
				value: 'addItemToGenericList',
				action: 'Add item to generic list',
			},
			{
				name: 'Bulk Update Contact List Members',
				value: 'updateListMembers',
				description: 'Updates contact list members and custom fields',
				action: 'Bulk update contact list members',
			},
			{
				name: 'Create a Key Activity',
				value: 'createKeyActivity',
				description: 'Create a new key activity for contact',
				action: 'Create a key activity',
			},
			{
				name: 'Create Contact',
				value: 'createContact',
				description: 'Create a new contact',
				action: 'Create a contact',
			},
			{
				name: 'Create Contact By Email',
				value: 'createContactByEmail',
				description: 'Create the contact by email',
				action: 'Create the contact by email',
			},
			{
				name: 'Get All Generic List Items',
				value: 'getAllGenericListItems',
				action: 'Get all generic list items',
			},
			{
				name: 'Get Contact Details',
				value: 'getContactDetails',
				description: 'Create the contact details by email or UID',
				action: 'Get the contact details',
			},
			{
				name: 'Get Contact Lists',
				value: 'getContactLists',
				action: 'Get contact lists',
			},
			{
				name: 'Get Contacts',
				value: 'getContacts',
				action: 'Get contacts',
			},
			{
				name: 'Get Generic List Item',
				value: 'getGenericListItem',
				action: 'Get generic list item',
			},
			{
				name: 'Get List Members',
				value: 'getListMembers',
				description: 'Get members from contact list',
				action: 'Get contact list members',
			},
			{
				name: 'Remove Members From Contact List',
				value: 'removeMembersFromContactList',
				description: 'Remove multiple members from contact list',
				action: 'Remove members from contact list',
			},
			{
				name: 'Update Contact',
				value: 'updateContact',
				action: 'Update a contact',
			},
			{
				name: 'Update Contact Consent',
				value: 'updateContactConsent',
				action: 'Update contact consent',
			},
			{
				name: 'Update Contact Custom Field',
				value: 'updateContactCustomField',
				action: 'Update contact custom field',
			},
			{
				name: 'Update Contact Tags',
				value: 'updateContactTags',
				action: 'Update contact tags',
			},
			{
				name: 'Update Generic List Items',
				value: 'updateGenericListItems',
				description: 'Update multiple generic list items at once',
				action: 'Update generic list items',
			},
		],
		default: 'addListMember',
	},
	...getContacts.description,
	...addItemToGenericList.description,
	...updateGenericListItems.description,
	...getGenericListItem.description,
	...getAllGenericListItems.description,
	...createContactByEmail.description,
	...updateContact.description,
	...getContactDetails.description,
	...addListMember.description,
	...createKeyActivity.description,
	...updateListMembers.description,
	...getListMembers.description,
	...createContact.description,
	...updateContactConsent.description,
	...updateContactCustomField.description,
	...updateContactTags.description,
	...getContactLists.description,
	...removeMembersFromContactList.description
];
