import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import registerImg from '../assets/img/1.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  min-height: calc(100vh - 140px);
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
`;

const Image = styled.img`
  width: 400px;
  max-width: 90vw;
  height: 550px;
  border-radius: 12px;
  box-shadow: 0 0 25px ${({ theme }) => theme.colors.neonGreen};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Form = styled.form`
  background: #111;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 0 25px ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: 'Orbitron', sans-serif;
    color: ${({ theme }) => theme.colors.neonGreen};
    text-align: center;
  }

  input, button {
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    font-family: inherit;
  }

  button {
    background: ${({ theme }) => theme.colors.neonGreen};
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.pink};
    }
  }
`;

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ بدون backend: مجرد تنقل وهمي
    navigate('/user/profile');
  };

  return (
    <>

      <Wrapper>
        <Image src={registerImg} alt="Register visual" />
        <Form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
          <button type="submit">Register</button>
          <p style={{ textAlign: 'center', color: '#888' }}>
            Already have an account? <a href="/login" style={{ color: '#0f0' }}>Login</a>
          </p>
        </Form>
      </Wrapper>
      
    </>
  );
}
