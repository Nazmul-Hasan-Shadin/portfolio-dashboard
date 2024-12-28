"use client";
import { Form } from "antd";
import React, { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const PForm = ({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}) => {
  const methods = useForm();

  const submit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log(data, "iam data");

    onSubmit(data);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(submit)}>{children}</Form>
    </FormProvider>
  );
};

export default PForm;
