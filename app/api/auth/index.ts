import { makeFrameyApiCall } from '~/api/utils';

export const Auth = {
  register: async (params: { username: string; password: string }) => {
    return makeFrameyApiCall(
      'auth/register',
      {
        method: 'POST',
        body: JSON.stringify(params),
      },
      null,
    );
  },

  login: async (params: { username: string; password: string }) => {
    return makeFrameyApiCall(
      'auth/login',
      {
        method: 'POST',
        body: JSON.stringify(params),
      },
      null,
    );
  },
};
