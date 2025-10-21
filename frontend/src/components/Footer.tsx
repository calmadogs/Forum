import styled from "@emotion/styled";
import logo from ".././assets/logo.png"; // Importando a imagem corretamente

// ======= ESTILOS ======= //
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  font-size: 0.85rem;
  color: #000;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem; /* afastar da parte de baixo */
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-weight: 500;

  a {
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterCopyright = styled.div`
  font-weight: 400;
`;

// ======= COMPONENTE ======= //
export default function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <img
          src={logo} // Usando a imagem importada
          alt="Logo Movimento Brasil Futuro"
          width={40}
          height={40}
        />
        <FooterCopyright>
          © 2017 MOVIMENTO BRASIL FUTURO. Todos os direitos reservados.
        </FooterCopyright>
      </FooterLeft>

      <FooterLinks>
        <a href="#">Dê sua Opinião</a>
        <a href="#">Contato</a>
        <a href="#">Política de Privacidade</a>
      </FooterLinks>
    </FooterContainer>
  );
}
