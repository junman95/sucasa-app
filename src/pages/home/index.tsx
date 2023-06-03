import React, { useEffect, useState } from "react";
import {
  requestEduPrograms,
  eduServiceCode,
  EduProgram,
} from "../network/api/eduApi";
import TableCard from "../../components/common/TableCard";
import EduTable from "../../features/eduTable";

type Props = {};

const Home = () => {
  const [data, setData] = useState<EduProgram[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await requestEduPrograms();
      console.log(response.data[eduServiceCode].row);
      setData(response.data[eduServiceCode].row as EduProgram[]);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <TableCard>
        <EduTable data={data}/>
      </TableCard>
    </div>
  );
};

export default Home;
