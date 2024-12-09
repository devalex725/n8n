import {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class NexlApi implements ICredentialType {
  name = 'nexlApi';
  displayName = 'Nexl API';
  properties: INodeProperties[] = [
    {
      displayName: 'Region',
      name: 'region',
      type: 'string',
      default: '',
    },
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
						typeOptions: { password: true },
      default: '',
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        Authorization: '=Bearer {{$credentials.apiKey}}',
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: '=https://{{$credentials.region}}.nexl.cloud/api',
      url: '/graphql',
      method: 'POST',
      body: {
        query: `
          query WhoKnows(
            $contactUid: String,
            $filter: WhoKnowsFiltering,
            $page: Int,
            $perPage: Int
          ) {
            whoKnows(
              contactUid: $contactUid,
              filter: $filter,
              page: $page,
              perPage: $perPage
            ) {
              pageInfo {
                totalEntries
                totalPages
              }
            }
          }
        `,
        variables: {
          "contactUid": "xyz789",
          "filter": {},
          "page": 1,
          "perPage": 10
        }
      }
    },
  };
}
