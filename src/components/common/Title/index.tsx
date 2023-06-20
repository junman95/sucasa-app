"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Arbutus_Slab } from "next/font/google";

const arbutusSlab = Arbutus_Slab({ weight: "400", subsets: ["latin"] });

const ContainerStyle = css`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

const titleStyle = css`
  font-size: 40px;
  font-weight: 700;
  color: white;
  ${arbutusSlab.className}
`;

const subtitleStyle = css`
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  ${arbutusSlab.className}
`;

type TitleProps = {
  title: string;
  subtitle?: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <Box css={ContainerStyle}>
      <Box css={titleStyle}>{title}</Box>
      <br />
      <Box css={subtitleStyle}>{subtitle}</Box>
    </Box>
  );
};

export default Title;
