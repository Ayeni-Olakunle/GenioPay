import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./small-tab.scss";
import SmallGraph from "./small-graph";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#009688",
    },
  },
});
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

export default function SmallTabs() {
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
          <Tab label="Activity" {...a11yProps(0)} />
          <Tab label="Transactions" {...a11yProps(1)} />
          <Tab label="Invoices" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SmallGraph />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Transactions
      </TabPanel>
      <TabPanel value={value} index={2}>
        Invoices
      </TabPanel>
    </Box>
  );
}
