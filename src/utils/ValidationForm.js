import React, {useState, useEffect} from 'react';

function useValidation (value, validations) {
  const [textError, setTextError] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  function switchValidation(isValidation) {
    let isEmpty = false;
    let minLength = false;
    let maxLength = false;
    let isEmail = false;
    let isName = false;

    if (isValidation === 'isEmpty') isEmpty = true;
    else if (isValidation === 'minLength') minLength = true;
    else if (isValidation === 'maxLength') maxLength  = true;
    else if (isValidation === 'isEmail') isEmail = true;
    else if (isValidation === 'isName') isName = true;

    setIsEmpty(isEmpty);
    setMinLengthError(minLength);
    setMaxLengthError(maxLength);
    setEmailError(isEmail);
    setNameError(isName);
  }

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length > 0 && value.length < validations[validation]) {
            switchValidation('minLength');

            setTextError('Минимальная длинна поля 3 символа');
          } else {
            setMinLengthError(false);
          }
          break;
        case 'maxLength':
          if (value.length > validations[validation]) {
            switchValidation('maxLength');

            setTextError('Максимальная длинна поля 30 символов');
          } else {
            setMaxLengthError(false);
          }
          break;
        case 'isEmpty':
          if (value.trim().length === 0) {
            switchValidation('isEmpty');
            
            setTextError('Поле не должно быть пустым');
          } else {
            setIsEmpty(false);
          }
          break;
        case 'isEmail':
          const regexEmail = /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;
          if ( value.trim().length !== 0 && !regexEmail.test(String(value).toLowerCase()) ) {
            switchValidation('isEmail');

            setTextError('Невалидный Email');
          } else {
            setEmailError(false);
          }
        break;
        case 'isName':
          const regexName = /^[a-zA-ZА-я\s-]*$/u;
          if (!regexName.test(String(value).toLowerCase()) ) {
            switchValidation('isName');

            setTextError('Невалидное Имя');
          } else {
            setNameError(false);
          }
        break;
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || emailError || nameError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [minLengthError, maxLengthError, isEmpty, emailError, nameError])

  return {
    textError,
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    nameError,
    inputValid,
  }
}

function useInput (initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [isChange, setIsChange] = useState(false);
  const valid = useValidation(value, validations);

  function onChange (e) {
    setValue(e.target.value);
    setIsChange(true);
  }
  return {
    value,
    isChange,
    onChange,
    ...valid,
  }
}

function displayError(nameInput) {
  let isTextError = 'none';
  let isUnderlinError = '';
  let isValueError = '';

  if (nameInput.isChange && 
    (nameInput.isEmpty 
    || nameInput.minLengthError
    || nameInput.maxLengthError
    || nameInput.emailError
    || nameInput.nameError)) 
  {
    isTextError = 'block';
    isUnderlinError = 'auth-form__stroke-line-error-data';
    isValueError = 'auth-form__input-error-data';
  }

  return {
    isTextError,
    isUnderlinError,
    isValueError,
  }
}


export {useInput, displayError};
