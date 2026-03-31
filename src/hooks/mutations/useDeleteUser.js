// PURPOSE: Send a DELETE request to remove a user
// USED IN: any component with a "Delete" button on a user
// EXAMPLE: const { mutate: deleteUser } = useDeleteUser();
//          deleteUser(userId);

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../../api/userApi';

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.delete,

    onSuccess: (deletedId) => {
      // Remove the user from cache immediately
      queryClient.setQueryData(['users'], (old) =>
        (old || []).filter(user => user.id !== deletedId)
      );
    },
  });
}