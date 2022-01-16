import React from "react";
import { TwitterOutlined, GithubOutlined } from "@ant-design/icons";

import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.all}>
      <div className={styles.left}>
        <h2>
          <Link href="/">Hunter Simmons</Link>
        </h2>
        <h3> husband, co-founder, and developer</h3>
      </div>
      <div className={styles.right}>
        <Link href="https://github.com/hwsimmons17/">
          <GithubOutlined style={{ fontSize: 40 }} />
        </Link>
        <Link href="https://twitter.com/HWilliamSimmons">
          <TwitterOutlined style={{ fontSize: 40 }} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
