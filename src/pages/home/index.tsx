import React, { useEffect, useState } from "react";
import { requestEduPrograms, eduServiceCode } from "../../network/api/eduApi";
import TableCard from "../../components/common/TableCard";
import EduTable from "../../features/eduTable";
import { EduProgram } from "../../features/eduTable/type";
import store from "../../store";
import { setPrograms } from "../../features/eduTable/eduSlice";

const Home = () => {
  useEffect(() => {
    const getData = async () => {
      const response = await requestEduPrograms();
      store.dispatch(
        setPrograms(response.data[eduServiceCode].row as EduProgram[])
      );
    };
    getData();
  }, []);
  return (
    <div>
      <TableCard>
        <EduTable/>
      </TableCard>
    </div>
  );
};

export default Home;
