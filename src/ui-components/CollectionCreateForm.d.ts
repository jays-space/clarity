/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CollectionCreateFormInputValues = {
    name?: string;
    url?: string;
    nofProducts?: number;
};
export declare type CollectionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    nofProducts?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CollectionCreateFormOverridesProps = {
    CollectionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    nofProducts?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CollectionCreateFormProps = React.PropsWithChildren<{
    overrides?: CollectionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CollectionCreateFormInputValues) => CollectionCreateFormInputValues;
    onSuccess?: (fields: CollectionCreateFormInputValues) => void;
    onError?: (fields: CollectionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CollectionCreateFormInputValues) => CollectionCreateFormInputValues;
    onValidate?: CollectionCreateFormValidationValues;
} & React.CSSProperties>;
export default function CollectionCreateForm(props: CollectionCreateFormProps): React.ReactElement;
