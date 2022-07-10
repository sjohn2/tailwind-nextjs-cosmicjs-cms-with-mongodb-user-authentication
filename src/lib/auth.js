import { getToken } from './token';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export const loginUser = async (username, password) => {
  const res = await fetch('/api/auth/login', {
    body: JSON.stringify({ username, password }),
    method: 'POST',
  });
  const data = await res.json();
  return data;
};
// ------------------------------------------------------------*

export async function registerUser(payload) {
  const res = await fetch('/api/auth/register', {
    body: JSON.stringify(payload),
    method: 'POST',
  });
  const data = await res.json();
  return data;
}

// ------------------------------------------------------------*
export const whoAmI = async () => {
  const res = await fetch('/api/profile', {
    headers: {
      authorization: getToken(),
    },
    method: 'GET',
  });
  const data = await res.json();
  return data;
};
