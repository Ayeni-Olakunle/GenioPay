import React from "react";
import "./wallet-balance.scss";
import { FaWallet } from "react-icons/fa";
import { AiFillEye, AiTwotoneEyeInvisible, AiFillStar } from "react-icons/ai";

export default function WalletBalance() {
  return (
    <div className="holdWalletBalance">
      <div className="wallet">
        <div className="balance">
          <div className="balance2">
            <div className="iconWallet">
              <FaWallet />
            </div>
            <div>
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                }}
              >
                Wallet Balance
              </p>
              <p
                style={{
                  margin: "0",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                $15,001.00
              </p>
            </div>
          </div>
          <div>
            <AiFillEye
              style={{
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
            {/* <AiTwotoneEyeInvisible /> */}
          </div>
        </div>
        <div className="balances">
          <div className="iconStar">
            <AiFillStar />
          </div>
          <div
            style={{
              margin: "0 9px",
              color: "white",
              textAlign: "left",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "14px",
              }}
            >
              Wallet Balance
            </p>
            <p
              style={{
                margin: "0",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              35
            </p>
          </div>
          {/* <div>
            <AiFillEye
              style={{
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
            <AiTwotoneEyeInvisible />
          </div> */}
        </div>
        <div className="holdPay">
          <button className="payin">Pay-In</button>
          <button className="payout">Pay-Out</button>
        </div>
      </div>
    </div>
  );
}
