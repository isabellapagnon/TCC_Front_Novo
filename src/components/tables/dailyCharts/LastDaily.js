/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import { useState } from "react";
// import "./App.css";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import ScatterChart from "../charts/ScatterChart";
import { UserData } from "../charts/DataDailyLast";

function LastDaily() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Daily Participation Metrics",
        data: UserData.map((data) => data.team_members),
        backgroundColor: [
          "rgba(75,192,192,1)",
          // "#ecf0f1",
          // "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        position: 'relative',
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
        <div style={{
        width: 430,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        top: 250,
        left: 920,
      }} >
        <PieChart chartData={userData} />
        <div></div>
      </div>
      {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default LastDaily;