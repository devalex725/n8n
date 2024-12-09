import { IDataObject } from 'n8n-workflow';
import type { ProjectProperties } from '../../Interfaces';
import { stringFixedCollectionProperty } from '../../../helpers/properties';

const displayOptions: IDataObject = {
	show: {
		resource: ['project'],
		operation: ['addProjectMembers'],
	},
};

export const addProjectMembersDescription: ProjectProperties = [
  {
    displayName: 'Project ID',
    name: 'projectId',
    type: 'string',
    default: '',
    required: true,
		displayOptions,
  },
  stringFixedCollectionProperty({
    displayName: 'Member Emails',
    name: 'memberEmails',
    required: true,
    displayOptions
  }, {
    displayName: 'Email',
    name: 'email',
    required: true
  })
];