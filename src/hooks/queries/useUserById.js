// PURPOSE: Fetch a single user by their ID
// USED IN: any component that shows one user's detail
// EXAMPLE: const { data: user } = useUserById(selectedId);
// NOTE: Pass null to pause the query (enabled: !!id)

import { useQuery } from '@tanstack/react-query';
import { userApi } from '../../api/userApi';

export function useUserById(id) {
  return useQuery({
    queryKey: ['users', id],          // separate cache entry per user
    queryFn: () => userApi.getById(id),
    enabled: !!id,                    // only fetch when id exists
  });
}