//import react and useState/useEffect hooks
import React, { useState, useEffect } from "react";
//create our function called app
function App() {
  const [data, setData] = useState(null);
  //function that takes in ms and waits "that" long
  const syncWait = (ms) => {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
  };
  useEffect(() => {
    //generate random number
    const randomNumber = Math.floor(Math.random() * 100);

    const body = {
      number: randomNumber,
      date: new Date(),
    };
    //call syncWait (passing in 5 seconds in ms)
    syncWait(5000);
    fetch("/db", {
      //post request
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //append random number to body
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, [data]);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}

export default App;
