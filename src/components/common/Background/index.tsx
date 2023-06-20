"use client";
import React from "react";
import { Box } from "@chakra-ui/react";

type BackgroundProps = {
  url: string;
  children: React.ReactNode;
};

const Background = ({ url, children }: BackgroundProps) => {
  return (
    <Box
      background={`url(${url})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100%"
      height="100vh"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      fontSize="2rem"
    >
      {children}
    </Box>
  );
};

export default Background;
