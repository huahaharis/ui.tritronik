import { useSearch, useNavigate } from "@tanstack/react-router";
import { useInfiniteList } from "./useInfiniteList";
import type { CrudFilter, CrudSort, Pagination, HttpError } from "./types";
import type {
  UseInfiniteQueryOptions,
  InfiniteData,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import type { GetListResponse } from "./types";

export interface UseTableProps<TData = any, TError = HttpError> {
  resource: string;
  pagination?: Pagination;
  filters?: CrudFilter[];
  sorters?: CrudSort[];
  meta?: any;
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
}

export type UseTableReturnType<
  TData = any,
  TError = HttpError,
> = UseInfiniteQueryResult<InfiniteData<GetListResponse<TData>>, TError> & {
  tableState: {
    current: number;
    pageSize: number;
  };
  setPagination: (newCurrent: number, newPageSize?: number) => void;
};

export const useTable = <TData extends unknown = any, TError = HttpError>({
  resource,
  pagination: initialPagination,
  filters: initialFilters,
  sorters: initialSorters,
  meta,
  queryOptions,
}: UseTableProps<TData, TError>): UseTableReturnType<TData, TError> => {
  const search = useSearch({ strict: false });
  const navigate = useNavigate();

  const current = (search as any).current
    ? Number((search as any).current)
    : initialPagination?.current || 1;
  const pageSize = (search as any).pageSize
    ? Number((search as any).pageSize)
    : initialPagination?.pageSize || 10;

  const listQuery = useInfiniteList<TData, TError>({
    resource,
    pagination: {
      current,
      pageSize,
    },
    filters: initialFilters,
    sorters: initialSorters,
    meta,
    queryOptions,
  });
  const setPagination = (newCurrent: number, newPageSize?: number) => {
    navigate({
      to: ".",
      search: (prev: any) => ({
        ...prev,
        current: newCurrent,
        pageSize: newPageSize || pageSize,
      }),
      replace: true,
    });
  };

  return {
    ...listQuery,
    tableState: {
      current,
      pageSize,
    },
    setPagination,
  };
};
