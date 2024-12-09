import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function addMemberToCompanyList(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `graphql`;

	body.query = `
		mutation AddMemberToCompanyList(
			$list_uid: ID!,
			$company_uid: ID!,
			$custom_name1: String,
			$custom_value1: CustomValueStringScalar,
			$custom_name2: String,
			$custom_value2: CustomValueStringScalar,
			$custom_name3: String,
			$custom_value3: CustomValueStringScalar,
			$custom_name4: String,
			$custom_value4: CustomValueStringScalar,
			$custom_name5: String,
			$custom_value5: CustomValueStringScalar,
			$custom_name6: String,
			$custom_value6: CustomValueStringScalar,
			$custom_name7: String,
			$custom_value7: CustomValueStringScalar,
			$custom_name8: String,
			$custom_value8: CustomValueStringScalar,
			$custom_name9: String,
			$custom_value9: CustomValueStringScalar,
			$custom_name10: String,
			$custom_value10: CustomValueStringScalar
		) {
			addMemberToCompanyList(
				companyUid: $company_uid,
				listUid: $list_uid,
				customFields: [
					{name: $custom_name1, jsonValue: $custom_value1},
					{name: $custom_name2, jsonValue: $custom_value2},
					{name: $custom_name3, jsonValue: $custom_value3},
					{name: $custom_name4, jsonValue: $custom_value4},
					{name: $custom_name5, jsonValue: $custom_value5},
					{name: $custom_name6, jsonValue: $custom_value6},
					{name: $custom_name7, jsonValue: $custom_value7},
					{name: $custom_name8, jsonValue: $custom_value8},
					{name: $custom_name9, jsonValue: $custom_value9},
					{name: $custom_name10, jsonValue: $custom_value10}
				]
			) {
				failReasons
			}
		}
	`;

	const variables: IDataObject = {
		company_uid: this.getNodeParameter('companyUid', index) as string,
		list_uid: this.getNodeParameter('listUid', index) as string,
	};
	for (let i = 1; i < 11; i++) {
		const customName = 'custom_name' + i;
		const customField = 'custom_value' + i;
		variables[customName] = this.getNodeParameter(customName, index) as string;
		variables[customField] = this.getNodeParameter(customField, index) as string;
	}

	body.variables = JSON.stringify(variables);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData.data.addMemberToCompanyList);
}
