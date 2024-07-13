import styles from './AppShell.module.css';
import { ReactNode } from 'react';
import Image from "next/image";
import Navigation from '../Navigation/Navigation';

export default function AppShell({ children }: { children?: ReactNode }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Image src="/logo.svg" alt="BSI Seiling logo" width={50} height={50} className={styles.logo} />
        <Navigation />
      </header>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
} 