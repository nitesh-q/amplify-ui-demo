/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodoModelCreateFormInputValues = {
    title?: string;
};
export declare type TodoModelCreateFormValidationValues = {
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoModelCreateFormOverridesProps = {
    TodoModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoModelCreateFormProps = React.PropsWithChildren<{
    overrides?: TodoModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TodoModelCreateFormInputValues) => TodoModelCreateFormInputValues;
    onSuccess?: (fields: TodoModelCreateFormInputValues) => void;
    onError?: (fields: TodoModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoModelCreateFormInputValues) => TodoModelCreateFormInputValues;
    onValidate?: TodoModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TodoModelCreateForm(props: TodoModelCreateFormProps): React.ReactElement;
