import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerdata } from "../refactor/action";

export const Register = () => {
  const navigate = useNavigate()
  const [registers, setregister] = useState({
    name: "",
    password: "",
    username: "",
    email: "",
    mobile: "",
    description: "",
  });
  const reg = useSelector((store) => store.registerstore)
  const dispatch = useDispatch();
  
  const handlechange = (e) => {
    const { name, value } = e.target;

    setregister({
      ...registers,
      [name]: value,
    });
  };

  const getreg = async (e) => {
    e.preventDefault();

    try {
      let jsonform = registers;
      jsonform = JSON.stringify(jsonform);
      const seeable = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/register",
        {
          method: "POST",
          body: jsonform,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await seeable.json();
      go(data.error);
    } catch (error) {
      console.log(error);
    }
  };


  const go = (msg) => {

    if(msg===false){
      dispatch(registerdata(registers))
      navigate("/login", { replace: true });
    }
    else{
      alert("user already there")
    }
  }

  return (
    <div>
      <Link to={"/login"}>login</Link>
      <form>
        <input
          type="text"
          onChange={handlechange}
          required={true}
          placeholder="name"
          name="name"
        />
        <br />
        <input
          type="text"
          placeholder="username"
          onChange={handlechange}
          required={true}
          name="username"
        />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={handlechange}
          required={true}
          name="email"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={handlechange}
          required={true}
          name="password"
        />
        <br />
        <input
          type="number"
          placeholder="number"
          onChange={handlechange}
          required={true}
          name="mobile"
        />
        <br />
        <input
          type="text"
          placeholder="descrition"
          onChange={handlechange}
          required={true}
          name="description"
        />
        <br />
        <button onClick={getreg}>submit</button>
      </form>
    </div>
  );
};
