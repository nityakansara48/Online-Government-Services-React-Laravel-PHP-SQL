import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import Navigation from "./Navigation";

function Login() {
  let history = useHistory();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    role: "Resident",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { ...userDetails };
    console.log(userData);

    axios
      // .post("http://localhost/siremar_data/Check_resident.php", { userData: userData })
      .get("http://localhost:8000/residents/"+userDetails.email+"/"+userDetails.password+"/"+userDetails.role)
      .then((res) => {
        console.log("Response Data: "+ Object.values(res.data));
        if (res.data.message === "Success") {
          console.log(res.data.userData.role);
          if (res.data.userData.role === "Resident") {
            localStorage.setItem("g_name", res.data.userData.name);
            localStorage.setItem("g_email", res.data.userData.email);
            localStorage.setItem("g_flag", "true");
            if (userDetails.role === "Resident") {
              history.push({ pathname: "/resident" });
              //history.push({pathname: '/resident_old', state: {authorised: 'true', name: res.data.name, email: res.data.email}});
            } else {
              alert("Invalid Role.");
            }
          } else if (res.data.userData.role === "Inspector") {
            localStorage.setItem("g_name", res.data.userData.name);
            localStorage.setItem("g_email", res.data.userData.email);
            localStorage.setItem("g_flag", "true");
            if (userDetails.role === "Inspector") {
              history.push({ pathname: "/inspector" });
              //history.push({pathname: '/inspector_old', state: {authorised: 'true', name: res.data.name, email: res.data.email}});
            } else {
              alert("Invalid Role.");
            }
          } else if (res.data.userData.role === "Admin") {
            localStorage.setItem("g_name", res.data.userData.name);
            localStorage.setItem("g_email", res.data.userData.email);
            localStorage.setItem("g_flag", "true");
            history.push({ pathname: "/admin" });
            if (userDetails.role === "Admin") {
              history.push({ pathname: "/admin" });
              //history.push({pathname: '/admin_old', state: {authorised: 'true', name: res.data.name, email: res.data.email}});
            } else {
              alert("Invalid Role.");
            }
          }
        } else {
          history.push("/login");
          alert(res.data.response_msg);
        }
      });
      //handleReset(e)
  };

  const handleReset = (e) => {
    setUserDetails({ email: "", password: "", role: "resident" });
  };

  return (
    <>
      <Navigation />
      <div className="center">
        <h1>Login Page</h1>
        <br />
        <br />
        <form action="" onSubmit={handleSubmit} onReset={handleReset}>
          <p>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInput}
              required
            />
          </p>
          <p>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleInput}
              required
            />
          </p>
          <p>
            Role:{" "}
            <select name="role" onChange={handleInput} value={userDetails.role}>
              <option value="Resident">Resident</option>
              <option value="Inspector">Inspector</option>
              <option value="Admin">Admin</option>
            </select>
          </p>
          <input type="submit" value="Log In" /> &nbsp;
          <input type="reset" value="Reset" />
          <br />
          <br />
          <Link to="/register">New Resident?</Link>
          &nbsp;
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default Login;
