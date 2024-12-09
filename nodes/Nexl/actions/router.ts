import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import * as contact from './contact';
import * as company from './company';
import * as client from './client';
import * as webhook from './webhook';
import * as project from './project';
import * as opportunity from './opportunity';
import * as misc from './misc';
import type { NexlEntities } from './Interfaces';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<NexlEntities>('resource', i);
		let operation = this.getNodeParameter('operation', i);

		const mapVar = {
			resource,
			operation,
		} as NexlEntities;

		try {
			if (mapVar.resource === 'contact') {
				responseData = await contact[mapVar.operation].execute.call(this, i);
			} else if (mapVar.resource === 'company') {
				responseData = await company[mapVar.operation].execute.call(this, i);
			} else if (mapVar.resource === 'client') {
				responseData = await client[mapVar.operation].execute.call(this, i);
			} else if (mapVar.resource === 'webhook') {
				responseData = await webhook[mapVar.operation].execute.call(this, i);
			} else if (mapVar.resource === 'project') {
				responseData = await project[mapVar.operation].execute.call(this, i);
			} else if (mapVar.resource === 'opportunity') {
				responseData = await opportunity[mapVar.operation].execute.call(this, i);
			} else if (mapVar.resource === 'misc') {
				responseData = await misc[mapVar.operation].execute.call(this, i);
			}

			// Handling errors
			let errors: IDataObject[] = [];
			if (responseData) {
				responseData.forEach((item) => {
					const itemJson = item.json as IDataObject;
					if (itemJson && itemJson.failReasons) {
						errors = errors.concat(...(itemJson.failReasons as IDataObject[]));
					}
				});
			}
			if (errors.length > 0) {
				throw new Error(errors.toString());
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);
			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}
