import type { NextPage } from "next";
import Button from "@/components/atoms/button";
import Feature, { FeatureProps } from "@/components/molecules/feature";
import styles from "../styles/index.module.css";
import Title from "@/components/atoms/title";

const features: FeatureProps[] = [
  {
    title: "Full-Stack Developer",
    description:
      "I build applications from idea to production serving many daily users.",
    link: "https://github.com/mysticfalconvt",
  },
  {
    title: "School Dashboard Application",
    description:
      "I built this application to help teachers, students, and parents manage their school experience.",
    link: "https://boskind.tech/blog/school-dashboard-mk-ii",
  },
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
  {
    title: "Gatsby.js",
    description:
      "Static site generator to build fast, secure, and powerful websites using a React-based framework.",
    link: "https://boskind.tech",
  },
  {
    title: "GraphQL",
    description:
      "A query language for APIs and a runtime for fulfilling those queries with your existing data.",
    link: "https://graphql.org/",
  },
  {
    title: "React-Query",
    description:
      'Fetch, cache and update data in your React and React Native applications all without touching any "global state".',
    link: "https://react-query.tanstack.com/",
  },
  {
    title: "Styled Components",
    description:
      "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress",
    link: "https://styled-components.com/",
  },
  {
    title: "Tailwind",
    description: "A utility-first CSS framework packed with classes.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "Netlify",
    description: "A fully-managed platform for deploying static sites.",
    link: "https://www.netlify.com/",
  },
  {
    title: "Linode",
    description: "A cloud platform for hosting websites and apps.",
    link: "https://www.linode.com/",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.copy}>
        <div className={styles.copyInner}>
          <a href="/Resume Robert Boskind.pdf">
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
