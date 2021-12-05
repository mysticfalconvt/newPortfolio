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

export async function getStaticProps(context): Promise<{ props: props }> {
  console.log("getStaticProps");
  console.log(context);
  //sample blog data
  const blogs: Blog[] = [
    {
      title: "Blog Post 1",
      date: "2020-01-01",
      content: "This is the first blog post",
    },
    {
      title: "Blog Post 2",
      date: "2020-01-02",
      content: "This is the second blog post",
    },
  ];
  console.log(blogs);
  return { props: { blogs } };
}
