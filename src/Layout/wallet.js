import React from "react";
import "./wallet.scss";
import { FaPlus } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/header/header";
import WalletActive from "../components/wallet/wallet-activities";
import ThreeTab from "../components/wallet/tab";
import BlockBalance from "../components/wallet/block-balance";
export default function ScreenTwo() {
  return (
    <div>
      <div>
        <Header name="Wallet" />
        <div className="holdYourWallet">
          <h4 className="walletText">Your Wallet (s) </h4>
          <button className="createButton">
            <FaPlus
              style={{
                marginRight: "10px",
              }}
            />
            Create New Wallet
          </button>
        </div>
        <Container fluid style={{ padding: "0" }}>
          <Row>
            <Col
              sm={5}
              style={{
                padding: "30px 2rem 30px 0",
              }}
            >
              <WalletActive />
              <ThreeTab />
            </Col>
            <Col
              sm={7}
              style={{
                padding: "30px 0 30px 2rem",
              }}
            >
              <BlockBalance />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
