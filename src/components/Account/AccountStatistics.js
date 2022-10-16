import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { STATS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Utilities/Loading";
import AccountStatiscsGraph from "./AccountStaticsGraph";
import { UserContext } from '../../UserContext'

const AccountStatistics = () => {
  const { data, error, loading, request } = useFetch();
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { logOut } = React.useContext(UserContext)

  React.useEffect(() => {
    if (!token || error === 'Syntax error, malformed JSON' ) {
      logOut()
      navigate('/login')
    }

    const getData = async () => {
      const { url, options } = STATS_GET();

      request(url, options);
    }

    getData();
  }, [request, error, navigate, logOut, token]);

  if (loading) return <Loading />;
  if (error) return <p>Error.</p>;
  if (data)
    return (
      <>
        <Helmet>
          <title>Minha conta | Dogs</title>
        </Helmet>

        <AccountStatiscsGraph data={data} />
      </>
    );
  else return null;
};

export default AccountStatistics;
