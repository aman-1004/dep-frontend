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

function LiveTable(props) {
  console.log(props.data);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-xl mx-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="2xl:text-lg text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Application Id
            </th>
            {/* <th>User Email</th>
            <th>Name</th> */}
            <th scope="col" className="px-6 py-3">
              Created On
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Form
            </th>
          </tr>
        </thead>
        {props.data.map((item) => {
          return (
            <tbody key={Math.random()}>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.id}
                </th>
                {/* <td>{item.user.emailId}</td>
                <td>{item.user.firstName + " " + item.user.lastName}</td> */}
                <td className="px-6 py-4">{item.fillDate}</td>
                <td className="px-6 py-4">{stageName[item.stageCurrent]}</td>
                <td className="px-6 py-4">
                  <Link to={`/applicant/view/${item.id}`} className="text-blue-500 font-semibold">View Application</Link>
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

export default LiveTable;
