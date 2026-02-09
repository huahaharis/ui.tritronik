import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useDataProvider } from "./provider";
import { HttpError } from "./types";

interface UseCustomProps<TData = any, TError = HttpError> {
  url: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  config?: {
    filters?: any[];
    sorters?: any[];
    payload?: any;
    query?: any;
    headers?: any;
  };
  queryOptions?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">;
  meta?: any;
}

export const useCustom = <TData extends unknown = any, TError = HttpError>({
  url,
  method,
  config,
  queryOptions,
  meta,
}: UseCustomProps<TData, TError>): UseQueryResult<TData, TError> => {
  const dataProvider = useDataProvider();

  return useQuery<TData, TError>({
    queryKey: [url, method, config, meta],
    queryFn: () =>
      dataProvider.custom<TData>({
        url,
        method,
        ...config,
        meta,
      }),
    ...queryOptions,
  });
};
