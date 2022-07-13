import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApplyJob() {
 
  const addJob =  function () {  
    axios
      .post("http://localhost:8080/jobHistory/addJob", {
        companyName: saveJobState.companyName,
        startDate: saveJobState.startDate,
        endDate: saveJobState.endDate,
        state: saveJobState.state
      })
      .then(      
        res =>{   
          // document.getElementById('addState').innerText="Add Job "+res.data;    
          alert("Add Job "+res.data);  
          console.log(res.data)
        } )
      .catch(err => console.log(err));

  }

  const initialSate = {
    companyName: "",
    startDate: "",
    endDate: "",
    state: "",
  };
  const [saveJobState, setSaveJobState] = useState(initialSate);
  const fieldChanged = (event) => {
    const copyState = { ...saveJobState };
    copyState[event.target.name] = event.target.value;
    setSaveJobState(copyState);
  };

  const onClicked = () => {
    alert(JSON.stringify(saveJobState));
    console.log(JSON.stringify(saveJobState));
  };
  return (
    <div>
      <h1>Apply job</h1>
      <br />
      <table id="jobApply">
        <tr>
          <td>companyName:</td>
          <td>
            <input
              type="text"
              id="companyName"
              name="companyName"
              defaultValue={setSaveJobState.companyName}
              onChange={(event) => {
                fieldChanged(event);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>startDate:</td>
          <td>
            <input type="text" id="startDate" name="startDate" 
            defaultValue={setSaveJobState.startDate}
            onChange={(event) => {
              fieldChanged(event);
            }}
            />
          </td>
        </tr>
        <tr>
          <td>endDate:</td>
          <td>
            <input type="text" id="endDate" name="endDate" 
            defaultValue={setSaveJobState.endDate}
            onChange={(event) => {
              fieldChanged(event);
            }}
            />
          </td>
        </tr>
        <tr>
          <td>state:</td>
          <td>
            <input type="text" id="state" name="state" 
            defaultValue={setSaveJobState.state}
            onChange={(event) => {
              fieldChanged(event);
            }}
            />
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <input type="button" value="submmit" onClick={addJob} />
          </td>
        </tr>
      </table>
      <span id="addState"></span>
    </div>
  );
}
