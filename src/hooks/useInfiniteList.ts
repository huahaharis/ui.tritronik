import {
  type InfiniteData,
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
  type UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { useDataProvider } from "./provider";
import type {
  GetListResponse,
  HttpError,
  Pagination,
  CrudFilter,
  CrudSort,
} from "./types";

interface UseInfiniteListProps<TData = any, TError = HttpError> {
  resource: string;
  pagination?: Pagination;
  filters?: CrudFilter[];
  sorters?: CrudSort[];
  queryOptions?: Omit<
    UseInfiniteQueryOptions<
      GetListResponse<TData>,
      TError,
      InfiniteData<GetListResponse<TData>>,
      any,
      number
    >,
    "queryKey" | "queryFn" | "getNextPageParam" | "initialPageParam"
  >;
  meta?: any;
}

export const useInfiniteList = <
  TData extends unknown = any,
  TError = HttpError,
>({
  resource,
  pagination,
  filters,
  sorters,
  queryOptions,
  meta,
}: UseInfiniteListProps<TData, TError>): UseInfiniteQueryResult<
  InfiniteData<GetListResponse<TData>>,
  TError
> => {
  const dataProvider = useDataProvider();

  return useInfiniteQuery<
    GetListResponse<TData>,
    TError,
    InfiniteData<GetListResponse<TData>>,
    any,
    number
  >({
    queryKey: [
      resource,
      "list",
      "infinite",
      pagination,
      filters,
      sorters,
      meta,
    ],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      return dataProvider.getList<TData>({
        resource,
        pagination: { ...pagination, current: pageParam as number },
        filters,
        sorters,
        meta,
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(
        (lastPage.total || 0) / (pagination?.pageSize || 10),
      );
      const currentPage = allPages.length;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    ...queryOptions,
  });
};
