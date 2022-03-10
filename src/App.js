import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import ScreenOne from "./Layout/dashboard";
import ScreenTwo from "./Layout/wallet";
import NavBar from "./Layout/nav-bar";
import Other from "./Layout/other-page";

function App() {
  return (
    <div className="App">
      <Container
        fluid
        style={
          {
            // padding: 0,
          }
        }
      >
        <Row>
          <Col
            sm={3}
            style={{
              padding: 0,
            }}
          >
            <NavBar />
          </Col>

          <Col
            sm={9}
            style={{
              padding: "10px 2rem",
              height: "100vh",
              overflowY: "scroll",
            }}
          >
            <Routes>
              <Route path="/" element={<ScreenOne />} />
              <Route path="/wallet" element={<ScreenTwo />} />
              <Route path="/card" element={<Other title="Card Page" />} />
              <Route
                path="/FXCentre"
                element={<Other title="FX Centre Page" />}
              />
              <Route
                path="/Beneficiaries"
                element={<Other title="Beneficiaries Page" />}
              />
              <Route path="/Perks" element={<Other title="Perks Page" />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
