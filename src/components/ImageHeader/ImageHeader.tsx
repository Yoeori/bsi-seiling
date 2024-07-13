import Image from "next/image";
import styles from "./ImageHeader.module.css";
import { ReactNode } from "react";

interface ImageHeaderProps {
  src: string;
  alt: string;
  tiny?: boolean;
  children?: ReactNode;
}

export default function ImageHeader({ src, alt, tiny = false, children }: ImageHeaderProps) {
  return (
    <div className={styles.container} data-tiny={tiny}>
      <Image src={src} alt={alt} fill className={styles.image} />
      {children}
    </div>
  );
}