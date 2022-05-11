import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addlogin } from "../refactor/action";
import { store } from "../refactor/store";

export const Login = () => {
  const state = useSelector((store) => store.login.loginstore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logger, setlogger] = useState({
    username: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    setlogger({
      ...logger,
      [name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      let logs = logger;
      logs = JSON.stringify(logs);
      const res = await fetch(
        `https://masai-api-mocker.herokuapp.com/auth/login`,
        {
          method: "POST",
          body: logs,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const msg = await res.json();
      go(logger.username, msg.token);
    } catch (error) {}
  };

  const go = async (users, token) => {
    try {
      const res = await fetch(
        `https://masai-api-mocker.herokuapp.com/user/${users}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const msg = await res.json();

      dispatch(addlogin(msg));
    } catch (error) {
      console.log(error);
    }
  };
   
  console.log(state)
  return (
      <div> {state == false ? (<form onSubmit={login}>
        <Link to={"/"}>register</Link>
  
        <input
          type="text"
          name="username"
          onChange={handlechange}
          value={logger.username}
          placeholder="username"
          required={true}
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={handlechange}
          value={logger.password}
          placeholder="password"
          required={true}
        />
        <br />
        <input type="submit" />
      </form>) :  <div>
           {state.map(e=><div>
            <p>Name-{e.name}</p>
            <br/>
            <p>Mobile-{e.mobile}</p>
            <br/>
            <p>Email-{e.email}</p>
            <br/>
            <p>Username-{e.username}</p>
            <br/>
            <p>Description-{e.description}</p>
            </div>)}
            <Link to="/dashboard">Dashboard</Link>
    </div>}
    
    
 </div>
  );
};
// description: "fraklo"
// email: "fraklo@gmail.com"
// mobile: "1234453490"
// name: "fraklo"
// token: "cfd4b4fcab1dd39bafcdf24ffb579ef3"
// username: "fraklo"