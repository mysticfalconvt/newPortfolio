import { type } from "os";
import { FC } from "react";
import { NextPage } from "next";
import client from "client";
import styles from "./blogs.module.css";

const blogs: NextPage<props> = (props) => {
  console.log(props);
  return (
    <div>
      <h2 className={styles.h2}>Blog Posts</h2>
      <h2>There are no Blog Posts ...Yet</h2>
    </div>
  );
};

export default blogs;

type Blog = {
  title: string;
  date: string;
  content: string;
};

type props = {
  blogs: Blog[];
};
