import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from "../services/api"; // instância do axios

// ======= CONTAINERS GERAIS ======= //
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: #3b91cf;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 3rem;
  background-color: #3b91cf;
`;

const LeftSection = styled.div`
  flex: 1;
  color: white;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    max-width: 450px;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 2rem;
    max-width: 400px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const RegisterBox = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 2rem;
  width: 80%;
  max-width: 450px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: left;
`;

const RegisterTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.7rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #3b91cf;
  }
`;

const Select = styled.select`
  flex: 1;
  padding: 0.7rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #3b91cf;
  }
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #333;
  margin: 0.5rem 0 1rem;

  a {
    color: #3b91cf;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #009739;
  color: white;
  font-weight: bold;
  padding: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007f2f;
  }
`;

// ...imports e estilos permanecem iguais

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [sex, setSex] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!terms) {
      setError("You must accept the terms and conditions");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await api.post("/users", {
        firstName,
        lastName,
        email,
        password,
        cpf,
        phone,
        birthDate,
        sex,
      });

      setSuccess("Registration successful! You can now log in.");
      // navigate("/login"); // opcional
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <PageContainer>
      <Header />
      <Content>
        <LeftSection>
          <h1>Join this movement and help change Brazil!</h1>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
          </p>
        </LeftSection>

        <RightSection>
          <RegisterBox>
            <RegisterTitle>Register for Movimento Brasil Futuro</RegisterTitle>
            <Form onSubmit={handleRegister}>
              <Row>
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Row>

              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Input
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                type="date"
                placeholder="Birth Date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />

              <Select value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="" disabled>
                  Sex
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>

              <CheckboxRow>
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                I accept the <a href="#">Terms and Conditions</a>
              </CheckboxRow>

              <SubmitButton type="submit">Complete Registration</SubmitButton>

              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
            </Form>
          </RegisterBox>
        </RightSection>
      </Content>
      <Footer />
    </PageContainer>
  );
}
