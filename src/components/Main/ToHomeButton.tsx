"use client";
import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const StyledButton = styled(Button)`
  width: 100%;
  padding: 5%;
  font-size: 1.5rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  &:hover {
    color: #000;
  }
`;
const ToHomeButton = ({ children }: Props) => {
  return <StyledButton variant="ghost">{children}</StyledButton>;
};

export default ToHomeButton;
