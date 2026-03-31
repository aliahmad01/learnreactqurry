// PURPOSE: Fetch the full list of users
// USED IN: any component that needs to display users
// EXAMPLE: const { data, isLoading } = useUsers();

import { useQuery } from '@tanstack/react-query';
import { userApi } from '../../api/userApi';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],       // cache key — shared across all components
    queryFn: userApi.getAll,   // function that fetches the data
  });
}