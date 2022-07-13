import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewAdvertStyle.css";
export default function Editadvert() {
  const [advertState, setAdvertState] = useState({});

  const fetch = async function () {
    const advertInfo = await axios.get(
      "http://localhost:8080/jobAdvertisements/5"
    );
    setAdvertState(advertInfo.data);
    var table = document.getElementById("advertTable2");

    if (advertState.length > table.rows.length) {
      var rowH = table.insertRow(0);
      var c1 = rowH.insertCell(0);
      var c2 = rowH.insertCell(1);
      var c3 = rowH.insertCell(2);
      var c4 = rowH.insertCell(3);
      var c5 = rowH.insertCell(4);
      var c6 = rowH.insertCell(5);
      c1.innerHTML = "description";
      c2.innerHTML = "benefits";
      c3.innerHTML = "file";
      c4.innerHTML = "state";
      c5.innerHTML = "first_name";
      c6.innerHTML = "last_name";
      for (let i = 0; i <= advertState.length; i++) {
        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = advertState[i].description;
        cell2.innerHTML = advertState[i].benefits;
        cell3.innerHTML = advertState[i].file;
        cell4.innerHTML = advertState[i].state;
        cell5.innerHTML = advertState[i].student.first_name;
        cell6.innerHTML = advertState[i].student.last_name;
      }
    }
  };

  useEffect(() => {
    if (0 === document.getElementById("advertTable2").rows.length) {
      fetch();
    }
  });
  return (
    // <div>{personState[0].student.first_name}</div>
    <div>
      <h1>View Your Advertisment</h1>
      <br />
      <table className="table" id="advertTable2"></table>
    </div>
  );
}
