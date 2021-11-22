import { Theme, useTheme } from "@/hooks/use-theme";
import { useRouter } from "next/dist/client/router";
import { FaHome, FaMicroblog } from 'react-icons/fa';
import styles from "./nav.module.css";
import Link from "next/link";

const Nav = (): JSX.Element => {
  const { setTheme, isDarkTheme } = useTheme();
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav className={styles.nav}>
      <NavIcon icon={<FaHome size="30" />} text="Home" link="/" />
      <NavIcon icon={<FaMicroblog size="30" />} text="Blog Posts" link="/blog" />
    </nav>
  );
};

const NavIcon = ({ icon, text = 'tooltip 💡', link }) => (
  <Link href={link} passHref>
    <div className={styles.iconGroup} >
      {icon}
      <span className={styles.iconTooltip} >
        {text}
      </span >
    </div >
  </Link>
);


export default Nav;
