import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const theme = {
  colors: {
    blue: "#3b91cf",
    green: "#009739",
    grayLight: "#f3f4f6",
    grayText: "#6B7280",
    white: "#fff",
    shadow: "rgba(0, 0, 0, 0.1)",
  },
  fonts: {
    body: "'Inter', sans-serif",
  },
};

// ====== LAYOUT GERAL ======
const Body = styled.div`
  font-family: ${theme.fonts.body};
  background-color: ${theme.colors.grayLight};
  min-height: 100vh;
  overflow-x: hidden;
`;

// ====== HERO SECTION ======
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  padding-right: 4rem;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);
  margin: 0;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  max-width: 600px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 500px;
  margin-bottom: 1.5rem;
`;

const HeroButton = styled.button`
  background-color: #009739; /* verde do SubmitButton */
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem; /* mesmas medidas do original */
  border: none;
  border-radius: 8px; /* mantém o arredondamento do original */
  cursor: pointer;
  font-size: 1rem;
  width: fit-content; /* mantém o tamanho conforme o conteúdo */
  transition: all 0.3s ease; /* transição suave como o SubmitButton */

  /* remove contorno padrão */
  outline: none;

  &:hover {
    background-color: #007f2f; /* hover igual ao SubmitButton */
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;


const HeroQuote = styled.p`
  bottom: 2rem;
  right: 2rem;
  font-weight: bold;
  font-size: 1.25rem;
  text-align: right;
  white-space: nowrap;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// ====== CONTEÚDO ======
const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

// ====== CONTEÚDO DO COLUNISTA ======
const ArticleContent = styled.div`
  flex: 3;
  background: ${theme.colors.white};
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px ${theme.colors.shadow};
  padding: 2rem;
  line-height: 1.6;
  color: #333;
`;

const ArticleHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    color: ${theme.colors.grayText};
    margin-bottom: 1.5rem;
  }
`;

const ArticleBody = styled.div`
  font-size: 1rem;
  color: ${theme.colors.grayText};
  text-align: justify;
`;

// ====== SIDEBAR ======
const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SidebarSection = styled.div`
  background: ${theme.colors.white};
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 6px ${theme.colors.shadow};
`;

const SidebarTitle = styled.h4`
  margin-bottom: 1rem;
`;

const SidebarItem = styled.div`
  margin-bottom: 1rem;
`;

const SidebarImage = styled.div`
  background-color: ${theme.colors.grayLight};
  width: 100%;
  height: 120px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  background-size: cover;
  background-position: center;
`;

const SidebarText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const SidebarDate = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.grayText};
`;

export default function Colunistas() {
  const dummyNoticias = [
    {
      img: "https://images.unsplash.com/photo-1581091215367-59ab6b9da8f2",
      text: "Notícia sobre o meio ambiente",
      date: "10/10/2025",
    },
    {
      img: "https://images.unsplash.com/photo-1610878180933-1234567890ab",
      text: "Nova lei de proteção ambiental",
      date: "15/10/2025",
    },
  ];

  const dummyArtigos = [
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      text: "A importância da sustentabilidade",
      author: "Maria Souza",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      text: "Cuidando do planeta",
      author: "Carlos Lima",
    },
  ];

  const navigate = useNavigate();

  return (
    <Body>
      <Header />

     <HeroSection>
        <HeroTitle>Bem-vindo as Estrategias</HeroTitle>
        <HeroSubtitle>
          Conheça especialistas que compartilham suas visões sobre o mundo, a
          natureza e o futuro.
        </HeroSubtitle>
        <HeroButton onClick={() => navigate("/register")}>Registre-se</HeroButton>
        <HeroQuote>ACREDITE, DEPENDE DE NÓS!</HeroQuote>
      </HeroSection>

      <Container>
        <ArticleContent>
          <ArticleHeader>
            <h1>O Futuro do Brasil Está nas Nossas Escolhas</h1>
            <h2>Política participativa e consciência cidadã como caminho para um país mais justo</h2>
          </ArticleHeader>

          <ArticleBody>
            <p>
              O Brasil vive um momento decisivo. Nunca se falou tanto sobre política, mas
              também nunca foi tão necessário resgatar o verdadeiro significado dessa
              palavra: a arte de construir o bem comum. O debate político precisa deixar de
              ser uma arena de conflitos e passar a ser um espaço de diálogo, ideias e
              responsabilidade coletiva. Um país democrático se fortalece quando cada
              cidadão entende que sua voz importa e que a mudança começa nas pequenas
              atitudes do dia a dia.
            </p>

            <p>
              A política não deve ser tratada como algo distante ou restrito a quem ocupa
              cargos públicos. Ela está presente nas decisões que tomamos em nossas
              comunidades, nas escolas, nos locais de trabalho e até nas redes sociais. Ao
              escolhermos respeitar opiniões diferentes, contribuir para a solução de
              problemas locais e participar de debates de forma construtiva, estamos
              exercendo cidadania ativa e fortalecendo a democracia.
            </p>

            <p>
              O futuro do Brasil depende de uma nova cultura política, baseada em
              transparência, ética e compromisso com o interesse coletivo. Precisamos de
              lideranças que ouçam mais e prometam menos; que ajam com propósito e não com
              conveniência. Mas, acima de tudo, precisamos de uma população disposta a
              fiscalizar, questionar e propor caminhos. A verdadeira transformação começa
              quando o cidadão deixa de ser espectador e passa a ser protagonista.
            </p>

            <p>
              Vivemos em uma era em que a informação circula em segundos, mas o desafio é
              transformar dados em conhecimento e indignação em ação. A educação política
              deve ser um pilar essencial na formação de novos cidadãos, ensinando desde
              cedo o valor do voto consciente, da empatia e da responsabilidade social. É
              preciso compreender que democracia não é apenas um direito — é também um
              dever contínuo de participação.
            </p>

            <p>
              Ao longo da história, o Brasil mostrou uma incrível capacidade de se reinventar.
              Superamos crises, desigualdades e momentos de incerteza. Essa resiliência é a
              prova de que, quando o povo se une em torno de um propósito comum, somos
              capazes de mudar o rumo da nação. O desafio agora é canalizar essa energia
              para construir políticas públicas mais humanas, sustentáveis e inclusivas.
            </p>

            <p>
              É hora de deixar de lado o discurso da divisão e abraçar o diálogo como
              ferramenta de progresso. Um país não avança quando seus cidadãos se tratam
              como inimigos, mas quando reconhecem que pensam diferente porque têm
              experiências diferentes — e que essa diversidade é uma força, não uma fraqueza.
              Debater ideias é saudável; destruir pontes não.
            </p>

            <p>
              O Brasil do futuro será aquele em que cada pessoa entender que fazer política
              é cuidar do outro, é agir com empatia, é defender o que é justo. Não há
              progresso sem participação. Não há justiça sem escuta. Não há democracia sem
              diálogo. E, acima de tudo, não há mudança sem esperança.
            </p>

            <p>
              Acredite: depende de nós. Cada gesto, cada palavra e cada escolha
              cotidiana constrói o país que deixaremos para as próximas gerações.
              O futuro começa quando decidimos, juntos, fazer diferente.
            </p>
          </ArticleBody>
        </ArticleContent>



        <Sidebar>
          <SidebarSection>
            <SidebarTitle>Notícias</SidebarTitle>
            {dummyNoticias.map((item, idx) => (
              <SidebarItem key={idx}>
                <SidebarImage
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <SidebarText>{item.text}</SidebarText>
                <SidebarDate>{item.date}</SidebarDate>
              </SidebarItem>
            ))}
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Artigos</SidebarTitle>
            {dummyArtigos.map((item, idx) => (
              <SidebarItem key={idx}>
                <SidebarImage
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <SidebarText>{item.text}</SidebarText>
                <SidebarDate>Autor: {item.author}</SidebarDate>
              </SidebarItem>
            ))}
          </SidebarSection>
        </Sidebar>
      </Container>
    </Body>
  );
}
