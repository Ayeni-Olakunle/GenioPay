import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./wallet.scss";

export default function Wallet() {
  return (
    <div>
      <div className="viewWallet">
        <h5>Wallet (5)</h5>
        <p className="viewALl">View all wallets</p>
      </div>
      <div>
        <Container
          style={{
            padding: "10px",
          }}
        >
          <Row>
            <Col className="USA">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="holdAccount">
                  <div>
                    <h6 className="personal">Personal account</h6>
                    <span className="dollar">USD</span>
                  </div>
                  <div>
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="USA Flag"
                      className="usaFlag"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="money">$10,250.00</h4>
                </div>
              </div>
            </Col>
            <Col
              className="USA"
              style={{ margin: "0 15px", backgroundColor: "#FBF1F0" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="holdAccount">
                  <div>
                    <h6 className="personal">EUR Wallet</h6>
                    <span className="dollar">EUR</span>
                  </div>
                  <div>
                    <img
                      src="data:image/png;base64,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"
                      alt="USA Flag"
                      className="usaFlag"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="money">€4000.53</h4>
                </div>
              </div>
            </Col>
            <Col className="USA" style={{ backgroundColor: "#DDECEF" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="holdAccount">
                  <div>
                    <h6 className="personal">School fees</h6>
                    <span className="dollar">GBP</span>
                  </div>
                  <div>
                    <img
                      src="data:image/png;base64,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"
                      alt="USA Flag"
                      className="usaFlag"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="money">£50.00</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
