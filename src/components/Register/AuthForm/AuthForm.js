import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';


function useValidation (value, validations) {
  const [textError, setTextError] = useState('');
	const [isEmpty, setIsEmpty] = useState(false);
	const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);

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
          const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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

	return {
    textError,
		isEmpty,
		minLengthError,
    maxLengthError,
    emailError,
    nameError,
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
  return nameInput.isChange && 
    (nameInput.isEmpty 
    || nameInput.minLengthError
    || nameInput.maxLengthError
    || nameInput.emailError
    || nameInput.nameError)
      ? 'block'
      : 'none';
}

function AuthForm () {
  const name = useInput('', {isEmpty: true, minLength: 3, maxLength: 30, isName: true});
  const email = useInput('', {isEmpty: true, isEmail: true});
	const password = useInput('', {isEmpty: true, minLength: 3, maxLength: 30});

  return (
  <section className="auth-form" aria-label="форма с полями ввода">
    <form className="auth-form__wrapper">
      <Switch>
        <Route path="/signup">
          <label className="auth-form__field">
            <span  className="auth-form__caption">
              Имя
            </span>
            <input className="auth-form__input"
              onChange={e => name.onChange(e)}
              value={name.value}
            ></input>
            <span className="auth-form__stroke-line"></span>

            <span
              className="auth-form__input-error" 
              style={{ display: displayError(name) }}
            >
              {name.textError}
            </span>
          </label>

          <label className="auth-form__field">
            <span  className="auth-form__caption">
              E-mail
            </span>
            <input className="auth-form__input"
              onChange={e => email.onChange(e)}
              value={email.value}
            ></input>
            <span className="auth-form__stroke-line"></span>

            <span className="auth-form__input-error" style={{ display: 'none' }}>Что-то пошло не так...</span>
          </label>

          <label className="auth-form__field">
            <span  className="auth-form__caption">
              Пароль
            </span>
            <input className="auth-form__input auth-form__input-error-data"
              onChange={e => password.onChange(e)}
              value={password.value}
            ></input>
            <span className="auth-form__stroke-line"></span>

            <span className="auth-form__input-error">Что-то пошло не так...</span>
          </label>
        </Route>

        <Route path="/signin">
          <label className="auth-form__field">
            <span  className="auth-form__caption">
              E-mail
            </span>
            <input className="auth-form__input"></input>
            <span className="auth-form__stroke-line"></span>

            <span className="auth-form__input-error" style={{ display: 'none' }}>Что-то пошло не так...</span>
          </label>

          <label className="auth-form__field auth-form__field_route-signin">
            <span  className="auth-form__caption">
              Пароль
            </span>
            <input className="auth-form__input"></input>
            <span className="auth-form__stroke-line"></span>

            <span className="auth-form__input-error" style={{ display: 'none' }}>Что-то пошло не так...</span>
          </label>
        </Route>
      </Switch>
    </form>
  </section>
  )
}

export default AuthForm;
