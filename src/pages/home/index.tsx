import React, { useEffect, useState } from "react";
import { requestEduPrograms, eduServiceCode } from "../../network/api/eduApi";
import TableCard from "../../components/common/TableCard";
import EduTable from "../../features/eduTable";
import { EduProgram } from "../../features/eduTable/type";
import store from "../../store";
import { setPrograms } from "../../features/eduTable/eduSlice";

async function getData() {
  const response = await requestEduPrograms();
  console.log(response.data);
  // if (!response.data) {
  //   throw new Error("데이터를 불러오는데 실패했습니다.");
  // }
  store.dispatch(
    setPrograms(response.data[eduServiceCode].row as EduProgram[])
  );
}

const Home = async () => {
  const data = await getData();
  return (
    <div>
      <TableCard>
        <EduTable />
      </TableCard>
    </div>
  );
};

export default Home;
