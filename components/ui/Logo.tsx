import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="GuardianChain Solutions home">
      <Image src="/images/brand/logo.png" alt="GuardianChain Solutions" width={275} height={35} className={styles.image} priority />
    </Link>
  );
}
