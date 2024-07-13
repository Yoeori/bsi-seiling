import styles from './AppShell.module.css';
import { ReactNode } from 'react';
import Image from "next/image";
import Navigation from '../Navigation/Navigation';
import Link from 'next/link';

export default function AppShell({ children }: { children?: ReactNode }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link href="/" style={{height: 50, width: 50, position: "relative"}}>
          <Image src="/logo.svg" alt="BSI Seiling logo" fill className={styles.logo} />
        </Link>
        <Navigation />
      </header>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
} 