import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";

import { Input } from "../input";
import { Select } from "../select";
import {
  document_validation,
  productor_name_validation,
  farm_name_validation,
  state_validation,
  city_validation,
  total_area_validation,
  agricultutal_area_validation,
  vegetation_area_validation,
  planted_crops_validation,
} from "../../utils/inputValidations";

import * as Styles from "./styles";

export const Form = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  console.log("WATCH", methods.watch());
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <Styles.Form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
      >
        <Styles.FormInputs>
          <Input {...document_validation} />
          <Input {...productor_name_validation} />
          <Input {...farm_name_validation} />
          <Select {...state_validation} />
          <Input {...city_validation} />
          <Input {...total_area_validation} />
          <Input {...agricultutal_area_validation} />
          <Input {...vegetation_area_validation} />
          <Select {...planted_crops_validation} />
        </Styles.FormInputs>
        <div>
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button onClick={onSubmit}>
            <GrMail />
            Submit Form
          </button>
        </div>
      </Styles.Form>
    </FormProvider>
  );
};
