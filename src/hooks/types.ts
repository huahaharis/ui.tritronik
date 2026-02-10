export type BaseKey = string | number;

export interface BaseRecord {
    id?: BaseKey;
    [key: string]: any;
}

export interface MetaQuery {
    [key: string]: any;
}

export interface Pagination {
    current?: number;
    pageSize?: number;
    mode?: "client" | "server";
}

export interface HttpError {
    message: string;
    statusCode: number;
    [key: string]: any;
}

export interface GetListResponse<TData = BaseRecord> {
    data: TData[];
    total: number;
    [key: string]: any;
}

export interface GetManyResponse<TData = BaseRecord> {
    data: TData[];
    [key: string]: any;
}

export interface GetOneResponse<TData = BaseRecord> {
    data: TData;
    [key: string]: any;
}

export interface CreateResponse<TData = BaseRecord> {
    data: TData;
    [key: string]: any;
}

export interface UpdateResponse<TData = BaseRecord> {
    data: TData;
    [key: string]: any;
}

export interface DeleteOneResponse<TData = BaseRecord> {
    data: TData;
    [key: string]: any;
}

export type CrudOperators =
  | "eq"
  | "ne"
  | "lt"
  | "gt"
  | "lte"
  | "gte"
  | "in"
  | "nin"
  | "contains"
  | "ncontains"
  | "containss"
  | "ncontainss"
  | "between"
  | "nbetween"
  | "null"
  | "nnull"
  | "startswith"
  | "nstartswith"
  | "endswith"
  | "nendswith"
  | "or"
  | "and";

export type CrudFilter = {
    field: string;
    operator?: CrudOperators;
    value: any;
};

export type CrudSort = {
    field: string;
    order: "asc" | "desc";
};
