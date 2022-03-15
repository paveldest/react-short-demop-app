import {object, string} from "yup";

const schema = () => {
  return object().shape({
    email:  string().trim().email("This field is required").required("This field is required"),
    password: string()
      .trim()
      .min(1, "This field is required")
      .required("This field is required"),
  });
};

export default schema;
