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

  const [answer4, setAnswer4] = useState("");

  console.log("tyyty", answer4);

  useEffect(() => {
    localStorage.setItem("answer4", JSON.stringify(answer4));
  }, [answer4]);

  return (
    <>
      <div className="midpage">
        <div className="card">
          <h2 className="question">{data?.[3]?.["question4"]}</h2>
          <ul>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer1"
                className="answer"
                value={data?.[3]?.["a"]}
                onChange={(e) => {
                  setAnswer4(e.target.value);
                }}
              ></input>
              <label htmlFor="answer1" id="option1">
                {data?.[3]?.["a"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer2"
                className="answer"
                value={data?.[3]?.["b"]}
                onChange={(e) => {
                  setAnswer4(e.target.value);
                }}
              ></input>

              <label htmlFor="answer2" id="option1">
                {data?.[3]?.["b"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer3"
                className="answer"
                value={data?.[3]?.["c"]}
                onChange={(e) => {
                  setAnswer4(e.target.value);
                }}
              ></input>

              <label htmlFor="answer3" id="option1">
                {data?.[3]?.["c"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer4"
                className="answer"
                value={data?.[3]?.["d"]}
                onChange={(e) => {
                  setAnswer4(e.target.value);
                }}
              ></input>

              <label htmlFor="answer4" id="option1">
                {data?.[3]?.["d"]}
              </label>
            </li>
          </ul>
          <div className="button">
            <button onClick={() => navigate("/Question5")}>NEXT</button>
            <button onClick={() => navigate("/Question3")}>BACK</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question1;
