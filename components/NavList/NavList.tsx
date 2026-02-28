import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './NavList.module.css';

interface Props {
  onLinkClick?: () => void;
}

export default function NavList({ onLinkClick }: Props) {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href="/" className={styles.navLink} onClick={onLinkClick}>
          Home
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/products" className={styles.navLink} onClick={onLinkClick}>
          Products
        </Link>
      </li>
      <li className={styles.navItem}>
        <ThemeToggle />
      </li>
    </ul>
  );
}
