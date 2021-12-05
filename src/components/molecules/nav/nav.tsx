import { Theme, useTheme } from "@/hooks/use-theme";
import { useRouter } from "next/dist/client/router";
import { FaHome, FaMicroblog, FaGithub } from "react-icons/fa";
import styles from "./nav.module.css";
import Link from "next/link";
import Head from "next/head";

const Nav = (): JSX.Element => {
  const { setTheme, isDarkTheme } = useTheme();
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <Head>
        <title>Robert Boskind - Teacher / Developer</title>
        <meta
          name="description"
          content="Developer Portfolio for Robert Boskind"
        />
        <link rel="icon" href="/Wheel-icon.svg" />
      </Head>
      <nav className={styles.nav}>
        <NavIcon icon={<FaHome size="30" />} text="Home" link="/" />
        <NavIcon
          icon={<FaMicroblog size="30" />}
          text="Blog Posts"
          link="/blogIndex"
        />
        <NavIcon
          icon={<FaGithub size="30" />}
          text="Github Repos"
          link="/github"
        />
      </nav>
    </>
  );
};

const NavIcon = ({ icon, text = "tooltip 💡", link }) => (
  <Link href={link} passHref>
    <div className={styles.iconGroup}>
      {icon}
      <span className={styles.iconTooltip}>{text}</span>
    </div>
  </Link>
);

export default Nav;
