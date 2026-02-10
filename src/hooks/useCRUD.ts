import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { useDataProvider } from "./provider";
import type {
    CreateResponse,
    UpdateResponse,
    DeleteOneResponse,
    GetOneResponse,
    HttpError
} from "./types";

export const useOne = <
    TData = any,
    TError = HttpError
>(params: {
    resource: string;
    id: any;
    meta?: any;
    queryOptions?: any;
}): UseQueryResult<GetOneResponse<TData>, TError> => {
    const dataProvider = useDataProvider();

    return useQuery<GetOneResponse<TData>, TError>({
        queryKey: [params.resource, "detail", params.id, params.meta],
        queryFn: () => dataProvider.getOne<TData>({
            resource: params.resource,
            id: params.id,
            meta: params.meta,
        }),
        ...params.queryOptions,
    });
};

export const useCreate = <
    TData = any,
    TError = HttpError,
    TVariables = any
>(): UseMutationResult<
    CreateResponse<TData>,
    TError,
    { resource?: string; variables: TVariables; meta?: any },
    unknown
> => {
    const dataProvider = useDataProvider();
    const queryClient = useQueryClient();

    return useMutation<CreateResponse<TData>, TError, { resource?: string; variables: TVariables; meta?: any }>({
        mutationFn: ({ resource, variables, meta }) => {
            return dataProvider.create<TData, TVariables>({
                resource: resource || "",
                variables,
                meta,
            });
        },
        onSuccess: (_data, variables) => {
            if (variables.resource) {
                queryClient.invalidateQueries({ queryKey: [variables.resource] });
            }
        },
    });
};

export const useUpdate = <
    TData = any,
    TError = HttpError,
    TVariables = any
>(): UseMutationResult<
    UpdateResponse<TData>,
    TError,
    { resource: string; id: any; variables: TVariables; meta?: any },
    unknown
> => {
    const dataProvider = useDataProvider();
    const queryClient = useQueryClient();

    return useMutation<UpdateResponse<TData>, TError, {
        resource: string;
        id: any;
        variables: TVariables;
        meta?: any;
    }>({
        mutationFn: ({ resource, id, variables, meta }) => {
            return dataProvider.update<TData, TVariables>({
                resource,
                id,
                variables,
                meta,
            });
        },
        onSuccess: (_data, { resource, id }) => {
            queryClient.invalidateQueries({ queryKey: [resource, "list"] });
            queryClient.invalidateQueries({ queryKey: [resource, "detail", id] });
        },
    });
};

export const useDelete = <
    TData = any,
    TError = HttpError
>(): UseMutationResult<
    DeleteOneResponse<TData>,
    TError,
    { resource: string; id: any; meta?: any },
    unknown
> => {
    const dataProvider = useDataProvider();
    const queryClient = useQueryClient();

    return useMutation<DeleteOneResponse<TData>, TError, {
        resource: string;
        id: any;
        meta?: any;
    }>({
        mutationFn: ({ resource, id, meta }) => {
            return dataProvider.deleteOne<TData>({
                resource,
                id,
                meta,
            });
        },
        onSuccess: (_data, { resource }) => {
            queryClient.invalidateQueries({ queryKey: [resource, "list"] });
        },
    });
};
