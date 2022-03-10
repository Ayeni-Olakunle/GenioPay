import React from "react";
import "./block-balance.scss";
import { FiSend } from "react-icons/fi";
import { ImArrowDownLeft2 } from "react-icons/im";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { Container, Row, Col } from "react-bootstrap";

import SmallTabs from "./small-tab";

export default function BlockBalance() {
  return (
    <div>
      <div>
        <div className="holdBlockActive">
          <div className="layoutOne">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#22C55E",
                  borderRadius: "50px",
                  marginRight: "10px",
                }}
              ></div>
              <span
                style={{
                  color: "#22C55E",
                  fontSize: "14px",
                }}
              >
                Active
              </span>
            </div>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              EUR Wallet
            </span>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              EUR
            </span>
          </div>
          <div>
            <h2 className="euroMoney">€2,000,000.50</h2>
          </div>
        </div>

        <div>
          <table
            style={{
              width: "100%",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            <tr>
              <td>Ledger Balance</td>
              <td>2,000,000.50</td>
              <td>Total Incoming</td>
              <td>€2,000,000.50</td>
            </tr>
            <tr>
              <td>Blocked Balance</td>
              <td>€0.00</td>
              <td>Total Outgoing</td>
              <td>€5,000,000.50</td>
            </tr>
          </table>
        </div>

        <div>
          <Container fluid>
            <Row>
              <Col>
                <button className="buting">
                  <FiSend
                    style={{
                      fontSize: "17px",
                      marginRight: "7px",
                    }}
                  />
                  Payment
                </button>
              </Col>
              <Col>
                <button className="buting">
                  <ImArrowDownLeft2
                    style={{
                      fontSize: "17px",
                      marginRight: "7px",
                    }}
                  />
                  Pay In
                </button>
              </Col>
              <Col>
                <button className="buting">
                  <CgArrowsExchangeAlt
                    style={{
                      fontSize: "17px",
                      marginRight: "7px",
                    }}
                  />
                  Exchange
                </button>
              </Col>
            </Row>
          </Container>
        </div>

        <div
          style={{
            textAlign: "left",
          }}
        >
          <select name="date" class="date" style={{ fontWeight: "bold" }}>
            <option value="none">More Options</option>
            <option value="female">Less Options</option>
            <option value="other">Recent Options</option>
          </select>
        </div>

        <div>
          <SmallTabs />
        </div>
      </div>
    </div>
  );
}
