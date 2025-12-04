import styled from '@emotion/styled';
import { theme } from './Home.style'; // Reuse theme from Home

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.bgLight};
  font-family: ${theme.fonts.body};
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CreateNewsButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${theme.colors.blue};
  background-color: ${theme.colors.yellow};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  background-color: ${theme.colors.white};
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 90vh;
  overflow-y: auto;

  h2 {
    margin-top: 0;
    color: ${theme.colors.blue};
    font-size: 1.5rem;
    border-bottom: 2px solid ${theme.colors.green};
    padding-bottom: 0.5rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  font-size: 0.875rem;
`;

export const StyledInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${theme.colors.blue};
    box-shadow: 0 0 0 3px rgba(0, 39, 118, 0.1);
  }
`;

export const EditorContainer = styled.div`
  .quill {
    height: 300px;
    margin-bottom: 3rem;
  }

  .ql-editor {
    color: ${theme.colors.textPrimary};
    font-size: 1rem;
    line-height: 1.6;
    min-height: 250px;
  }
  
  .ql-toolbar {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    border-color: #d1d5db;
  }
  
  .ql-container {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    border-color: #d1d5db;
    background-color: white;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: ${theme.colors.textSecondary};
  background-color: transparent;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: ${theme.colors.textPrimary};
  }
`;

export const PublishButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${theme.colors.white};
  background-color: ${theme.colors.green};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #007a2e;
  }
`;

export const NewsCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  color: ${theme.colors.textPrimary};
  border-left: 4px solid ${theme.colors.blue};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.375rem;
    margin: 1rem 0;
  }
`;

export const NewsHeader = styled.div`
  margin-bottom: 1rem;
`;

export const NewsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.blue};
  margin: 0 0 0.5rem 0;
`;

export const NewsMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${theme.colors.textSecondary};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Tag = styled.span`
  background-color: #e0f2fe; /* Light blue */
  color: ${theme.colors.blue};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const NewsContent = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  color: ${theme.colors.textPrimary};
  
  p {
    margin-bottom: 1rem;
  }
  
  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  blockquote {
    border-left: 4px solid ${theme.colors.yellow};
    padding-left: 1rem;
    font-style: italic;
    color: ${theme.colors.textSecondary};
    margin: 1rem 0;
  }
`;
