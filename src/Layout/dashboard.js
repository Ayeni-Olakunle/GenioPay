import React from "react";
import "./dashboard.scss";
import Header from "../components/header/header";
import Wallet from "../components/dashboard/wallet";
import QuickLink from "../components/dashboard/quick-link";
import ApexChart from "../components/graph/apexchart";

export default function Dashboard() {
  return (
    <div>
      <div>
        <Header name="Welcome, Huss Smith" />
        <Wallet />
        <QuickLink />
        <ApexChart />
      </div>
    </div>
  );
}
