import { useEffect } from "react";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { useInfiniteList } from "./useInfiniteList";
import { CrudFilter, CrudSort, Pagination } from "./types";

interface UseTableProps {
  resource: string;
  pagination?: Pagination;
  filters?: CrudFilter[];
  sorters?: CrudSort[];
  meta?: any;
}

export const useTable = ({
  resource,
  pagination: initialPagination,
  filters: initialFilters,
  sorters: initialSorters,
  meta,
}: UseTableProps) => {
  const search = useSearch({ strict: false });
  const navigate = useNavigate();

  const current = (search as any).current
    ? Number((search as any).current)
    : initialPagination?.current || 1;
  const pageSize = (search as any).pageSize
    ? Number((search as any).pageSize)
    : initialPagination?.pageSize || 10;

  const listQuery = useInfiniteList({
    resource,
    pagination: {
      current,
      pageSize,
    },
    filters: initialFilters,
    sorters: initialSorters,
    meta,
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
