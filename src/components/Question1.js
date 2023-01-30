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

  data && console.log("alalal", data?.[0]?.["answer1"]);

  // const [check, setCheck] = useState("");

  // function handle(e) {

  //   }
  // }
  //   if (currentQuestion + 1 < data.length) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   } else {
  //     setShowResults(true);
  //   }
  // };

  const [answer1, setAnswer1] = useState("");

  console.log("anababanan", answer1);

  useEffect(() => {
    localStorage.setItem("answer1", JSON.stringify(answer1));
  }, [answer1]);

  return (
    <>
      <div className="midpage">
        <div className="card">
          <h2 className="question">{data?.[0]?.["question1"]}</h2>
          <ul>
            <li>
              <input
                type="radio"
                name="answer"
                value={data?.[0]?.["a"]}
                id="answer1"
                className="answer"
                onChange={(e) => {
                  setAnswer1(e.target.value);
                }}
              ></input>
              <label htmlFor="answer1" id="option1">
                {data?.[0]?.["a"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer2"
                value={data?.[0]?.["b"]}
                className="answer"
                onChange={(e) => {
                  setAnswer1(e.target.value);
                }}
              ></input>

              <label htmlFor="answer2" id="option1">
                {data?.[0]?.["b"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                value={data?.[0]?.["c"]}
                id="answer3"
                className="answer"
                onChange={(e) => {
                  setAnswer1(e.target.value);
                }}
              ></input>

              <label htmlFor="answer3" id="option1">
                {data?.[0]?.["c"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                value={data?.[0]?.["d"]}
                id="answer4"
                className="answer"
                onChange={(e) => {
                  setAnswer1(e.target.value);
                }}
              ></input>

              <label htmlFor="answer4" id="option1">
                {data?.[0]?.["d"]}
              </label>
            </li>
          </ul>
          <div className="button">
            <button onClick={() => navigate("/Question2")}>NEXT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question1;
