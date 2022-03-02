import { makeFrameyApiCall } from '~/api/utils';

export const Books = {
  getList: async (params: { query: string | null }, token: string) => {
    return makeFrameyApiCall(`books?q=${params.query ?? ''}`, null, token);
  },
};
