import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { removeEmptyProps } from '../../../helpers/utils';

export async function getContacts(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		query Contacts(
      $filter: ContactsFiltering
      $filters: [ContactFilter!]
      $orderBy: ContactsOrderBy
      $page: Int
      $perPage: Int
    ) {
      contacts(
        filter: $filter
        filters: $filters
        orderBy: $orderBy
        page: $page
        perPage: $perPage
      ) {
        entries {
          archivedAt
          company {
            archivedAt
            companyType { typeName }
            contacts
            createdAt
            domain
            domains
            externalIdentifier { client   group   id }
            id
            info { name   industryNames }
            isBlocked
            isInternal
            logoUrl
            openOpportunityCount
            pendingTaskCount
            upcomingMeetingCount
          }
          createdAt
          emailAddresses
          id
          info {
            customFields { id   name  schemaId  stringValue }
            department
            displayName
            educations
            firstName
            gender
            id
            imageUrl
            jobTitle
            lastName
            linkedinUrl
            location {
              brief
              city
              country { code  emojiFlag   name }
              id
              postCode
              state
              streetAddress
            }
            office
            phoneNumbers
            tags
            twitterUrl
          }
          isActive
          isArchived
          isEmployee
          isKeyContact
          isPersonal
          marketingListConsent { autoChangedReason  howWasConsentGiven  id  status   whenWasConsentGiven }
          primaryEmail
        }
        pageInfo { totalEntries   totalPages }
      }
    }

	`;

	const customFieldsInput = this.getNodeParameter('withCustomField', index) as IDataObject;
	let withCustomField: IDataObject[] = [];
	if (customFieldsInput.list) {
		withCustomField = (customFieldsInput.list as IDataObject[])
			.filter((item) => item.name !== '' && item.value !== '')
			.map((item) => ({ name: item.name, values: String(item.value || '').split(/,/g) }));
	}

	let filter = {
		term: this.getNodeParameter('term', index) as string,
		companyTypeUid: this.getNodeParameter('companyTypeUid', index) as string,
		withCustomField,
	} as IDataObject;

	['includeInternalContact', 'missingKeyData', 'withBouncedEmails', 'withJobChanges'].forEach(
		(prop) => {
			const inputValue = this.getNodeParameter(prop, index);
			if ((inputValue as string) !== '') {
				filter[prop] = inputValue as boolean;
			}
		},
	);

	// Remove empty values
	filter = removeEmptyProps(filter);

	let filters: IDataObject[] = [];
	const propertiesFilter = this.getNodeParameter('filters', index) as IDataObject;
	if (propertiesFilter.list) {
		filters = (propertiesFilter.list as IDataObject[]).filter(
			(item) => item.property !== '' && item.value !== '',
		);
	}

	let variables: IDataObject = {
		filter,
		filters,
		orderBy: this.getNodeParameter('orderBy', index) as string,
		page: this.getNodeParameter('page', index) as string,
		perPage: this.getNodeParameter('perPage', index) as string,
	};

	console.log('getContacts variables:', variables);

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.contacts);
}
