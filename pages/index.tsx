import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import Header from "../components/header";
import styles from "../styles/Home.module.css";
import BlogTitle from "../components/blogTitle";

interface Entry {
  slug: string;
  title: string;
  description: string;
  date: string;
}

interface Entries {
  blogs: Entry[];
}

const Home: NextPage<{ entries: Entries }> = ({ entries }) => {
  console.log(entries.blogs);
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunter Simmons</title>
        <meta
          name="description"
          content="A blog written and maintained by Hunter Simmons about development in Rust"
        />
        <link rel="icon" href="/ferris.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.imgWrapper}>
            <Image
              src="/hunter_shaylee.png"
              width={350}
              height={350}
              quality={100}
              className={styles.img}
            />
          </div>
          <p className={styles.disclaimer}>
            Disclaimer - Everything I write here is my own opinion not anyone or
            any entity’s opinion
          </p>
        </div>
        <div className={styles.right}>
          <h3 className={styles.articles}>Articles</h3>
          {entries.blogs.map((blogEntry) => (
            <BlogTitle
              key={blogEntry.slug}
              slug={blogEntry.slug}
              title={blogEntry.title}
              description={blogEntry.description}
              date={blogEntry.date}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  let getUrl;
  if (process.env.NODE_ENV == "development") {
    getUrl = "http://localhost:3000";
  } else {
    getUrl = "https://homepage-7bah553nb-hwsimmons17.vercel.app";
  }
  const entries = await (await axios.get(`${getUrl}/api/hello`)).data;

  return {
    props: {
      entries,
    },
  };
}
