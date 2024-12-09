import { IDataObject } from 'n8n-workflow';
import type { ProjectProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['project'],
		operation: ['createProjectFromTemplate'],
	},
};

export const createProjectFromTemplateDescription: ProjectProperties = [
  {
		displayName: 'Template Project ID',
		name: 'templateProjectId',
		type: 'string',
		default: '',
		required: true,
		displayOptions
	},
];
