import * as yup from "yup";

export const customerSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  dob: yup.string().required()
});
