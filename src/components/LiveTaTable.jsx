import React from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal"
// import AdminForm from "./AdminForm";

let stageName = [
  "SENT BACK",
  "PENDING HOD",
  "PENDING JA ESTABLISHMENT",
  "PENDING SUPERINTENDENT",
  "PENDING AR ESTABLISHMENT",
  "PENDING JA ACCOUNTS",
  "PENDING JAO", 
  "PENDING AR", 
  "PENDING ASS AUDIT",
  "PENDING JAO AUDIT",
  "PENDING SR. AUDIT",
  "PENDING REGISTRAR",
  "PENDING DEAN",
];

function LiveTaTable(props) {
  console.log(props.data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Application Id</th>
            {/* <th>User Email</th>
            <th>Name</th> */}
            <th>Created On</th>
            <th>Status</th>
            <th>Form</th>
          </tr>
        </thead>
        {props.data.map((item) => {
          return (
            <tbody key={Math.random()}>
              <tr>
                <th>{item.id}</th>
                {/* <td>{item.user.emailId}</td>
                <td>{item.user.firstName + " " + item.user.lastName}</td> */}
                <td>{item.fillDate}</td>
                <td>{stageName[item.stageCurrent]}</td>
                <td>
                  <Link to={`/user`}>
                    View Application
                  </Link>
                </td>
                {/* <td >
              <Modal>
                  <AdminForm itemIndex={itemIndex}/>
              </Modal>
                  </td> */}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default LiveTaTable;
