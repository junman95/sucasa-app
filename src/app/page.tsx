"use strict";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const IndexPage: NextPage = () => {
  const { t, lang } = useTranslation("common");
  return (
    <div className={styles.container}>
      <div>{t("title")}</div>
      <div style={{ marginTop: 20 }}>
        <Link href="/?lang=en" as="/en">
          English
        </Link>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link href="/?lang=ko" as="/ko">
          한국어
        </Link>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link href="/?lang=cn" as="/cn">
          中文
        </Link>
      </div>
      <Link href={`/home?lang=${lang}`} as={`/${lang}/home`}>
        {t("ToHome")}
      </Link>
    </div>
  );
};

export default IndexPage;
