import { Theme, useTheme } from "@/hooks/use-theme";

import styles from "./title.module.css";

export interface TitleProps {
  title: string;
  description: string;
}

const Title = (props: TitleProps): JSX.Element => {
  const { title, description } = props;
  return (
    <div className={styles.header}>
      <h2 className={styles.topTitle}>
        <span className={styles.title}>{title}</span>
      </h2>
      <h3 className={styles.topTitle}>{description}</h3>
    </div>
  );
};

export default Title;
