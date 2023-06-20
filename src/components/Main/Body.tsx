"use client";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 50%;
  padding: 5%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.42);
  border-radius: 12px;
`;

type Props = {
  children: React.ReactNode;
};

const Body = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Body;
