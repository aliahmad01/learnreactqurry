function useInfinitePosts() {
  return useInfiniteQuery({
    queryKey: ["posts-infinite"],   // cache key for this infinite query

    // queryFn receives { pageParam } automatically from React Query
    // pageParam starts at initialPageParam and updates via getNextPageParam
    queryFn: postApi.getPaginated,

    initialPageParam: 1,            // start from page 1

    // getNextPageParam tells React Query what the NEXT page number is
    // lastPage  = the data returned from the most recent page fetch
    // allPages  = array of all pages fetched so far
    // Return undefined to signal "no more pages"
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 5         // if we got a full page (5 items), there's probably more
        ? allPages.length + 1       // next page number = total pages fetched + 1
        : undefined,                // got less than 5 items = last page, stop fetching
  });
}