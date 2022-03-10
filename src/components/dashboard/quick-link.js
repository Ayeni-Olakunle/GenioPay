import React from "react";
import "./quick-link.scss";
import { FaWallet } from "react-icons/fa";
import {
  BsFillCreditCardFill,
  BsCurrencyDollar,
  BsFillCameraFill,
  BsFillCreditCard2FrontFill,
} from "react-icons/bs";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { BiLink } from "react-icons/bi";

export default function QuickLink() {
  return (
    <div>
      <div className="holdLinks">
        <h4 className="quick">Quick Links</h4>
        <p className="frenquent">
          Your frequently used actions for easy access.
        </p>
      </div>

      <div className="holdBox">
        <div className="smallBox">
          <div className="iconStyle" style={{ background: "#f97316" }}>
            <FaWallet style={{ color: "white" }} />
          </div>
          <div>
            <span>
              Add new <br /> Wallet
            </span>
          </div>
        </div>
        <div className="smallBox">
          <div className="iconStyle" style={{ background: "#005061" }}>
            <BsFillCreditCardFill style={{ color: "white" }} />
          </div>
          <div>
            <span>
              Add new <br /> Card
            </span>
          </div>
        </div>

        <div className="smallBox">
          <div className="iconStyle" style={{ background: "#F59E0B" }}>
            <BsCurrencyDollar style={{ color: "white" }} />
          </div>
          <div>
            <span
              style={{
                fontSize: "15px",
              }}
            >
              Balance <br />
              Exchange
            </span>
          </div>
        </div>

        <div className="smallBox">
          <div className="iconStyle" style={{ background: "#5EEAD4" }}>
            <CgArrowsExchangeAltV style={{ color: "white" }} />
          </div>
          <div>
            <span
              style={{
                fontSize: "15px",
              }}
            >
              Transfer to <br /> Account
            </span>
          </div>
        </div>

        <div className="smallBox">
          <div className="iconStyle" style={{ background: "#9333EA" }}>
            <BsFillCreditCard2FrontFill style={{ color: "white" }} />
          </div>
          <div>
            <span>
              Generate <br /> Voucher
            </span>
          </div>
        </div>
        <div className="smallBox">
          <div className="iconStyle" style={{ background: "#FFCB00" }}>
            <BsFillCameraFill style={{ color: "white" }} />
          </div>
          <div>
            <span>
              Mobile <br />
              Money
            </span>
          </div>
        </div>
        <div className="smallBox">
          <div className="iconStyle" style={{ background: "#F43F5E" }}>
            <BiLink style={{ color: "white" }} />
          </div>
          <div>
            <span>
              Payment <br />
              Link
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
