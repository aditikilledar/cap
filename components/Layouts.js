import React from "react";
import styles from '../styles/Layouts.module.css'
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()}</p>
        {/* <Image src="/pes.png" alt="Next.js" height={50} width={50} /> */}
      </footer>
    </main>
  );
}

export default Layout;