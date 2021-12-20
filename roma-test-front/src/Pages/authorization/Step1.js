import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PrimaryButton } from "./component/PrimaryButton";
import { MainContainer } from "./component/MainContainer";
import { Form } from "./component/Form";
import {Input} from "./component/Input";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

export const Step1 = ( ) => {
  const { setValues, data } = useData();
  const history = useHistory();
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "onBlur"
  })

  const onSubmit = (data) => {
    history.push("./step2");
    setValues(data);
  };

  return <MainContainer>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('firstName')}
           id="firstName" type="text"
           label="First Name"
           name="firstName"
           error={!!errors.firstName}
           helpText={errors?.firstName?.message}
        />
        <Input
          {...register('lastName')}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helpText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>

  </MainContainer>
}