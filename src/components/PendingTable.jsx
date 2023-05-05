import React from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal"
// import AdminForm from "./AdminForm";

const stakeHolderType = [
    "applicant",
    "hod",
    "establish",
    "establish",
    "establish",
    "accounts",
    "accounts",
    "accounts",
    "audit",
    "audit",
    "audit",
    "registrar",
    "dean"
  ] 

let stageName = [
  "Sent Back",
  "Pending HOD",
  "Pending Establishment Jr.Assistant",
  "Pending Establishment Superintendent",
  "Pending Establishment DR",
  "Pending Accounts JAA",
  "Pending Accounts AO",
  "Pending Accounts DR",
  "Pending Audit DA",
  "Pending Audit AO",
  "Pending Sr.Audit Officer",
  "Pending Registrar",
  "Pending Dean",
];

function PendingTable(props) {
  console.log(props.data);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-xl mx-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="2xl:text-lg text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="2xl:text-lg text-gray-700 uppercase bg-gray-50">Application Id</th>
            <th scope="col" className="px-6 py-3">User Email</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Created On</th>
            <th scope="col" className="px-6 py-3">Form</th>
          </tr>
        </thead>
        {props.data.map((item) => {
          return (
            <tbody key={Math.random()}>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.id}</th>
                <td className="px-6 py-4">{item.user.emailId}</td>
                <td className="px-6 py-4">{item.user.firstName + " " + item.user.lastName}</td>
                <td className="px-6 py-4">{item.fillDate}</td>
                <td className="px-6 py-4">
                  <Link to={`../view/${item.id}`}  className="text-blue-500 font-semibold hover:underline">View Application </Link>
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

export default PendingTable;
