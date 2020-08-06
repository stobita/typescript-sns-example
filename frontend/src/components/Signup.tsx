import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
      .post('http://localhost:3000/auth/signup', {
        username,
        password,
      })
      .then(() => {
        setUsername('');
        setPassword('');
      })
      .catch((err) => {
        console.error(err);
      });
    e.preventDefault();
  };
  return (
    <Wrapper>
      <h2>Signup</h2>
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
      <Link to="/login">login</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
`;

const Item = styled.div``;

const Input = styled.input``;
