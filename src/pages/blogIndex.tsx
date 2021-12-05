import { type } from "os";
import { FC } from "react";
import { NextPage } from "next";
import client from "client";
import styles from "../styles/index.module.css";
import Feature from "@/components/molecules/feature";
import Title from "@/components/atoms/title";

const blogs: NextPage<props> = (props) => {
  const { blogs } = props;
  return (
    <div>
      <div className={styles.copy}>
        <Title title="Blog Posts" description="A collection of my blog posts" />
      </div>

      <section className={styles.features}>
        {blogs.map((blog) => (
          <div className={styles.feature} key={blog.slug}>
            <Feature
              key={blog.slug}
              title={blog.title}
              description={new Date(blog.date).toLocaleDateString()}
              link={`https://boskind.tech/blog/${blog.slug}`}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default blogs;

type Blog = {
  title: string;
  date: string;
  content: string;
  slug: string;
};

type props = {
  blogs: Blog[];
};

export async function getStaticProps(context): Promise<{ props: props }> {
  //get blog data from Sanity
  const result = await client.fetch(
    `*[_type == "post"]{
      title,
      slug,
      publishedAt,
      mainImage,
     
    }`
  );
  const blogsRaw = result.map((blog) => {
    return {
      title: blog.title || "",
      date: blog.publishedAt || "",
      image: blog.mainImage || "",
      slug: blog.slug?.current || "",
    };
  });
  //sort blogs by date
  const blogs = blogsRaw.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return { props: { blogs } };
}
