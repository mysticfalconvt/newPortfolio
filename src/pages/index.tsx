import type { NextPage } from "next";
import Head from "next/head";
import Button from "@/components/atoms/button";
import Feature, { FeatureProps } from "@/components/molecules/feature";

import styles from "./index.module.css";
import Title from "@/components/atoms/title";

const features: FeatureProps[] = [
  {
    title: "Math Teacher",
    description: "Teaching 8th grade math with a flare for making and code.",
    link: "https://boskind.tech/blog/tinkercad-in-math-class",
  },
  {
    title: "Coding Club",
    description:
      "Supervising a group of enthusiastic middle-schoolers creating great projects using Python or Javascript",
    link: "https://textbasedstarter-1.grimgarbage.repl.co/",
  },
  {
    title: "Next.js",
    description:
      "Best developer experience with all the features you need for production: hybrid static & server rendering",
    link: "https://nextjs.org/",
  },
  {
    title: "React.js",
    description: "JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
  },
  {
    title: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "Tailwind with JIT",
    description: "A utility-first CSS framework packed with classes.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Dark Mode",
    description: "Dark theme support for CSS-Modules and Tailwind.",
    link: "https://tailwindcss.com/docs/dark-mode",
  },
  {
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    link: "https://nodejs.org/",
  },
  {
    title: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
    link: "https://expressjs.com/",
  },
  {
    title: "MongoDB",
    description: "NoSQL database with a JSON-like document schema.",
    link: "https://www.mongodb.com/",
  },
];

const Home: NextPage = () => {
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
      <section className={styles.copy}>
        <div className={styles.copyInner}>
          <a href="/Resume.pdf">
            <Button>View Resume</Button>
          </a>
        </div>
        <Title title="Experience" description="Skills and Technologies"></Title>
        <div className={styles.copyInner}>
          <a href="https://github.com/mysticfalconvt">
            <Button>Visit on Github</Button>
          </a>
        </div>
      </section>
      <section className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feature}>
            <Feature {...f} />
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
