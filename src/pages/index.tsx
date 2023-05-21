import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";
import { Link } from "@chakra-ui/next-js";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      To Homepage <Link href="/jobList">일자리 정보 보기</Link>
    </div>
  );
};

export default IndexPage;
