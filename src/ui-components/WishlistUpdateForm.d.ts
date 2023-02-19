/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Wishlist } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WishlistUpdateFormInputValues = {
    adminID?: string;
};
export declare type WishlistUpdateFormValidationValues = {
    adminID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WishlistUpdateFormOverridesProps = {
    WishlistUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    adminID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WishlistUpdateFormProps = React.PropsWithChildren<{
    overrides?: WishlistUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    wishlist?: Wishlist;
    onSubmit?: (fields: WishlistUpdateFormInputValues) => WishlistUpdateFormInputValues;
    onSuccess?: (fields: WishlistUpdateFormInputValues) => void;
    onError?: (fields: WishlistUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WishlistUpdateFormInputValues) => WishlistUpdateFormInputValues;
    onValidate?: WishlistUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WishlistUpdateForm(props: WishlistUpdateFormProps): React.ReactElement;
