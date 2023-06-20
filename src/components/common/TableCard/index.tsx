"use client";
import React from "react";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const TableCard = ({ title, children }: Props) => {
  return (
    <Card w={"40%"} h={"97vh"} margin={"10px"} overflow={"hidden"}>
      <CardHeader
        width={"100%"}
        pos={"absolute"}
        bgColor={"telegram.100"}
        boxShadow={"md"}
        
      >
        <Heading>{title}</Heading>
      </CardHeader>
      <CardBody h={"100%"} marginTop={"8%"} overflow={"scroll"}>
        {children}
      </CardBody>
    </Card>
  );
};

export default TableCard;
