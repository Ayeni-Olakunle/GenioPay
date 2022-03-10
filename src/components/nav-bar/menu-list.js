import React from "react";
import "./menu-list.scss";
import { FaWallet, FaTag } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuList() {
  const [list, setList] = useState(1);

  const menuClick = (index) => {
    setList(index);
  };

  return (
    <div>
      <div
        style={{
          margin: "3rem 0",
        }}
      >
        <ul>
          <Link to={`/`}>
            <li
              className={list === 1 ? "active" : ""}
              onClick={() => menuClick(1)}
            >
              <FaWallet
                style={{
                  marginRight: "10px",
                  marginTop: "5px",
                }}
              />
              Dashboard
            </li>
          </Link>

          <Link to={`/wallet`}>
            <li
              className={list === 2 ? "active" : ""}
              onClick={() => menuClick(2)}
            >
              <FaWallet
                style={{
                  marginRight: "10px",
                  marginTop: "5px",
                }}
              />
              Wallet
            </li>
          </Link>

          <Link to={`/card`}>
            <li
              className={list === 3 ? "active" : ""}
              onClick={() => menuClick(3)}
            >
              <BsFillCreditCardFill
                style={{
                  marginRight: "10px",
                  marginTop: "5px",
                }}
              />
              Cards
            </li>
          </Link>

          <Link to={`/FXCentre`}>
            <li
              className={list === 4 ? "active" : ""}
              onClick={() => menuClick(4)}
            >
              <BiDollarCircle
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  marginTop: "5px",
                }}
              />
              FX Centre
            </li>
          </Link>

          <Link to={`/Beneficiaries`}>
            <li
              className={list === 5 ? "active" : ""}
              onClick={() => menuClick(5)}
            >
              <ImUsers
                style={{
                  marginRight: "10px",
                  marginTop: "5px",
                }}
              />
              Beneficiaries
            </li>
          </Link>

          <Link to={`/Perks`}>
            <li
              className={list === 6 ? "active" : ""}
              onClick={() => menuClick(6)}
            >
              <FaTag
                style={{
                  marginRight: "10px",
                  marginTop: "5px",
                }}
              />
              Perks
            </li>
            \
          </Link>
        </ul>
      </div>
    </div>
  );
}
