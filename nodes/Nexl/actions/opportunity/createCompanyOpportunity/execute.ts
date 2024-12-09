import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function createCompanyOpportunity(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation CreateCompanyOpportunity(
			$attributes: CompanyGoalAttributes!
			$companyUid: ID!
			$customStatusUid: ID
		) {
			createCompanyOpportunity(
				attributes: $attributes
				companyUid: $companyUid
				customStatusUid: $customStatusUid
			) {
				failReasons
				uid
			}
		}
	`;

	const attributes: IDataObject = {
		assignedToEmail: this.getNodeParameter('assignedToEmail', index) as string,
		assignedToId: 	this.getNodeParameter('assignedToId', index) as string,
		customStatusId: this.getNodeParameter('customStatusId', index) as string,
		date: 					this.getNodeParameter('date', index) as string,
		description: 		this.getNodeParameter('description', index) as string,
		emailBody: 			this.getNodeParameter('emailBody', index) as string,
		messageReference: this.getNodeParameter('messageReference', index) as string,
		proposedFee: 		this.getNodeParameter('proposedFee', index) as number,
		referralSourceEmail: this.getNodeParameter('referralSourceEmail', index) as string,
		referralSourceId: this.getNodeParameter('referralSourceId', index) as string,
		title: 					this.getNodeParameter('title', index) as string,
	};

	['documentUrls', 'keyContactIds', 'lawyerIds', 'tags'].forEach(fieldName => {
		const fieldInput = this.getNodeParameter(fieldName, index) as IDataObject;
		if (fieldInput.list) {
    	attributes[fieldName] = (fieldInput.list as IDataObject[]).map((item) => item.value);
		}
  });

	const customFieldInput = this.getNodeParameter('customFieldAttributes', index) as IDataObject;
	if (customFieldInput.list) {
		attributes.customFieldAttributes = (customFieldInput.list as IDataObject[]);
	}

	const variables: IDataObject = {
		attributes,
		companyUid: this.getNodeParameter('companyUid', index) as string,
		customStatusUid: this.getNodeParameter('customStatusUid', index) as string,
	};

	body.variables = JSON.stringify(variables);
	console.log('createOpportunity Variables:', variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
  
	return this.helpers.returnJsonArray(responseData.data.createCompanyOpportunity);
}
