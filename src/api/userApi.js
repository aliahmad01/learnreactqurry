// PURPOSE: All fetch calls for users in one place
// RULE: No React, no hooks — just plain async functions
// USED IN: hooks/queries/useUsers.js, hooks/mutations/useAddUser.js etc.

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const userApi = {
  // Called by useUsers hook
  getAll: () =>
    fetch(`${BASE_URL}/users`).then(r => r.json()),

  // Called by useUserById hook
  getById: (id) =>
    fetch(`${BASE_URL}/users/${id}`).then(r => r.json()),

  // Called by useAddUser hook
  create: (userData) =>
    fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }).then(r => r.json()),

  // Called by useDeleteUser hook
  delete: (id) =>
    fetch(`${BASE_URL}/users/${id}`, { method: 'DELETE' })
      .then(() => id), // return the id back for use in onSuccess
};