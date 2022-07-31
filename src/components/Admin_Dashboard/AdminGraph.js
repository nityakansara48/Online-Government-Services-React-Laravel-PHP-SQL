import { React, useEffect, useState } from 'react';
import '../../styles/basic.css';
import '../../styles/navbar.css';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function AdminGraph() {

  const name = localStorage.getItem("g_name");
  const email = localStorage.getItem("g_email");

  const [totalResident, setTotalResident] = useState("");
  const [totalInspector, setTotalInspector] = useState("");
  const [totalFlight, setTotalFlight] = useState("");
  const [totalFlightBook, setTotalFlightBook] = useState("");
  const [totalSchool, setTotalSchool] = useState("");
  const [totalSchoolReg, setTotalSchoolReg] = useState("");
  const [totalEvent, setTotalEvent] = useState("");
  const [totalEventBook, setTotalEventBook] = useState("");
  const [totalBusiness, setTotalBusiness] = useState("");

  const getAllData = async () => {
    //axios.post("http://localhost/siremar_data/Get_all_count.php").then(
    axios.get("http://localhost:8000/getAllCount").then(
      resp => {
        setTotalResident(resp.data.res_cnt);
        setTotalInspector(resp.data.ins_cnt);
        setTotalFlight(resp.data.flight_cnt);
        setTotalFlightBook(resp.data.flight_book_cnt);
        setTotalSchool(resp.data.school_cnt);
        setTotalSchoolReg(resp.data.school_reg_cnt);
        setTotalEvent(resp.data.event_cnt);
        setTotalEventBook(resp.data.event_book_cnt);
        setTotalBusiness(resp.data.business_cnt);
      })
  };

  useEffect(() => {
    getAllData();
  }, []);

  const chartData = {
    labels: [
      "Residents",
      "Inspectors",
      "Flights",
      "Flight Booking",
      "School",
      "School Registration",
      "Event",
      "Event Booking",
      "Business"
    ],
    datasets: [
      {
        label: "Total Records",
        backgroundColor: "rgba(55,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [totalResident, totalInspector, totalFlight, totalFlightBook, totalSchool, totalSchoolReg, totalEvent, totalEventBook, totalBusiness]
      },
    ]
  };

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Siremar Report"
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }
        }}
      />
    </div>
  )
}

export default AdminGraph
