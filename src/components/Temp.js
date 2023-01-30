import React, { useState } from "react";

function Temp() {
  const [res, setRes] = useState([
    { name: "nisrag", age: 22 },
    { name: "nidhi", age: 22 },
    { name: "nesar", age: 22 },
    { name: "nihal", age: 22 },
    { name: "shivani", age: 22 },
  ]);

  function change() {
    // setRes((res) => [...res, 90]);
    setRes((res) => [...res, { gender: "female" }]);
  }
  console.log(res);
  return (
    <>
      {res.name}
      {res.age}
      <button onClick={change}>change</button>
    </>
  );
}

export default Temp;
