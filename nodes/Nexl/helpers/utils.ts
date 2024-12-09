import { IDataObject } from "n8n-workflow";

// Remove properties of which value is empty
export const removeEmptyProps = (obj: IDataObject) => {
  for (let k in obj) {
    if (obj[k] === '') {
      delete obj[k];
    } else if ((obj[k] as any[]).length === 0) {
      delete obj[k];
    }
  }
  return obj;
}

// Get custom fields data from collection
export const getCustomFieldAttrFromCollection = (obj: IDataObject) => {
  const customFields = [];
  for (let key in obj) {
    customFields.push({name: key, value: obj[key]});
  }
  return customFields;
}
  