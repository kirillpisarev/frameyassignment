import { FRAMEY_API_URL } from '~/api/constants';

export const makeFrameyApiCall = async (
  path: string,
  data: RequestInit | null,
  token: string | null,
) => {
  const headers: RequestInit['headers'] = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const result = await fetch(`${FRAMEY_API_URL}/${path}`, {
    ...data,
    headers,
  });

  const json = await result.json();

  if (!result.ok) {
    throw new Error(json.message || `Unknown error with ${path}`);
  }

  return json;
};
