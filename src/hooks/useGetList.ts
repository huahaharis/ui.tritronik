import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { useDataProvider } from "./provider";
import type {
  GetListResponse,
  HttpError,
  Pagination,
  CrudFilter,
  CrudSort,
} from "./types";

interface UseGetListProps<TData = any, TError = HttpError> {
  resource: string;
  pagination?: Pagination;
  filters?: CrudFilter[];
  sorters?: CrudSort[];
  queryOptions?: Omit<
    UseQueryOptions<GetListResponse<TData>, TError, GetListResponse<TData>>,
    "queryKey" | "queryFn"
  >;
  meta?: any;
}

export const useGetList = <TData extends unknown = any, TError = HttpError>({
  resource,
  pagination,
  filters,
  sorters,
  queryOptions,
  meta,
}: UseGetListProps<TData, TError>): UseQueryResult<
  GetListResponse<TData>,
  TError
> => {
  const dataProvider = useDataProvider();

  return useQuery<GetListResponse<TData>, TError>({
    queryKey: [resource, "list", pagination, filters, sorters, meta],
    queryFn: async () => {
      return dataProvider.getList<TData>({
        resource,
        pagination,
        filters,
        sorters,
        meta,
      });
    },
    ...queryOptions,
  });
};
