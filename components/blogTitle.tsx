import React from "react";
import Link from "next/link";
import { TwitterOutlined, GithubOutlined } from "@ant-design/icons";

import styles from "../styles/Header.module.css";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const BlogTitle = (props: BlogPost) => {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div className={styles.blog}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h5>{props.date}</h5>
      </div>
    </Link>
  );
};

export default BlogTitle;
