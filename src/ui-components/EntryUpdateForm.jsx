/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getEntry } from "../graphql/queries";
import { updateEntry } from "../graphql/mutations";
const client = generateClient();
export default function EntryUpdateForm(props) {
  const {
    id: idProp,
    entry: entryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Task: "",
    Text: "",
  };
  const [Task, setTask] = React.useState(initialValues.Task);
  const [Text, setText] = React.useState(initialValues.Text);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = entryRecord
      ? { ...initialValues, ...entryRecord }
      : initialValues;
    setTask(cleanValues.Task);
    setText(cleanValues.Text);
    setErrors({});
  };
  const [entryRecord, setEntryRecord] = React.useState(entryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEntry.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEntry
        : entryModelProp;
      setEntryRecord(record);
    };
    queryData();
  }, [idProp, entryModelProp]);
  React.useEffect(resetStateValues, [entryRecord]);
  const validations = {
    Task: [],
    Text: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Task: Task ?? null,
          Text: Text ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateEntry.replaceAll("__typename", ""),
            variables: {
              input: {
                id: entryRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EntryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Task"
        isRequired={false}
        isReadOnly={false}
        value={Task}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Task: value,
              Text,
            };
            const result = onChange(modelFields);
            value = result?.Task ?? value;
          }
          if (errors.Task?.hasError) {
            runValidationTasks("Task", value);
          }
          setTask(value);
        }}
        onBlur={() => runValidationTasks("Task", Task)}
        errorMessage={errors.Task?.errorMessage}
        hasError={errors.Task?.hasError}
        {...getOverrideProps(overrides, "Task")}
      ></TextField>
      <TextField
        label="Text"
        isRequired={false}
        isReadOnly={false}
        value={Text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Task,
              Text: value,
            };
            const result = onChange(modelFields);
            value = result?.Text ?? value;
          }
          if (errors.Text?.hasError) {
            runValidationTasks("Text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("Text", Text)}
        errorMessage={errors.Text?.errorMessage}
        hasError={errors.Text?.hasError}
        {...getOverrideProps(overrides, "Text")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || entryModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || entryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
