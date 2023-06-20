"use strict";
import type { NextPage } from "next";
import "../styles/Home.module.css";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Background from "../components/common/Background";
import Title from "../components/common/Title";
import Body from "../components/Main/Body";
import { Actor } from "next/font/google";
import ToHomeButton from "../components/Main/ToHomeButton";
import LanguageButton from "../components/Main/LanguageButton";

const inter = Actor({ weight: "400", subsets: ["latin"] });

const IndexPage: NextPage = () => {
  const { t, lang } = useTranslation("common");
  return (
    <div className={inter.className}>
      <Background url="/images/seoul_wide.jpg">
        <Body>
          <Title title={t("title")} subtitle={t("description")} />
          <LanguageButton>
            <Link href="/?lang=en" as="/en">
              English
            </Link>
          </LanguageButton>

          <LanguageButton>
            <Link href="/?lang=ko" as="/ko">
              한국어
            </Link>
          </LanguageButton>

          <LanguageButton>
            <Link href="/?lang=cn" as="/cn">
              中文
            </Link>
          </LanguageButton>
          <ToHomeButton>
            <Link href={`/home?lang=${lang}`} as={`/${lang}/home`}>
              {t("ToHome")}
            </Link>
          </ToHomeButton>
        </Body>
      </Background>
    </div>
  );
};

export default IndexPage;
