import React from "react";
import { FiSearch } from "react-icons/fi";
import { GiTreeDoor } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import profile from "../../asset/Ellipse 18.png";
import "./header.scss";

export default function Header(props) {
  return (
    <div className="holdHeader">
      <div>
        <h4 className="headerH">{props.name}</h4>
      </div>
      <div className="holdSecondLayer">
        <div className="search">
          <FiSearch />
          <input
            type="search"
            placeholder="Search"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              marginLeft: "10px",
              backgroundColor: "#f8fcfc",
            }}
          />
        </div>
        <div>
          <span>
            <GiTreeDoor className="tree" />
          </span>
          <span>0 planted</span>
        </div>
        <div>
          <IoIosNotificationsOutline
            style={{
              fontSize: "25px",
              margin: "0 10px",
            }}
          />
        </div>
        <div className="thirdLayout">
          <img src={profile} alt="Profile" className="profileImage" />
          <div className="holdVerify">
            <span className="verify">Verified</span>
            <br />
            <span>Huss Smith</span>
          </div>
          <RiArrowDropDownLine
            style={{
              fontSize: "25px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
