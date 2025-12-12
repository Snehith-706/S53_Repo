import { useState } from "react";

export default function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed → ${name}: ${value}`);

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", values);
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
}
