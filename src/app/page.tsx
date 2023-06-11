"use client";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Link } from "@chakra-ui/next-js";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      To Homepage <Link href="/home">홈으로 이동</Link>
    </div>
  );
};

export default IndexPage;
