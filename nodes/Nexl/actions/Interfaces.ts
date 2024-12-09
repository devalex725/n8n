import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type NexlMap = {
	contact:
		| 'addListMember'
		| 'createKeyActivity'
		| 'updateListMembers'
		| 'createContact'
		| 'updateContact'
		| 'getContactDetails'
		| 'createContactByEmail'
		| 'updateGenericListItems'
		| 'getGenericListItem'
		| 'getAllGenericListItems'
		| 'getContacts'
		| 'updateContactConsent'
		| 'updateContactCustomField'
		| 'updateContactTags'
		| 'getContactLists';
	company:
		| 'getCompanies'
		| 'createCompany'
		| 'updateCompany'
		| 'updateCompanyCategory'
		| 'getCompanyDetails'
		| 'setCompanyClientAndGroup'
		| 'addRelationshipPartnerToCompany'
		| 'addKeyContactToCompany'
		| 'addMemberToCompanyList'
		| 'createCompanyOfficeLocation'
		| 'updateCompanyOfficeLocation'
		| 'removeCompanyOfficeLocation'
		| 'getCompanyOfficeLocations'
		| 'createCompanyNote'
		| 'addCompanyTags'
		| 'updateCompanyTags';
	client: 'prepareForClientSync' | 'addClientForSync' | 'addClientAndSync' | 'completeClientSync';
	webhook:
		| 'createOppStatusWebhook'
		| 'deleteTrigger'
		| 'createGenericListWebhook'
		| 'createContactListWebhook';
	project: 'createProjectFromTemplate' | 'createProject' | 'addProjectMembers';
	opportunity: 'getOppDetails' | 'createCompanyOpportunity';
	misc: 'trackBouncedEmail';
};

export type NexlEntities = AllEntities<NexlMap>;

export type NexlContact = Entity<NexlMap, 'contact'>;
export type NexlCompany = Entity<NexlMap, 'company'>;
export type NexlClient = Entity<NexlMap, 'client'>;
export type NexlWebhook = Entity<NexlMap, 'webhook'>;
export type NexlProject = Entity<NexlMap, 'project'>;
export type NexlOpportunity = Entity<NexlMap, 'opportunity'>;
export type NexlMisc = Entity<NexlMap, 'misc'>;

export type ContactProperties = PropertiesOf<NexlContact>;
export type CompanyProperties = PropertiesOf<NexlCompany>;
export type ClientProperties = PropertiesOf<NexlClient>;
export type WebhookProperties = PropertiesOf<NexlWebhook>;
export type ProjectProperties = PropertiesOf<NexlProject>;
export type OpportunityProperties = PropertiesOf<NexlOpportunity>;
export type MiscProperties = PropertiesOf<NexlMisc>;

export interface IAttachment {
	fields: {
		item?: object[];
	};
	actions: {
		item?: object[];
	};
}
