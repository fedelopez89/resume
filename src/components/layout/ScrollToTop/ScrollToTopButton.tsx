import { FC } from 'react';
import styled from 'styled-components';
import { useScrollToTop } from '@/hooks';

const StyledButton = styled.button`
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  font-size: 18px;
  width: 50px;
  height: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }
`;

export const ScrollToTopButton: FC = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <StyledButton
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      ↑
    </StyledButton>
  );
};
