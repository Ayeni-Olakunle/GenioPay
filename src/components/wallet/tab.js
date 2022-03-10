import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./tab.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ThreeTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          margin: "0.9rem 0 0 0",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
        >
          <Tab label="Active (3)" {...a11yProps(0)} />
          <Tab label="Inactive (2)" {...a11yProps(1)} />
          <Tab label="Closed (0)" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{ margin: "1rem 0" }}>
          <div className="holdThis">
            <div className="imageFlag">
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt="USA Flag"
                  className="tabUSAFlag"
                />
              </div>
              <div className="holdText">
                <h4 className="h4">EUR Wallet</h4>
                <span className="span">EUR</span>
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
              }}
            >
              <h4 className="moneyEUR">€2,000,000.50</h4>
              <span className="defau">Default</span>
            </div>
          </div>
        </div>

        <div style={{ margin: "1rem 0" }}>
          <div
            className="holdThis"
            style={{
              backgroundColor: "white",
            }}
          >
            <div className="imageFlag">
              <div>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="USA Flag"
                  className="tabUSAFlag"
                />
              </div>
              <div className="holdText">
                <h4 className="h4">Personal account</h4>
                <span className="span">USD</span>
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
              }}
            >
              <h4 className="moneyEUR">$10,250.00</h4>
            </div>
          </div>
        </div>

        <div style={{ margin: "1rem 0" }}>
          <div
            className="holdThis"
            style={{
              backgroundColor: "white",
            }}
          >
            <div className="imageFlag">
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt="USA Flag"
                  className="tabUSAFlag"
                />
              </div>
              <div className="holdText">
                <h4 className="h4">School savings</h4>
                <span className="span">GBP</span>
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
              }}
            >
              <h4 className="moneyEUR">£500.00</h4>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Inactive (2)
      </TabPanel>
      <TabPanel value={value} index={2}>
        Close (0)
      </TabPanel>
    </Box>
  );
}
