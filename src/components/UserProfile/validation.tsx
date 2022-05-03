import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.object().shape({
    street: yup.string().required(),
    city: yup.string().required(),
    zipcode: yup.string().required()
  }),
  phone: yup.string().required(),
  website: yup.string().required(),
  comment: yup.string()
})

