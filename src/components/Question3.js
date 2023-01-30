import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Question1() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  useEffect(() => {
    let a = localStorage.getItem("apiData");
    let d = JSON.parse(a);
    setData(d);
  }, []);
  console.log("aaaaa", data);

  const [answer3, setAnswer3] = useState("");

  console.log("xgghhhhy", answer3);

  useEffect(() => {
    localStorage.setItem("answer3", JSON.stringify(answer3));
  }, [answer3]);

  return (
    <>
      <div className="midpage">
        <div className="card">
          <h2 className="question">{data?.[2]?.["question3"]}</h2>
          <ul>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer1"
                className="answer"
                value={data?.[2]?.["a"]}
                onChange={(e) => {
                  setAnswer3(e.target.value);
                }}
              ></input>
              <label htmlFor="answer1" id="option1">
                {data?.[2]?.["a"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer2"
                className="answer"
                value={data?.[2]?.["b"]}
                onChange={(e) => {
                  setAnswer3(e.target.value);
                }}
              ></input>

              <label htmlFor="answer2" id="option1">
                {data?.[2]?.["b"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer3"
                className="answer"
                value={data?.[2]?.["c"]}
                onChange={(e) => {
                  setAnswer3(e.target.value);
                }}
              ></input>

              <label htmlFor="answer3" id="option1">
                {data?.[2]?.["c"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer4"
                className="answer"
                value={data?.[2]?.["d"]}
                onChange={(e) => {
                  setAnswer3(e.target.value);
                }}
              ></input>

              <label htmlFor="answer4" id="option1">
                {data?.[2]?.["d"]}
              </label>
            </li>
          </ul>
          <div className="button">
            <button onClick={() => navigate("/Question4")}>NEXT</button>
            <button onClick={() => navigate("/Question2")}>BACK</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question1;
