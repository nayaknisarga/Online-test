import React, { useState, useEffect } from "react";

function Question() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => {
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
  data &&
    console.log("data coming from api is ", data["c"]?.[0]?.["question1"]);

  return (
    <>
      <div className="main">
        <div className="innerdiv">
          <h2 className="question">{data["c"]?.[0]?.["question1"]}</h2>
          <ul>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer1"
                className="answer"
              ></input>
              <label htmlFor="answer1" id="option1">
                {" "}
                {data["c"]?.[0]?.["a"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer2"
                className="answer"
              ></input>

              <label htmlFor="answer2" id="option1">
                {data["c"]?.[0]?.["b"]}
              </label>
            </li>{" "}
            <li>
              <input
                type="radio"
                name="answer"
                id="answer3"
                className="answer"
              ></input>

              <label htmlFor="answer3" id="option1">
                {data["c"]?.[0]?.["c"]}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="answer"
                id="answer4"
                className="answer"
              ></input>

              <label htmlFor="answer4" id="option1">
                {data["c"]?.[0]?.["d"]}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Question;
