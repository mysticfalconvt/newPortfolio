import { Theme, useTheme } from "@/hooks/use-theme";
import { useRouter } from "next/dist/client/router";

import styles from "./header.module.css";

const Header = (): JSX.Element => {
  const { setTheme, isDarkTheme } = useTheme();
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <header className={styles.header}>
      <h3 className={styles.topTitle}>
        <span className={styles.name}>Robert </span>Boskind
      </h3>
      <h1 className={styles.title}>Developer & Teacher</h1>
      {isHome && <p className={styles.description}>
        Full-Stack Software Engineer with a passion for{" "}
        <code className={styles.code}>Teaching</code>,{" and "}
        <code className={styles.code}>Learning</code>. I have turned every job
        that I have ever had into a{" "}
        <code className={styles.code}>software project</code>. My lastest
        project is the school dashboard website that I recently rebuilt from the
        ground up. This project is a full-stack web application that allows
        teachers, students, and parents to manage everything about their school
        experience. The <code className={styles.code}>Front-End</code> is built
        with React, Next.js, Styled Components, React-Query, and Chart.js. The{" "}
        <code className={styles.code}>Back-End</code> is built using Node.js,
        Keystone.js, Express, MongoDB, and GraphQL. This is{" "}
        <code className={styles.code}>hosted</code> using Linode and Netlify.
      </p>}
      <button
        className={styles.themeButton}
        onClick={() => setTheme(isDarkTheme ? Theme.light : Theme.dark)}
      >
        <span className={styles.themeButtonEmoji}>
          {isDarkTheme ? `☀️` : `🌚`}
        </span>
      </button>
    </header>
  );
};

export default Header;
