"use client";

import { Box, Divider } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const StyledBox = styled.div`
  padding: 2%;
`;

const LanguageBox = ({ children }: Props) => {
  return (
    <Box>
      <StyledBox>{children}</StyledBox>
      <Divider colorScheme="telegram" />
    </Box>
  );
};

export default LanguageBox;
