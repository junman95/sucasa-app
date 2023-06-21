"use client";
import React, { useState } from "react";
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EduProgram } from "./type";
import store from "../../store";
import { setSelectedProgram } from "./marketSlice";
import ContentModal from "../../components/common/ContentModal";
import useTranslation from "next-translate/useTranslation";

type EduProps = {
  data: EduProgram[];
};

const MarketTable = ({ data }: EduProps) => {
  const { t } = useTranslation("market");
  const [showContent, setShowContent] = useState(false);

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
            <Th>{t("item_name")}</Th>
            <Th>{t("content")}</Th>
            <Th>{t("created_at")}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((item: EduProgram, idx) => (
              <Tr key={idx}>
                <Td width={"60%"}>{item.TITL_NM}</Td>
                <Td width={"20%"}>
                  <Button onClick={() => onClickSelectProgram(idx)}>
                    {t("click_item")}
                  </Button>
                </Td>
                <Td width={"20%"}>{item.REG_DT}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default MarketTable;
