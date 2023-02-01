import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Question1() {
  const [data, setData] = useState("");
  useEffect(() => {
    let a = localStorage.getItem("apiData");
    let d = JSON.parse(a);
    setData(d);
  }, []);
  console.log("aaaaa", data);
  const navigate = useNavigate();

  const [answer2, setAnswer2] = useState("");

  console.log("xyxyxy", answer2);

  useEffect(() => {
    localStorage.setItem("answer2", JSON.stringify(answer2));
  }, [answer2]);

  return (
    <>
      <div className="midpage">
        <div className="card">
          {" "}
          <h2 className="question">{data?.[1]?.["question2"]}</h2>
          <ul>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer1"
                className="answer"
                value={data?.[1]?.["a"]}
                onChange={(e) => {
                  setAnswer2(e.target.value);
                }}
              ></input>
              <label htmlFor="answer1" id="option1">
                {data?.[1]?.["a"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer2"
                className="answer"
                value={data?.[1]?.["b"]}
                onChange={(e) => {
                  setAnswer2(e.target.value);
                }}
              ></input>

              <label htmlFor="answer2" id="option1">
                {data?.[1]?.["b"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer3"
                className="answer"
                value={data?.[1]?.["c"]}
                onChange={(e) => {
                  setAnswer2(e.target.value);
                }}
              ></input>

              <label htmlFor="answer3" id="option1">
                {data?.[1]?.["c"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer4"
                className="answer"
                value={data?.[1]?.["d"]}
                onChange={(e) => {
                  setAnswer2(e.target.value);
                }}
              ></input>

              <label htmlFor="answer4" id="option1">
                {data?.[1]?.["d"]}
              </label>
            </li>
          </ul>
          <div className="button">
            <button onClick={() => navigate("/Question1")}>BACK</button>
            <button onClick={() => navigate("/Question3")}>NEXT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question1;
