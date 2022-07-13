import React, { useEffect, useState } from "react";
import axios from "axios";
import "./JobStyle.css";
export default function JobHistory() { 
  const [jobHistoryState, setJobHistoryState] = useState({});
 
  const fetch = async function () {
    const jobHistoryInfo = await axios.get(
      "http://localhost:8080/jobHistory"
    );
    setJobHistoryState(jobHistoryInfo.data);
    // alert(jobHistoryState.length)
    showJobHistory();
 
  };
  useEffect(() => {
    if (0 === document.getElementById("jobHistoryTable").rows.length) {
      fetch();
    }
  });

  const showJobHistory= function(){
    var table = document.getElementById("jobHistoryTable");  
    var len = table.rows.length;
    if(len > 0){
      for(let k=0;k<len;k++){
        table.deleteRow(k);
      }
    }
    if (jobHistoryState.length > len) {    
      var rowH = table.insertRow(0);
      var c1 = rowH.insertCell(0);
      var c2 = rowH.insertCell(1);
      var c3 = rowH.insertCell(2);
      var c4 = rowH.insertCell(3);      
      c1.innerHTML = "companyName";
      c2.innerHTML = "startDate";
      c3.innerHTML = "endDate";
      c4.innerHTML = "state";
     
      for (let i = 0; i <= jobHistoryState.length; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);       
        cell1.innerHTML = jobHistoryState[i].companyName;
        cell2.innerHTML = jobHistoryState[i].startDate;
        cell3.innerHTML = jobHistoryState[i].endDate;
        cell4.innerHTML = jobHistoryState[i].state;       
      }
    }
  }
  return (    
    <div> 
      <h1>View JobHistory</h1>
      <br />
      <div id="searchJobAdvert">
      companyName :
        <input type="text" id="companyName" name="companyName" />
        &nbsp; state:
        <input type="text" id="state" name="state" />
        &nbsp; startDate :
        <input type="text" id="startDate" name="startDate" />
        &nbsp; endDate :
        <input type="text" id="endDate" name="endDate" />
      </div>
      <br />
      <div id="searchButton">
        <input type="button" value="search" />
      </div>
      <br />    
      <table className="table" id="jobHistoryTable"></table>
    </div>
  );
}
