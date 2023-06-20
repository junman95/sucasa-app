"use client";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const TableCard = ({ title, children }: Props) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().toLocaleTimeString());
  }, []);
  return (
    <Card w={"50%"} margin={"10px"}>
      <CardHeader>
        <Heading>{title}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default TableCard;
