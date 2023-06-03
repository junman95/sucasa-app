import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const TableCard = ({ children }: Props) => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  return (
    <Card w={'40%'} margin={'10px'}>
      <CardHeader>
        <Heading>금일 {date} 기준 집계된 결과입니다. </Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default TableCard;
