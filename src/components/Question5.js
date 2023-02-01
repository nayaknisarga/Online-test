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

  const [answer5, setAnswer5] = useState("");

  console.log("answer5", answer5);

  useEffect(() => {
    localStorage.setItem("answer5", JSON.stringify(answer5));
  }, [answer5]);

  return (
    <>
      <div className="midpage">
        <div className="card">
          {" "}
          <h2 className="question">{data?.[4]?.["question5"]}</h2>
          <ul>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer1"
                className="answer"
                value={data?.[4]?.["a"]}
                onChange={(e) => {
                  setAnswer5(e.target.value);
                }}
              ></input>
              <label htmlFor="answer1" id="option1">
                {data?.[4]?.["a"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer2"
                className="answer"
                value={data?.[4]?.["b"]}
                onChange={(e) => {
                  setAnswer5(e.target.value);
                }}
              ></input>

              <label htmlFor="answer2" id="option1">
                {data?.[4]?.["b"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer3"
                className="answer"
                value={data?.[4]?.["c"]}
                onChange={(e) => {
                  setAnswer5(e.target.value);
                }}
              ></input>

              <label htmlFor="answer3" id="option1">
                {data?.[4]?.["c"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer4"
                className="answer"
                value={data?.[4]?.["d"]}
                onChange={(e) => {
                  setAnswer5(e.target.value);
                }}
              ></input>

              <label htmlFor="answer4" id="option1">
                {data?.[4]?.["d"]}
              </label>
            </li>
          </ul>
          <div className="button">
            <button onClick={() => navigate("/Question4")}>BACK</button>
            <button onClick={() => navigate("/Graph")}>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question1;
