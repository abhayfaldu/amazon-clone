import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = (e) => {
    e.preventDefault();
  }

  const register = e => {
    e.preventDefault();
  }
  return (
    <div className={styles.login}>
      <Link to='/'>
        <img
          className={styles.login__logo}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='amazon_logo'
        />
      </Link>
      <div className={styles.login__container}>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signin}
            className={styles.login__signInButton}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE's conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className={styles.login__registerButton}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
