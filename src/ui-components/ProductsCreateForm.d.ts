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
export declare type ProductsCreateFormInputValues = {
    name?: string;
    descriptio?: string;
    price?: number;
    units?: number;
    images?: string[];
    adminID?: string;
};
export declare type ProductsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    descriptio?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    units?: ValidationFunction<number>;
    images?: ValidationFunction<string>;
    adminID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsCreateFormOverridesProps = {
    ProductsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    descriptio?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    units?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    adminID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onSuccess?: (fields: ProductsCreateFormInputValues) => void;
    onError?: (fields: ProductsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onValidate?: ProductsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductsCreateForm(props: ProductsCreateFormProps): React.ReactElement;
