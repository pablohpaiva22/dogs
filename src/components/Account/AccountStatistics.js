import React from "react";
import { Helmet } from "react-helmet-async";
import { STATS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Utilities/Loading";
import AccountStatiscsGraph from "./AccountStaticsGraph";

const AccountStatistics = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();

      request(url, options);
    };

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <p>Erro.</p>;
  if (data)
    return (
      <div>
        <Helmet>
          <title>Minha conta | Dogs</title>
        </Helmet>
        <AccountStatiscsGraph data={data} />
      </div>
    );
  else return null;
};

export default AccountStatistics;
