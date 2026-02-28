'use client';

import styles from './BurgerMenu.module.css';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export default function BurgerMenu({ isOpen, onClick }: Props) {
  return (
    <button
      className={`${styles.burger} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
}
