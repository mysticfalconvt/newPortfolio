import { Theme, useTheme } from "@/hooks/use-theme";

import styles from "./header.module.css";

const Header = (): JSX.Element => {
  const { setTheme, isDarkTheme } = useTheme();

  return (
    <header className={styles.header}>
      <h3 className={styles.topTitle}>
        <span className={styles.name}>Robert </span>Boskind
      </h3>
      <h1 className={styles.title}>Developer & Teacher</h1>
      <p className={styles.description}>
        Full-Stack Software Engineer with a passion for{" "}
        <code className={styles.code}>Teaching</code>,{" and "}
        <code className={styles.code}>Learning</code>. I have turned every job
        that I have ever had into a{" "}
        <code className={styles.code}>software project</code>.
      </p>
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
