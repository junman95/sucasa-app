'use client'
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const TableCard = ({ children }: Props) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().toLocaleTimeString());
  }, []);
  return (
    <Card w={"50%"} margin={"10px"}>
      <CardHeader>
        <Heading>금일 {date} 기준 집계된 결과입니다. </Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default TableCard;
