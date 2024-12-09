import { IDataObject } from 'n8n-workflow';
import type { ProjectProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
	show: {
		resource: ['project'],
		operation: ['createProject'],
	},
};

export const createProjectDescription: ProjectProperties = [
  {
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions
	},
	{
		displayName: 'Icon Code',
		name: 'iconCode',
		type: 'string',
		default: '',
		displayOptions
	},
	{
		displayName: 'Color Code',
		name: 'colorCode',
		type: 'color',
		default: '',
		displayOptions
	},
	{
		displayName: 'Firm Wide',
		name: 'firmWide',
		type: 'options',
		options: [
			{name: 'True', value: true},
			{name: 'False', value: false},
		],
		default: true,
		displayOptions
	},
	{
		displayName: 'Folder ID',
		name: 'folderId',
		type: 'string',
		default: '',
		displayOptions
	},
	{
		displayName: 'Source Project ID',
		name: 'sourceProjectId',
		type: 'string',
		default: '',
		displayOptions
	},
];
