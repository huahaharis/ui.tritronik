import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useDataProvider } from "./provider";
import { GetManyResponse, HttpError, BaseKey } from "./types";

interface UseManyProps<TData = any, TError = HttpError> {
  resource: string;
  ids: BaseKey[];
  queryOptions?: Omit<
    UseQueryOptions<GetManyResponse<TData>, TError>,
    "queryKey" | "queryFn"
  >;
  meta?: any;
}

export const useMany = <TData extends unknown = any, TError = HttpError>({
  resource,
  ids,
  queryOptions,
  meta,
}: UseManyProps<TData, TError>): UseQueryResult<
  GetManyResponse<TData>,
  TError
> => {
  const dataProvider = useDataProvider();

  return useQuery<GetManyResponse<TData>, TError>({
    queryKey: [resource, "getMany", ids, meta],
    queryFn: () =>
      dataProvider.getMany<TData>({
        resource,
        ids,
        meta,
      }),
    enabled: ids.length > 0 && (queryOptions?.enabled ?? true),
    ...queryOptions,
  });
};
