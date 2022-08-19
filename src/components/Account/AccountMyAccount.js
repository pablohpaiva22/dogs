import React from "react";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";

const AccountMyAccount = () => {
  const { data } = React.useContext(UserContext);

  return (
    <div>
      <Feed user={data.id} />
    </div>
  );
};

export default AccountMyAccount;
