import useTranslation from "next-translate/useTranslation";
import TableCard from "../../components/common/TableCard";
import EduTable from "../../features/eduTable";
import { requestEduPrograms } from "../../network/api/eduApi";
import styles from './Home.module.css'

const getData = async () => {
  const response = await requestEduPrograms();
  return response.row;
};

const Home = async () => {
  const { t } = useTranslation("home");
  const data = await getData();

  return (
    <div className={styles.container}>
      <TableCard title={t("edu_title")}>
        <EduTable data={data} />
      </TableCard>
      <TableCard title={t("market_title")}>
        <EduTable data={data} />
      </TableCard>
    </div>
  );
};

export default Home;
