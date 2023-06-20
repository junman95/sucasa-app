"use client";

import { Box, Button, Divider } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const StyledButton = styled(Button)`
  width: 100%;
  padding: 5%;
  font-size: 1.5rem;
  border-radius: 0;
  &:hover {
    color: #000;
  }
`;

const StyledBox = styled.div`
  padding: 2%;
`;

const LanguageButton = ({ children }: Props) => {
  return (
    <StyledButton variant="ghost">
      <Divider />
      <StyledBox>{children}</StyledBox>
      <Divider />
    </StyledButton>
  );
};

export default LanguageButton;
