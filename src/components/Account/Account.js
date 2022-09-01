import React from "react";
import styles from "../Account/Account.module.css";
import { Routes, Route } from "react-router-dom";
import AccountPost from "./AccountPost";
import AccountStatistics from "./AccountStatistics";
import AccountMyAccount from "./AccountMyAccount";
import NotFound from "../NotFound";
import AccountHeader from "./AccountHeader";

const Account = () => {
  return (
    <section className={`${styles.container} container`}>
      <AccountHeader />

      <Routes>
        <Route path="/" element={<AccountMyAccount />} />
        <Route path="/postar" element={<AccountPost />} />
        <Route path="/estatistica" element={<AccountStatistics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Account;
