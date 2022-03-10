import React from "react";
import ReactApexChart from "react-apexcharts";
import "./small-graph.scss";
import { GiNetworkBars } from "react-icons/gi";
import { ImArrowDownLeft2, ImArrowUpLeft2 } from "react-icons/im";

export default class SmallGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Income",
          data: [170000, 150000, 160000, 150000, 130000, 146000, 170000],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          // type: "datetime",
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
        },
        tooltip: {
          // x: {
          //   format: "dd/MM/yy",
          // },
        },
      },
    };
  }

  render() {
    return (
      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <div className="holdActivitys">
          <div className="actIt">
            <div>
              <select name="date" className="date">
                <option value="none" selected>
                  Month
                </option>
                <option value="female">Day</option>
                <option value="other">Year</option>
              </select>
            </div>
          </div>
        </div>
        <div className="graphLayout1">
          <div className="graphLayout2s">
            <div className="GraphsmallBox">
              <GiNetworkBars className="graphNet" />
              <div>
                <span style={{ fontSize: "14px" }}>Total transactions</span>
                <br />
                <span className="graphMoney">$88,600.00</span>
              </div>
            </div>
            <div className="GraphsmallBox">
              <ImArrowDownLeft2 className="graphNet" />
              <div>
                <span style={{ fontSize: "14px" }}>Pay-In</span>
                <br />
                <span className="graphMoney">$4,600.00</span>
              </div>
            </div>
            <div className="GraphsmallBox">
              <ImArrowUpLeft2
                className="graphNet"
                style={{
                  color: "#DC2626",
                }}
              />
              <div>
                <span style={{ fontSize: "14px" }}>Pay-Out</span>
                <br />
                <span className="graphMoney">$72,600.00</span>
              </div>
            </div>
          </div>
        </div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={250}
          />
        </div>
      </div>
    );
  }
}
