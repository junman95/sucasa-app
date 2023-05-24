import React from "react";
import Table from "../../components/common/Table";
import { Button } from "@chakra-ui/react";
import { requestEduPrograms } from "../network/api/eduApi";

type Props = {};

const index = (props: Props) => {
  const onRequestEduPrograms = async () => {
    const res = await requestEduPrograms();
    console.log(res);
  };
  return (
    <div>
      <Table></Table>
      <Button onClick={onRequestEduPrograms}>에듀 정보 요청</Button>
    </div>
  );
};

export default index;
