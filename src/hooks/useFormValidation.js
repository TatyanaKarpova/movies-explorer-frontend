import { useCallback, useState } from "react";

function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  function handleInputChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (
      newValues = {},
      newErrors = {},
      newIsValid = false,
      successMessage = "",
      errorMessage = ""
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setSuccessMessage(successMessage);
      setErrorMessage(errorMessage);
    },
    [setValues, setErrors, setIsValid, setSuccessMessage, setErrorMessage]
  );

  return {
    values,
    setValues,
    errors,
    isValid,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    handleInputChange,
    resetForm,
  };
}

export default useFormValidation;
