import React from "react";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import { Helmet } from "react-helmet";

const AccountMyAccount = () => {
  const { data } = React.useContext(UserContext);

  return (
    <div>
      <Helmet>
        <title>Minha conta | Dogs</title>
      </Helmet>
      <Feed user={data.id} />
    </div>
  );
};

export default AccountMyAccount;
