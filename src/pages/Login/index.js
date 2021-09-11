import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import logo from '../../img/logo.png';
import background from '../../img/bg-login3.png';
import ButtonDefault from '../../components/ButtonDefault';
import { loginRedirection, validationInputs } from '../../services';
import ErrorMessage from '../../components/ErrorMessage';
import './login.scss'
import Loader from '../../components/Loader';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const url = 'https://lab-api-bq.herokuapp.com/auth';

  const history = useHistory();
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errors, setErrors] = useState({
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    setErrorEmail(false);
    setErrorPassword(false);
    setErrors({
    })

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorsObject = validationInputs(values);
    setErrors(errorsObject);

    if (errorsObject.userEmail) {
      setErrorEmail(true);
    }

    if (errorsObject.userPassword) {
      setErrorPassword(true);
    }

    if (
      Object.keys(errorsObject).length === 0 &&
      errorsObject.constructor === Object
    ) {
      setLoading(true);
      const loginData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      };

      fetch(url, loginData)
        .then((response) => response.json())
        .then((userData) => {
          // eslint-disable-next-line eqeqeq
          if (userData.code == '400') {
            throw new Error();
          } else {
            localStorage.setItem('name', userData.name);
            localStorage.setItem('token', userData.token);
            localStorage.setItem('role', userData.role);
            return userData.role;
          }
        })
        .then((role) => {
          setTimeout(() => {
            loginRedirection(role, history)
          },
            1000)
        })
        .catch(() => {
          const userNotFound = {
            userPassword: 'Usuário e/ou senha incorreto(s).',
          };
          setLoading(false);
          setErrors(userNotFound);
          setErrorEmail(true);
          setErrorPassword(true);
        });
    }
  };

  return (
    <>
      {loading ? <Loader /> : false}
      <div className="container-bg">
        <img src={background} alt="background"></img>
      </div>

      <section className="container-login">
        <img src={logo} className="logo" alt="logo"></img>
        <h2>LOGIN</h2>
        <div className="form-wrapper">
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                className={` ${errorEmail ? 'is-invalid' : ''}`}
                type="email"
                placeholder="Email"
                onChange={onChange}
                value={values.email}
                name="email"
                required

              />

            </Form.Group>
            {errors.userEmail && (
              <ErrorMessage>{errors.userEmail}</ErrorMessage>
            )}

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                className={` ${errorPassword ? 'is-invalid' : ''}`}
                type="password"
                placeholder="Senha"
                onChange={onChange}
                value={values.password}
                name="password"
                required
              />

            </Form.Group>
            {errors.userPassword && (
              <ErrorMessage>{errors.userPassword}</ErrorMessage>
            )}
            <div>
              <ButtonDefault
                id="btn-signin"
                className="btn-default margin-bottom-2"

              >
                ENTRAR
              </ButtonDefault>
            </div>
            <div className=" link-register">
              <span className="text">PRIMEIRO ACESSO?</span>
              <a href="/cadastro" >
                CADASTRE-SE
              </a>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
