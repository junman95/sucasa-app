import TableCard from "../../components/common/TableCard";
import EduTable from "../../features/eduTable";
import { requestEduPrograms } from "../../network/api/eduApi";

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
