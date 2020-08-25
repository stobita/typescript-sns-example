import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsSigned, setToken } = useContext(UserContext);
  const history = useHistory();
  const handleOnChangeUsername = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUsername(e.target.value);
  };
  const handleOnChangePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword(e.target.value);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    axios
      .post('http://localhost:3000/auth/login', {
        username,
        password,
      })
      .then((res) => {
        setUsername('');
        setPassword('');
        setIsSigned(true);
        setToken(res.data.access_token);
        history.push('/');
      })
      .catch((err) => {
        console.error(err);
      });
    e.preventDefault();
  };
  return (
    <Wrapper>
      <h2>Login</h2>
      <form action="" onSubmit={handleOnSubmit}>
        <Item>
          <Input
            type="text"
            onChange={handleOnChangeUsername}
            value={username}
          />
        </Item>
        <Item>
          <Input
            type="password"
            onChange={handleOnChangePassword}
            value={password}
          />
        </Item>
        <button>login</button>
      </form>
      <Link to="/signup">signup</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
`;

const Item = styled.div``;

const Input = styled.input``;
