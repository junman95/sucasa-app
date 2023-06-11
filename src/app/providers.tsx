"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../store";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ChakraProvider>
      <Provider store={store}>{children}</Provider>
    </ChakraProvider>
  );
}
