// PURPOSE: One global cache config for the whole app
// USED IN: src/main.jsx (wrapped around everything)

import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 100,   // data fresh for 2 minutes
      retry: 1,                    // retry failed requests once
      refetchOnWindowFocus: false, // don't refetch on tab switch
    },
  },
});
