import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewAdvertStyle.css";
export default function ViewAdvert() {
  const search = function () {
    axios
      .post("http://localhost:8080/jobAdvertisements/search", {
        tag: searchAdvertState.tag,
        state: searchAdvertState.state,
        description: searchAdvertState.description,
        benefits: searchAdvertState.benefits,
      })
      .then((res) => {
        // document.getElementById('addState').innerText="Add Job "+res.data;
        setAdvertState(res.data);
        var table = document.getElementById("advertTable");
        var len = table.rows.length;
        if (len > 0) {
          for (let k = 0; k < len; k++) {
            table.deleteRow(k + 1);
          }
        }
        showAdvertInfo();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const initialSate = {
    tag: "",
    state: "",
    description: "",
    benefits: "",
  };
  const [searchAdvertState, setSearchAdvertState] = useState(initialSate);
  const fieldChanged = (event) => {
    const copyState = { ...searchAdvertState };
    copyState[event.target.name] = event.target.value;
    setSearchAdvertState(copyState);
  };

  const onClicked = () => {
    alert(JSON.stringify(searchAdvertState));
    console.log(JSON.stringify(searchAdvertState));
  };

  const [advertState, setAdvertState] = useState({});
  var insertState = "";
  const fetch = async function () {
    const advertInfo = await axios.get(
      "http://localhost:8080/jobAdvertisements"
    );

    setAdvertState(advertInfo.data);
    showAdvertInfo();
  };

  const showAdvertInfo = function () {
    var table = document.getElementById("advertTable");
    // if(table) table.parentNode.removeChild(table);
    var len = table.rows.length;
    // if(len > 0){

    //   for(let k=0;k<len;k++){
    //     //table.deleteRow(k+1);
    //   }
    // }

    if (advertState.length > len) {
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
    var table = document.getElementById("advertTable");
    // if(table) table.parentNode.removeChild(table);
    var len = table.rows.length;
    // if(len > 0){

    if (0 === document.getElementById("advertTable").rows.length) {
      for (let k = 0; k < len; k++) {
        table.deleteRow(k + 1);
      }
      fetch();
    }
  });
  return (
    // <div>{personState[0].student.first_name}</div>
    <div>
      <h1>View All Advertisment</h1>
      <br />
      <div id="searchJobAdvert">
        tag :
        <input
          type="text"
          id="tag"
          name="tag"
          defaultValue={searchAdvertState.tag}
          onChange={(event) => {
            fieldChanged(event);
          }}
        />
        &nbsp; state:
        <input
          type="text"
          id="state"
          name="state"
          defaultValue={searchAdvertState.state}
          onChange={(event) => {
            fieldChanged(event);
          }}
        />
        &nbsp; description :
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={searchAdvertState.benefits}
          onChange={(event) => {
            fieldChanged(event);
          }}
        />
        &nbsp; benefits :
        <input
          type="text"
          id="benefits"
          name="benefits"
          defaultValue={searchAdvertState.benefits}
          onChange={(event) => {
            fieldChanged(event);
          }}
        />
      </div>
      <br />
      <div id="searchButton">
        <input type="button" value="search" onClick={search} />
      </div>
      <br />
      <table className="table" id="advertTable"></table>
    </div>
  );
}
