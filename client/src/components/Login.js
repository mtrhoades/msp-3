import '../index.css';
import React, { useContext, useState } from "react";
import { CurrentUser } from "./context/CurrentUser";
import { useNavigate, Link } from "react-router-dom";
import KulaLodgeImg from '/home/matthew/Desktop/coding/UNLV/Full_Course/mile-stone-projects/msp-3/client/src/kulaLodge.png';

function LogIn() {
  let navigate = useNavigate();


  // uncomment when usecontext is working
  // const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  // submit function send token to backend if its in local storage
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("sending!");
      console.log(JSON.stringify(credentials));
      const response = await fetch(
        "/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );
      const parseRes = await response.json();
        console.log(parseRes)
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        navigate("/inventory");
      } else {
        console.log("no token!");
      }
    } catch (err) {
      console.error(err.message);
      alert("Wrong Username \r\n or Password 🥺")
    }
  }

  return (
    <div class="loginContainer">
      <div class="entry">
        <div class="welcomeContainer">
          {/* <h2 style={{color: 'black'}}>Welcome</h2> */}
        <img src={KulaLodgeImg}></img>
        </div>
        {/* <label for="user">Username</label> */}
        <input
          class="input first"
          type="text"
          placeholder="Enter Username"
          required
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        ></input>

        {/* <label for="pass">Password</label> */}
        <input
          class="input second"
          type="password"
          placeholder="Enter Password"
          required
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        ></input>

        <Link to="/inventory" class="styledButton loginButton" onClick={handleSubmit}>
          Login
        </Link>

        {/* <div class="rememberBox">
          <input type="checkbox"></input>
          <label for="remember" style={{color: 'black'}}>&nbsp; Remember Me</label>
        </div> */}

        <Link to="/construction" class="styledButton buttonSmall">
          Forgot Password
        </Link>

        <Link to="/signUp" class="styledButton">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LogIn;
