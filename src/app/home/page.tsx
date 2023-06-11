import TableCard from "../../components/common/TableCard";
import EduTable from "../../features/eduTable";
import { EduProgram } from "../../features/eduTable/type";
import { requestEduPrograms } from "../../network/api/eduApi";


export interface EduData {
  row: EduProgram[];
}

const getData = async () => {
  const response = await requestEduPrograms();
  return response.row;
};

const Home = async () => {
  const data = await getData();

  return (
    <div>
      <TableCard>
        <EduTable data={data} />
      </TableCard>
    </div>
  );
};

export default Home;
