/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CollectionUpdateFormInputValues = {
    name?: string;
    url?: string;
    nofProducts?: number;
};
export declare type CollectionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    nofProducts?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CollectionUpdateFormOverridesProps = {
    CollectionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    nofProducts?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CollectionUpdateFormProps = React.PropsWithChildren<{
    overrides?: CollectionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    collection?: Collection;
    onSubmit?: (fields: CollectionUpdateFormInputValues) => CollectionUpdateFormInputValues;
    onSuccess?: (fields: CollectionUpdateFormInputValues) => void;
    onError?: (fields: CollectionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CollectionUpdateFormInputValues) => CollectionUpdateFormInputValues;
    onValidate?: CollectionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CollectionUpdateForm(props: CollectionUpdateFormProps): React.ReactElement;
