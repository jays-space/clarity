/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Products } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductsUpdateFormInputValues = {
    name?: string;
    descriptio?: string;
    price?: number;
    units?: number;
    images?: string[];
    adminID?: string;
};
export declare type ProductsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    descriptio?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    units?: ValidationFunction<number>;
    images?: ValidationFunction<string>;
    adminID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsUpdateFormOverridesProps = {
    ProductsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    descriptio?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    units?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    adminID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    products?: Products;
    onSubmit?: (fields: ProductsUpdateFormInputValues) => ProductsUpdateFormInputValues;
    onSuccess?: (fields: ProductsUpdateFormInputValues) => void;
    onError?: (fields: ProductsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductsUpdateFormInputValues) => ProductsUpdateFormInputValues;
    onValidate?: ProductsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductsUpdateForm(props: ProductsUpdateFormProps): React.ReactElement;
