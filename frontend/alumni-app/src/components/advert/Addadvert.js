import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Addadvert() {
  const addadvert =  function () {
    axios
      .post("http://localhost:8080/jobAdvertisements/addAdvertisement", {
        description: saveAdvertState.description,
        benefits: saveAdvertState.benefits,       
        state: saveAdvertState.state
      })
      .then(      
        res =>{   
          // document.getElementById('addState').innerText="Add Job "+res.data;    
          alert("Add Advert "+res.data);  
          console.log(res.data)
        } )
      .catch(err => console.log(err));

  }

  const initialSate = {
    description: "",
    benefits: "",   
    state: "",
  };
  const [saveAdvertState, setSaveAdvertState] = useState(initialSate);
  const fieldChanged = (event) => {
    const copyState = { ...saveAdvertState };
    copyState[event.target.name] = event.target.value;
    setSaveAdvertState(copyState);
  };

  const onClicked = () => {
    alert(JSON.stringify(saveAdvertState));
    console.log(JSON.stringify(saveAdvertState));
  };
  return (
    // <div>{personState[0].student.first_name}</div>
    <div>
     <h1>Add Advertisment</h1>
     <br/>
      <table  id="advertTable3">
      {/* <caption>Add a Advertisment</caption> */}
        <tr>
          <td>description:</td>
          <td>
            <textarea rows="6" cols="100" id="description" name="description" 
             defaultValue={saveAdvertState.description}
             onChange={(event) => {
               fieldChanged(event);
             }}
            />
          </td>
        </tr>
        <tr>
          <td>benefits:</td>
          <td>
          <textarea rows="3" cols="100" id="benefits" name="benefits"
          defaultValue={saveAdvertState.benefits}
          onChange={(event) => {
            fieldChanged(event);
          }}
          />
          </td>
        </tr>
        {/* <tr>
          <td>file:</td>
          <td>
            <input type="text" id="file" name="file" />
          </td>
        </tr> */}
        <tr>
          <td>state:</td>
          <td>
            <input type="text" id="state" name="state" 
             defaultValue={saveAdvertState.state}
             onChange={(event) => {
               fieldChanged(event);
             }}
            />
          </td>
        </tr>
        {/* <tr>
          <td>student:</td>
          <td>
            <input type="text" id="student" name="student" />
          </td>
        </tr> */}
        <tr>
          <td></td>
          <td>
            <input type="button" value="submmit" onClick={addadvert}/>
          </td>
        </tr>
      </table>
    </div>
  );
}
