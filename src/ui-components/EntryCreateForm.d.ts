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
export declare type EntryCreateFormInputValues = {
    Task?: string;
    Text?: string;
};
export declare type EntryCreateFormValidationValues = {
    Task?: ValidationFunction<string>;
    Text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EntryCreateFormOverridesProps = {
    EntryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Task?: PrimitiveOverrideProps<TextFieldProps>;
    Text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EntryCreateFormProps = React.PropsWithChildren<{
    overrides?: EntryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EntryCreateFormInputValues) => EntryCreateFormInputValues;
    onSuccess?: (fields: EntryCreateFormInputValues) => void;
    onError?: (fields: EntryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EntryCreateFormInputValues) => EntryCreateFormInputValues;
    onValidate?: EntryCreateFormValidationValues;
} & React.CSSProperties>;
export default function EntryCreateForm(props: EntryCreateFormProps): React.ReactElement;
