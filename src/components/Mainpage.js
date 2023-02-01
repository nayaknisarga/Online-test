import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  const [user, setUser] = useState({
    name: "",
    gender: "",
  });
  console.log(user);
  // const [value, setValue] = useState("");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  // console.log(value);

  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((res) => {
        console.log(res[0]);
        setData(res[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log("aaaa", data);
  // localStorage.setItem("apiData", JSON.stringify(data));

  function handleUser(e) {
    if (e.target.name === "name") {
      setUser({ ...user, name: e.target.value });
    }
    if (e.target.name === "gender") {
      setUser({ ...user, gender: e.target.value });
    }
  }
  //
  const [langInput, setLangInput] = useState("");

  function language(e) {
    setLangInput(e.target.value);
    // e.preventDefault();
  }
  useEffect(() => {
    if (langInput !== "") {
      if (data.hasOwnProperty(langInput)) {
        // console.log("yes");
        console.log(data[langInput]);
        localStorage.setItem("apiData", JSON.stringify(data[langInput]));
      }
    }
  }, [langInput]);

  console.log(langInput);

  const navigate = useNavigate();

  return (
    <>
      <div className="main">
        <div className="form" onSubmit={() => navigate("/Question1")}>
          <form className="inputs">
            <label> Name : </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={user.name}
              onChange={handleUser}
            />
            <br />
            <br />
            <label>Gender : </label>
            <label htmlFor="male"> Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleUser}
            />

            <label htmlFor="female"> Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleUser}
            />
            <br />

            <br />

            <label> language : </label>
            <select name="lang" onChange={language} className="lang">
              <option value="" disabled selected>
                Choose Language
              </option>
              <option value="c">c</option>
              <option value="java">java</option>
              <option value="javascript">javascript</option>
              <option value="python">python</option>
              <option value="html & css">html & css</option>
            </select>

            <br />
            <br />
            <button className="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
