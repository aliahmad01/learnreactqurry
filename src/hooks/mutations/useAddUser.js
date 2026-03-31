// PURPOSE: Send a POST request to create a new user
// USED IN: any component with an "Add User" form
// EXAMPLE: const { mutate: addUser, isPending } = useAddUser();
//          addUser({ name: 'John', email: 'john@test.com' });

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../../api/userApi';

export function useAddUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.create,  // called when mutate(data) is triggered

    onSuccess: (newUser) => {
      // Update the cache directly — no extra API call needed
      queryClient.setQueryData(['users'], (old) => [...(old || []), newUser]);
    },

    onError: (error) => {
      console.error('Add user failed:', error);
    },
  });
}