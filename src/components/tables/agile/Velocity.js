/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import { useState } from "react";
// import "./App.css";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import ScatterChart from "../charts/ScatterChart";
import { UserData } from "../charts/VelocityChart";

function Velocity() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Agile Lead Time",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
        //   "#ecf0f1",
        //   "#50AF95",
          "#f3ba2f",
        //   "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">

{/* <div  style={{
        width: 700,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        top: 200,
        left: 365,
      }} >
        <ScatterChart chartData={userData} />
      </div> */}

      <div
      style={{
        width: 700,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        top: 600,
        left: 500,
      }} >
        <BarChart chartData={userData} />
      </div>
      {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div> */}
    </div>
  );

  
}

export default Velocity;