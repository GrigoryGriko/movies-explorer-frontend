import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';


const useValidation = (value, validations) => {
	const [isEmpty, setIsEmpty] = useState(false);
	const [minLengthError, setMinLengthError] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          console.log('minLength ' + minLengthError);
					break;
				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true);
					break;
			}
		}
	}, [value])

	return {
		isEmpty,
		minLengthError,
	}
}

const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue);
  const [isChange, setIsChange] = useState(false);
	const valid = useValidation(value, validations);

	const onChange = (e) => {
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

const AuthForm = () => {
  const name = useInput('', {isEmpty: true, minLength: 3});
  const email = useInput('', {isEmpty: true, minLength: 3});
	const password = useInput('', {isEmpty: true, minLength: 3});

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
              style={
                (name.isChange && (name.isEmpty || name.minLengthError)) 
                ? { display: 'block' } 
                : { display: 'none' }
              }
            >
              Что-то пошло не так...
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
