import { IDataObject } from 'n8n-workflow';
import type { ContactProperties } from '../../Interfaces';

const displayOptions: IDataObject = {
  show: {
    resource: ['contact'],
    operation: ['removeMemberFromContact'],
  },
};

export const removeMemberFromContactListDescription: ContactProperties = [

];
