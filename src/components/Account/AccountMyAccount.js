import React from "react";
import Feed from "../Feed/Feed";
import { UserContext } from "../../UserContext";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const AccountMyAccount = () => {
  const { data, logOut } = React.useContext(UserContext);
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  React.useEffect(() => {
    if (!token) {
      logOut()

      navigate('/login')
    }

  }, [token, navigate, logOut])



  return (
    <div>
      <Helmet>
        <title>Minha conta | Dogs</title>
      </Helmet>

      {data && <Feed user={data.id} />}
    </div>
  );
};

export default AccountMyAccount;
