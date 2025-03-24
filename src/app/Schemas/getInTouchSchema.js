import * as yup from "yup";

export const getInTouchSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
  questionType: yup.string().required(),
  courseType: yup.string().required(),
});
