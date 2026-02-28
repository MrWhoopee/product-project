'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <button
      className={styles.toggle}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className={styles.icon}>
        {isDark ? (
          <svg width="18" height="18" aria-hidden="true">
            <use href="/sprite.svg#sun" />
          </svg>
        ) : (
          <svg width="18" height="18" aria-hidden="true">
            <use href="/sprite.svg#moon" />
          </svg>
        )}
      </span>
      <span className={styles.text}>Change Theme</span>
    </button>
  );
}
