import { FC } from "react";

import styles from "./blogs.module.css";

const blogs: FC = ({ children }) => {
  return (
    <div className={styles.blogs}>
      <h2 className={styles.h2}>Blog Posts</h2>
      <h2>There are no Blog Posts ...Yet</h2>
    </div>
  );
};

export default blogs;
