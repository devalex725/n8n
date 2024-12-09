export const FilterOperators = [
	{ name: 'Contains', value: 'CONTAINS' },
	{ name: 'Does Not Contain', value: 'DOES_NOT_CONTAIN' },
	{ name: 'Ends With', value: 'ENDS_WITH' },
	{ name: 'Has Any Value', value: 'HAS_ANY_VALUE' },
	{ name: 'Has No Value', value: 'HAS_NO_VALUE' },
	{ name: 'Is', value: 'IS' },
	{ name: 'Is Not', value: 'IS_NOT' },
	{ name: 'Is One Of', value: 'IS_ONE_OF' },
	{ name: 'Starts With', value: 'STARTS_WITH' },
];

export const TimeFilterPositions = [
	{ name: 'After', value: 'AFTER' },
	{ name: 'Before', value: 'BEFORE' },
];

export const TimeFilterProperties = [
	{ name: 'Created', value: 'CREATED' },
	{ name: 'Updated', value: 'UPDATED' },
];

export const CompanyDefaultTypes = [
	{ name: 'Client', value: 'CLIENT' },
	{ name: 'Prospect', value: 'PROSPECT' },
	{ name: 'Unclassified', value: 'UNCLASSIFIED' },
];

export const CompanyFilterProperties = [
	{ name: 'HEADQUARTER_CITY', value: 'HEADQUARTER_CITY' },
	{ name: 'HEADQUARTER_COUNTRY', value: 'HEADQUARTER_COUNTRY' },
	{ name: 'HEADQUARTER_STATE', value: 'HEADQUARTER_STATE' },
	{ name: 'INDUSTRY_NAMES', value: 'INDUSTRY_NAMES' },
	{ name: 'INTERNAL_INDUSTRY_NAMES', value: 'INTERNAL_INDUSTRY_NAMES' },
	{ name: 'NAME', value: 'NAME' },
	{ name: 'OFFICE_LOCATION_CITY', value: 'OFFICE_LOCATION_CITY' },
	{ name: 'OFFICE_LOCATION_COUNTRY', value: 'OFFICE_LOCATION_COUNTRY' },
	{ name: 'OFFICE_LOCATION_STATE', value: 'OFFICE_LOCATION_STATE' },
	{ name: 'TAGS', value: 'TAGS' },
];

export const CompanyOrderyBy = [
	{ name: 'Name(ASC)', value: 'COMPANY_NAME_ASC' },
	{ name: 'Name(DESC)', value: 'COMPANY_NAME_DESC' },
	{ name: 'Created at(ASC)', value: 'CREATED_AT_ASC' },
	{ name: 'Created at(DESC)', value: 'CREATED_AT_DESC' },
	{ name: 'Insight Stats Total interactions(ASC)', value: 'INSIGHT_STATS_TOTAL_INTERACTIONS_ASC' },
	{
		name: 'Insight Stats Total interactions(DESC)',
		value: 'INSIGHT_STATS_TOTAL_INTERACTIONS_DESC',
	},
	{ name: 'Last interaction(ASC)', value: 'LAST_INTERACTION_ASC' },
	{ name: 'Last interaction(DESC)', value: 'LAST_INTERACTION_DESC' },
	{ name: 'Number of interfactions(ASC)', value: 'NUMBER_OF_INTERACTION_ASC' },
	{ name: 'Number of interfactions(DESC)', value: 'NUMBER_OF_INTERACTION_DESC' },
];

export const ContactFilterProperties = [
	{ name: 'CITY', value: 'CITY' },
	{ name: 'COMPANY_HEADQUARTER_CITY', value: 'COMPANY_HEADQUARTER_CITY' },
	{ name: 'COMPANY_HEADQUARTER_COUNTRY', value: 'COMPANY_HEADQUARTER_COUNTRY' },
	{ name: 'COMPANY_HEADQUARTER_STATE', value: 'COMPANY_HEADQUARTER_STATE' },
	{ name: 'COMPANY_INDUSTRY_NAMES', value: 'COMPANY_INDUSTRY_NAMES' },
	{ name: 'COMPANY_INTERNAL_INDUSTRY_NAMES', value: 'COMPANY_INTERNAL_INDUSTRY_NAMES' },
	{ name: 'COMPANY_NAME', value: 'COMPANY_NAME' },
	{ name: 'COMPANY_TAGS', value: 'COMPANY_TAGS' },
	{ name: 'COUNTRY', value: 'COUNTRY' },
	{ name: 'JOB_TITLE', value: 'JOB_TITLE' },
	{ name: 'STATE', value: 'STATE' },
	{ name: 'TAGS', value: 'TAGS' },
];

export const ContactOrderyBy = [
	{ name: 'COMPANY_NAME_ASC', value: 'COMPANY_NAME_ASC' },
	{ name: 'COMPANY_NAME_DESC', value: 'COMPANY_NAME_DESC' },
	{ name: 'CREATED_AT_ASC', value: 'CREATED_AT_ASC' },
	{ name: 'CREATED_AT_DESC', value: 'CREATED_AT_DESC' },
	{ name: 'FIRST_NAME_ASC', value: 'FIRST_NAME_ASC' },
	{ name: 'FIRST_NAME_DESC', value: 'FIRST_NAME_DESC' },
	{ name: 'LAST_INTERACTION_ASC', value: 'LAST_INTERACTION_ASC' },
	{ name: 'LAST_INTERACTION_DESC', value: 'LAST_INTERACTION_DESC' },
	{ name: 'LAST_NAME_ASC', value: 'LAST_NAME_ASC' },
	{ name: 'LAST_NAME_DESC', value: 'LAST_NAME_DESC' },
	{ name: 'NUMBER_OF_INTERACTION_ASC', value: 'NUMBER_OF_INTERACTION_ASC' },
	{ name: 'NUMBER_OF_INTERACTION_DESC', value: 'NUMBER_OF_INTERACTION_DESC' },
];

export const ContactListsOrderBy = [
	{ name: 'CREATED_AT_ASC', value: 'CREATED_AT_ASC' },
	{ name: 'CREATED_AT_DESC', value: 'CREATED_AT_DESC' },
	{ name: 'NAME_ASC', value: 'NAME_ASC' },
	{ name: 'NAME_DESC', value: 'NAME_DESC' },
	{ name: 'UPDATED_AT_ASC', value: 'UPDATED_AT_ASC' },
	{ name: 'UPDATED_AT_DESC', value: 'UPDATED_AT_DESC' },
];

export const ConsentStatusOptions = [
	{ name: 'CONSENT_GIVEN', value: 'CONSENT_GIVEN' },
	{ name: 'CONSENT_NOT_GIVEN', value: 'CONSENT_NOT_GIVEN' },
	{ name: 'LEGITIMATE_INTEREST', value: 'LEGITIMATE_INTEREST' },
	{ name: 'USER_UNSUBSCRIBED', value: 'USER_UNSUBSCRIBED' },
];
