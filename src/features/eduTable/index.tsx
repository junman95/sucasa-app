import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { EduProgram } from "./type";

type Props = {
  data: EduProgram[];
};

const RecruitTable = ({ data }: Props) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>교육 공고</Th>
          <Th>내용</Th>
          <Th>등록일</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data &&
          data.map((item: any) => (
            <Tr>
              <Td>{item.TITL_NM}</Td>
              <Td>{item.CONT}</Td>
              <Td>{item.REG_DT}</Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

export default RecruitTable;
