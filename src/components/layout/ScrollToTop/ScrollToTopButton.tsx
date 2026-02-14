import { FC } from 'react';
import { useScrollToTop } from '@/hooks';
import './ScrollToTopButton.css';

export const ScrollToTopButton: FC = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="myBtn"
      className="scroll-to-top"
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      ↑
    </button>
  );
};
