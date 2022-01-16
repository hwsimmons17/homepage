import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import { getAllPostsData } from "../../lib/posts";
import styles from "../../styles/Blog.module.css";

const IntroToBlog: NextPage = () => {
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
        <h1>Introduction to My Blog</h1>
        <h4>
          An overview of the goals of this blog and what I am looking to
          accomplish through writing and publishing this blog
        </h4>
        <h5>Jan 17, 2021</h5>

        <div className={styles.body}>
          <p>
            I have decided to start blogging to document my journey in the Rust
            ecosystem and in development in general. I recently came upon a
            website called{" "}
            <a href="https://this-week-in-rust.org/">This Week in Rust</a>
            . In this, there is a weekly newsletter of sorts documenting
            interesting and important thoughts in the Rust community. <br />
            <br />
            My goal is that someday, an article I write for this blog will be
            featured in{" "}
            <a href="https://this-week-in-rust.org/">This Week in Rust</a>.
            <br /> <br />
            An additional goal I have for this blog is to document the learning
            I have made in Rust and in development. I hope that maybe by sharing
            my knowledge, someone can learn from my mistakes and that I can gain
            a deeper understanding of Rust through teaching.
          </p>
          <h2>About Me</h2>
          <p>
            I was born and raised in Arlington, VA. Because everyone around me
            was involved in politics, in high school I thought that was what I
            wanted to do with myself. <br />
            <br />
            In college, I studied economics and math, and gravitated towards
            finance. I thought that being an investment banker would make me
            happy. Before I graduated college I had worked with multiple private
            equity firms, but realized that wasn&apos;t what I wanted to do.
            <br />
            <br />
            Being the ambitious kid I was, I couldn&apos;t sit still when I had
            free time, so in my off time, I began learning how to code. I
            started out learning CSS and HTML to code basic website designs,
            then moved into JS to add functionality to those websites. I then
            realized that my little websites would need a backend and quikcly
            learned Node.JS as well.
            <br />
            <br />
            After becoming comforable with Node.JS, I began to grow restless.
            When my friend and now co-founder told me about the{" "}
            <a href="https://solana.com/">Solana</a> blockchain, I began getting
            sucked into the black-hole that is crypto.
            <br />
            <br />I learned how to code smart contracts in{" "}
            <a href="https://solana.com/">Solana</a> using the{" "}
            <a href="https://book.anchor-lang.com/">Anchor</a> framework to code
            smart contracts in Rust. I loved writing smart contracts so much, I
            even got a job working for an NFT project, writing smart contracts
            for them.
            <br />
            <br /> Currently I am the co-founder of a crypto startup. Our tech
            stack includes an iOS app, a Rust backend, and smart contracts built
            on the <a href="https://solana.com/">Solana</a> blockchain, written
            in Rust. Needless to say, I write a lot of Rust Code.
            <br />
            <br />
            As I write code and learn more about the intricacies of Rust, I am
            looking forward to sharing my knowledge with you.
          </p>
        </div>
        <div className={styles.disclaimer}>
          Disclaimer - Everything I write here is my own opinion not anyone or
          any entity’s opinion
        </div>
      </main>
    </div>
  );
};

export default IntroToBlog;
