"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useAppSelector } from "../../hooks";
import { EduProgram } from "./type";
import store from "../../store";
import { setPrograms, setSelectedProgram } from "./eduSlice";
import ContentModal from "../../components/common/ContentModal";

type EduProps = {
  data: EduProgram[];
};

const EduTable = ({ data }: EduProps) => {
  const [showContent, setShowContent] = useState(false);
  // const data = useAppSelector((state) => state.edu.programs);
  useEffect(() => {
    store.dispatch(setPrograms(data));
  }, [data]);

  const onClickSelectProgram = (idx: number) => {
    store.dispatch(setSelectedProgram(idx));
    setShowContent(true);
  };

  return (
    <div>
      <ContentModal showContent={showContent} setShowContent={setShowContent} />
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
            data.map((item: EduProgram, idx) => (
              <Tr key={idx}>
                <Td width={"60%"}>{item.TITL_NM}</Td>
                <Td width={"20%"}>
                  <div onClick={() => onClickSelectProgram(idx)}>
                    눌러주세요
                  </div>
                </Td>
                <Td width={"20%"}>{item.REG_DT}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default EduTable;
