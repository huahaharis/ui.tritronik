import { createContext, useContext } from "react";
import type { 
    GetListResponse, 
    GetManyResponse, 
    GetOneResponse, 
    CrudFilter, 
    CrudSort, 
    Pagination,
    CreateResponse,
    UpdateResponse,
    DeleteOneResponse
} from "./types";

export interface DataProvider {
    getList: <TData = any>(params: {
        resource: string;
        pagination?: Pagination;
        filters?: CrudFilter[];
        sorters?: CrudSort[];
        meta?: any;
    }) => Promise<GetListResponse<TData>>;

    getMany: <TData = any>(params: {
        resource: string;
        ids: any[];
        meta?: any;
    }) => Promise<GetManyResponse<TData>>;

    getOne: <TData = any>(params: {
        resource: string;
        id: any;
        meta?: any;
    }) => Promise<GetOneResponse<TData>>;

    create: <TData = any, TVariables = any>(params: {
        resource: string;
        variables: TVariables;
        meta?: any;
    }) => Promise<CreateResponse<TData>>;

    update: <TData = any, TVariables = any>(params: {
        resource: string;
        id: any;
        variables: TVariables;
        meta?: any;
    }) => Promise<UpdateResponse<TData>>;

    deleteOne: <TData = any>(params: {
        resource: string;
        id: any;
        meta?: any;
    }) => Promise<DeleteOneResponse<TData>>;

    custom: <TData = any>(params: {
        url: string;
        method: "get" | "post" | "put" | "patch" | "delete";
        filters?: CrudFilter[];
        sorters?: CrudSort[];
        payload?: any;
        query?: any;
        headers?: any;
        meta?: any;
    }) => Promise<TData>;
}

export const createDataProvider = (apiUrl: string): DataProvider => ({
    getList: async ({ resource, pagination, filters, sorters }) => {
        const url = new URL(`${apiUrl}/${resource}`);
        
        if (pagination) {
            url.searchParams.append("_start", String(((pagination.current || 1) - 1) * (pagination.pageSize || 10)));
            url.searchParams.append("_end", String((pagination.current || 1) * (pagination.pageSize || 10)));
        }

        if (sorters && sorters.length > 0) {
            url.searchParams.append("_sort", sorters[0].field);
            url.searchParams.append("_order", sorters[0].order);
        }

        if (filters) {
            filters.forEach(filter => {
                const operator = filter.operator || "eq";
                const { field, value } = filter;

                switch (operator) {
                    case "eq":
                        url.searchParams.append(field, value);
                        break;
                    case "ne":
                        url.searchParams.append(`${field}_ne`, value);
                        break;
                    case "lt":
                        url.searchParams.append(`${field}_lt`, value);
                        break;
                    case "gt":
                        url.searchParams.append(`${field}_gt`, value);
                        break;
                    case "lte":
                        url.searchParams.append(`${field}_lte`, value);
                        break;
                    case "gte":
                        url.searchParams.append(`${field}_gte`, value);
                        break;
                    case "contains":
                        url.searchParams.append(`${field}_like`, value);
                        break;
                    // Add more mappings as needed based on your backend API
                    default:
                         url.searchParams.append(field, value);
                }
            });
        }

        const response = await fetch(url.toString());
        if (!response.ok) throw new Error(response.statusText);
        
        const data = await response.json();
        const total = Number(response.headers.get("x-total-count"));

        return {
            data,
            total: total || data.length,
        };
    },

    getMany: async ({ resource, ids }) => {
        const url = new URL(`${apiUrl}/${resource}`);
        ids.forEach(id => url.searchParams.append("id", id));
        
        const response = await fetch(url.toString());
        if (!response.ok) throw new Error(response.statusText);
        
        const data = await response.json();
        return { data };
    },

    getOne: async ({ resource, id }) => {
        const response = await fetch(`${apiUrl}/${resource}/${id}`);
        if (!response.ok) throw new Error(response.statusText);
        
        const data = await response.json();
        return { data };
    },

    create: async ({ resource, variables }) => {
        const response = await fetch(`${apiUrl}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(variables),
        });

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        return { data };
    },

    update: async ({ resource, id, variables }) => {
        const response = await fetch(`${apiUrl}/${resource}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(variables),
        });

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        return { data };
    },

    deleteOne: async ({ resource, id }) => {
        const response = await fetch(`${apiUrl}/${resource}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        return { data };
    },

    custom: async ({ url, method, payload, query, headers }) => {
        let requestUrl = new URL(url.startsWith("http") ? url : `${apiUrl}${url}`);
        
        if (query) {
            Object.keys(query).forEach(key => {
                requestUrl.searchParams.append(key, query[key]);
            });
        }

        const response = await fetch(requestUrl.toString(), {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: payload ? JSON.stringify(payload) : undefined,
        });

        if (!response.ok) throw new Error(response.statusText);
        return await response.json();
    }
});

export const defaultDataProvider = createDataProvider("https://api.fake-rest.refine.dev");

const DataProviderContext = createContext<DataProvider | undefined>(undefined);

export const DataProviderProvider = DataProviderContext.Provider;

export const useDataProvider = () => {
    const context = useContext(DataProviderContext);
    return context || defaultDataProvider;
};
