// src/components/Header.jsx

import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom"; // <- import correto

// ======= ESTILOS ======= //
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #000000;
  padding: 0rem 1rem;
  margin-top: 1.5rem;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.9rem;
  color: #000;
`;

const LogoTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

const LineTop = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const LineBottom = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  padding-right: 2rem;
  margin-top: 1.5rem;
`;

const TopRow = styled.div`
  display: flex;
  gap: 0.3rem;
  font-weight: bold;
  font-size: 0.95rem;
`;

const Separator = styled.span`
  color: #007bff;
`;

const LoginLink = styled.span`
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
`;

const RegisterLink = styled.span`
  color: #007bff;
  cursor: pointer;
`;

const Topics = styled.span`
  font-size: 0.9rem;
  color: #000;
`;

// ======= COMPONENTE ======= //
export default function Header() {
  const navigate = useNavigate(); // <- chamando o hook corretamente

  return (
    <HeaderContainer>
      <BottomRow>
        {/* Lado esquerdo: logo + título */}
        <LogoTextContainer>
          <LogoImage src={logo} alt="Logo Movimento Brasil Futuro" />
          <LogoText>
            <LineTop>Movimento</LineTop>
            <LineBottom>Brasil Futuro</LineBottom>
          </LogoText>
        </LogoTextContainer>

        {/* Lado direito: login/registre-se + tópicos */}
        <RightColumn>
          <TopRow>
            <LoginLink onClick={() => navigate("/login")}>Login</LoginLink>
            <Separator>|</Separator>
            <RegisterLink
              onClick={() => navigate("/register")} // <- agora funciona
            >
              Registre-se
            </RegisterLink>
          </TopRow>
          <Topics>
            Estatuto | Estratégia | Fórum | Mercado | Colunistas | Parcerias
          </Topics>
        </RightColumn>
      </BottomRow>
    </HeaderContainer>
  );
}
