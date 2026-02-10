import { useEffect } from "react";
import { useForm as useHookForm, type UseFormProps, type UseFormReturn, type FieldValues, type SubmitHandler, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodSchema, ZodType } from "zod";
import { useOne, useCreate, useUpdate } from "./useCRUD";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";

export interface UseFormConfig<TQueryFnData = any, TError = any, TVariables extends FieldValues = FieldValues> extends UseFormProps<TVariables> {
  resource: string;
  action: "create" | "edit";
  id?: string | number;
  schema?: ZodSchema<any> | ZodType<any, any, any>;
  redirect?: boolean | string;
  onSuccess?: (data: any, variables: TVariables, context: any) => void;
  queryOptions?: any;
  mutationOptions?: any;
  warnWhenUnsavedChanges?: boolean;
}

export interface UseFormReturnType<TVariables extends FieldValues = FieldValues> extends UseFormReturn<TVariables> {
  formLoading: boolean;
  onFinish: (e?: React.BaseSyntheticEvent) => Promise<void>;
  mutationResult: any;
  saveButtonProps: {
    disabled: boolean;
    loading: boolean;
    onClick: () => void;
  };
}

export const useForm = <
  TQueryFnData = any,
  TError = any,
  TVariables extends FieldValues = FieldValues
>({
  resource,
  action,
  id,
  schema,
  defaultValues,
  redirect = true,
  onSuccess,
  queryOptions,
  mutationOptions,
  warnWhenUnsavedChanges,
  ...props
}: UseFormConfig<TQueryFnData, TError, TVariables>): UseFormReturnType<TVariables> => {
  const router = useRouter();
  
  const form = useHookForm<TVariables>({
    defaultValues,
    resolver: schema ? (zodResolver(schema as any) as any) : undefined,
    ...props,
  });

  const queryResult = useOne<TQueryFnData, TError>({
    resource,
    id,
    queryOptions: {
      enabled: action === "edit" && !!id,
      ...queryOptions,
    },
  });

  const createMutation = useCreate<TQueryFnData, TError, TVariables>();
  const updateMutation = useUpdate<TQueryFnData, TError, TVariables>();

  const mutation = action === "create" ? createMutation : updateMutation;

  useEffect(() => {
    if (action === "edit" && queryResult.data?.data) {
      form.reset(queryResult.data.data as any);
    }
  }, [action, queryResult.data, form]);

  const onFinish: SubmitHandler<TVariables> = async (values) => {
    try {
      if (action === "create") {
         await createMutation.mutateAsync(
          {
            resource,
            variables: values,
          } as any, 
          {
            onSuccess: (data: any, variables: any, context: any) => {
              toast.success("Successfully created record");
              if (onSuccess) onSuccess(data, variables as unknown as TVariables, context);
              if (redirect) {
                 const path = typeof redirect === "string" ? redirect : `/${resource}`;
                 router.navigate({ to: path });
              }
            },
            onError: (error: any) => {
               toast.error(error?.message || "Failed to create record");
            },
            ...mutationOptions
          }
        );
      } else {
        await updateMutation.mutateAsync(
          {
            resource,
            id,
            variables: values,
          } as any, 
          {
            onSuccess: (data: any, variables: any, context: any) => {
               toast.success("Successfully updated record");
               if (onSuccess) onSuccess(data, variables as unknown as TVariables, context);
                if (redirect) {
                 const path = typeof redirect === "string" ? redirect : `/${resource}`;
                 router.navigate({ to: path });
              }
            },
            onError: (error: any) => {
                toast.error(error?.message || "Failed to update record");
            },
             ...mutationOptions
          }
        );
      }
    } catch (error) {
       // handled in onError
    }
  };

  const formLoading = queryResult.isLoading || mutation.isPending;

  const handleSubmit = form.handleSubmit(onFinish);

  return {
    ...form,
    formLoading,
    onFinish: handleSubmit as any,
    mutationResult: mutation,
    saveButtonProps: {
      disabled: formLoading,
      loading: formLoading,
      onClick: handleSubmit,
    }
  };
};
