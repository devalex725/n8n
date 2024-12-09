import type { INodeProperties } from 'n8n-workflow';

import * as getCompanies from './getCompanies';
import * as createCompany from './createCompany';
import * as updateCompany from './updateCompany';
import * as updateCompanyCategory from './updateCompanyCategory';
import * as getCompanyDetails from './getCompanyDetails';
import * as setCompanyClientAndGroup from './setCompanyClientAndGroup';
import * as addRelationshipPartnerToCompany from './addRelationshipToCompany';
import * as addKeyContactToCompany from './addKeyContactToCompany';
import * as addMemberToCompanyList from './addMemberToCompanyList';
import * as createCompanyOfficeLocation from './createCompanyOfficeLocation';
import * as updateCompanyOfficeLocation from './updateCompanyOfficeLocation';
import * as removeCompanyOfficeLocation from './removeCompanyOfficeLocation';
import * as getCompanyOfficeLocations from './getCompanyOfficeLocations';
import * as createCompanyNote from './createCompanyNote';
import * as addCompanyTags from './addCompanyTags';
import * as updateCompanyTags from './updateCompanyTags';

export {
	getCompanies,
	createCompany,
	updateCompany,
	updateCompanyCategory,
	createCompanyOfficeLocation,
	updateCompanyOfficeLocation,
	removeCompanyOfficeLocation,
	getCompanyOfficeLocations,
	getCompanyDetails,
	setCompanyClientAndGroup,
	addRelationshipPartnerToCompany,
	addKeyContactToCompany,
	addMemberToCompanyList,
	createCompanyNote,
	addCompanyTags,
	updateCompanyTags,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['company'],
			},
		},
		options: [
			{
				name: 'Add Company Tags',
				value: 'addCompanyTags',
				action: 'Add company tags',
			},
			{
				name: 'Add Key Contact to Company',
				value: 'addKeyContactToCompany',
				action: 'Add key contact to a company',
			},
			{
				name: 'Add Member to Company List',
				value: 'addMemberToCompanyList',
				action: 'Add member to company list',
			},
			{
				name: 'Add Relationship Partner to Company',
				value: 'addRelationshipPartnerToCompany',
				action: 'Add relationship partner to a company',
			},
			{
				name: 'Create Company',
				value: 'createCompany',
				action: 'Create a company',
			},
			{
				name: 'Create Company Note',
				value: 'createCompanyNote',
				action: 'Create company note',
			},
			{
				name: 'Create Company Office Location',
				value: 'createCompanyOfficeLocation',
				action: 'Create company office location',
			},
			{
				name: 'Get Companies',
				value: 'getCompanies',
				action: 'Get companies',
			},
			{
				name: 'Get Company Details',
				value: 'getCompanyDetails',
				action: 'Get company by domain or UID',
			},
			{
				name: 'Get Company Office Locations',
				value: 'getCompanyOfficeLocations',
				action: 'Get company office locations',
			},
			{
				name: 'Remove Company Office Location',
				value: 'removeCompanyOfficeLocation',
				action: 'Remove company office location',
			},
			{
				name: 'Set Company Client and Group',
				value: 'setCompanyClientAndGroup',
				action: 'Set the client and group to a company',
			},
			{
				name: 'Update Company',
				value: 'updateCompany',
				action: 'Update a company',
			},
			{
				name: 'Update Company Category',
				value: 'updateCompanyCategory',
				action: 'Update company category',
			},
			{
				name: 'Update Company Office Location',
				value: 'updateCompanyOfficeLocation',
				action: 'Update company office location',
			},
			{
				name: 'Update Company Tags',
				value: 'updateCompanyTags',
				action: 'Update company tags',
			},
		],
		default: 'getCompanies',
	},
	...addMemberToCompanyList.description,
	...addKeyContactToCompany.description,
	...addRelationshipPartnerToCompany.description,
	...setCompanyClientAndGroup.description,
	...getCompanyDetails.description,
	...createCompanyOfficeLocation.description,
	...updateCompanyOfficeLocation.description,
	...removeCompanyOfficeLocation.description,
	...getCompanyOfficeLocations.description,
	...updateCompanyCategory.description,
	...getCompanies.description,
	...createCompanyNote.description,
	...createCompany.description,
	...updateCompany.description,
	...addCompanyTags.description,
	...updateCompanyTags.description,
];
