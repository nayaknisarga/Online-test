import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Graph.css";

export default function Graph() {
  //   const [score1, setScore1] = useState(0);
  //   const [score2, setScore2] = useState(0);
  //   const [score3, setScore3] = useState(0);
  //   const [score4, setScore4] = useState(0);
  //   const [score5, setScore5] = useState(0);
  const [score, setScore] = useState(0);
  const [ans, setAns] = useState({
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    a5: "",
  });

  const [apidata, setApidata] = useState();

  useEffect(() => {
    let a1 = JSON.parse(localStorage.getItem("answer1"));
    console.log("answer1", a1);
    if (a1) {
      setAns((ans) => ({ ...ans, a1: a1 }));
    }

    let a2 = JSON.parse(localStorage.getItem("answer2"));
    console.log("answer2", a2);
    if (a2) {
      setAns((ans) => ({ ...ans, a2: a2 }));
    }

    let a3 = JSON.parse(localStorage.getItem("answer3"));
    console.log("answer3", a3);
    if (a3) {
      setAns((ans) => ({ ...ans, a3: a3 }));
    }

    let a4 = JSON.parse(localStorage.getItem("answer4"));
    console.log("answer4", a4);
    if (a4) {
      setAns((ans) => ({ ...ans, a4: a4 }));
    }

    let a5 = JSON.parse(localStorage.getItem("answer5"));
    console.log("answer5", a5);
    if (a5) {
      setAns((ans) => ({ ...ans, a5: a5 }));
    }

    let data = JSON.parse(localStorage.getItem("apiData"));
    console.log("apidata in graph page", data);

    setApidata(data);
  }, []);

  useEffect(() => {
    if (apidata?.[0]?.answer1 === ans.a1) {
      setScore((previous) => {
        return previous + 1;
      });
    }
    if (apidata?.[1]?.answer2 === ans.a2) {
      setScore((previous) => {
        return previous + 1;
      });
    }
    if (apidata?.[2]?.answer3 === ans.a3) {
      setScore((previous) => {
        return previous + 1;
      });
    }
    if (apidata?.[3]?.answer4 === ans.a4) {
      setScore((previous) => {
        return previous + 1;
      });
    }
    if (apidata?.[4]?.answer5 === ans.a5) {
      setScore((previous) => {
        return previous + 1;
      });
    }
  }, [ans]);

  console.log("score", score);
  console.log("api", apidata);

  return (
    <>
      <div className="graphmain">
        <h1 className="score">FINAl SCORE {score}/5</h1>
        <div className="piechart">
          <PieChart
            data={[
              { title: "Wrong Answer", value: 5 - score, color: "red" },
              { title: "Correct Answer", value: score, color: "green" },
            ]}
          />
          ;
        </div>
      </div>
    </>
  );
}
