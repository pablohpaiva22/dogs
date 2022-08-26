import React from "react";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import { Helmet } from "react-helmet-async";

const AccountMyAccount = () => {
  const { data } = React.useContext(UserContext);

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
