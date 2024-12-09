import type { INodeProperties } from 'n8n-workflow';

import * as createProjectFromTemplate from './createProjectFromTemplate';
import * as createProject from './createProject';
import * as addProjectMembers from './addProjectMembers';

export { createProjectFromTemplate, createProject, addProjectMembers };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['project'],
			},
		},
		options: [
			{
				name: 'Create Project',
				value: 'createProject',
				action: 'Create a project',
			},
			{
				name: 'Create Project From Template',
				value: 'createProjectFromTemplate',
				action: 'Create a project from template',
			},
			{
				name: 'Add Project Members',
				value: 'addProjectMembers',
				action: 'Add project members',
			},
		],
		default: 'createProjectFromTemplate',
	},
	...createProject.description,
	...createProjectFromTemplate.description,
	...addProjectMembers.description,
];
