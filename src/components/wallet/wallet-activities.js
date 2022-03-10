import React from "react";
import "./wallet-activities.scss";
import { FiSearch } from "react-icons/fi";

export default function WalletActive() {
  return (
    <div>
      <div className="holdSearch">
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
          <select name="date" className="date">
            <option value="none" selected>
              All
            </option>
            <option value="female">50</option>
            <option value="other">100</option>
          </select>
        </div>
      </div>
    </div>
  );
}
