import { FC } from "react";
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";

import styles from "./layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
