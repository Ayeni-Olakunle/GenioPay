import React from "react";
import "./nav-bar.scss";
import logo from "../asset/GENIOPAY WHITE 1.png";
import WalletBalance from "../components/nav-bar/wallet-balance";
import MenuList from "../components/nav-bar/menu-list";
import InviteFriend from "../components/nav-bar/invite-friend";

export default function NavBar() {
  return (
    <div className="holdNav">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <WalletBalance />
      <MenuList />
      <InviteFriend />
    </div>
  );
}
