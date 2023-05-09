import { Input } from "postcss";
import React, { useState } from "react";
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
  const handleNameChange = (e) => {
    setNameFilter(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmailFilter(e.target.value)
  }
  const handleOrderChange = (e) => {
    setSortOrder(e.target.value)
  }
  const [nameFilter, setNameFilter] = useState('')
  const [emailFilter, setEmailFilter] = useState('')
  const [sortOrder, setSortOrder] = useState(-1)
  const filterData = [...props.data].sort((a, b) => (new Date(a.fillDate) - new Date(b.fillDate)) * sortOrder).filter(item => (item.user.firstName + " " + item.user.lastName).includes(nameFilter)).filter(item => item.user.emailId.includes(emailFilter))

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-xl mx-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="2xl:text-lg text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="2xl:text-lg text-gray-700 uppercase bg-gray-50">Application Id</th>
              <th scope="col" className="px-6 py-3">
                User Email
                <input type="text" onChange={handleEmailChange} /> </th>
              <th scope="col" className="px-6 py-3">
                Name
                <input type="text" onChange={handleNameChange} /> </th>
              <th scope="col" className="px-6 py-3">
                Created On
                <select onChange={handleOrderChange}>
                  <option value={-1}> Newest First </option>
                  <option value={1}> Oldest First </option>
                </select></th>
              <th scope="col" className="px-6 py-3">Form</th>
            </tr>
          </thead>
          {filterData.map((item) => {
            return (
              <tbody key={Math.random()}>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.id}</th>
                  <td className="px-6 py-4">{item.user.emailId}</td>
                  <td className="px-6 py-4">{item.user.firstName + " " + item.user.lastName}</td>
                  <td className="px-6 py-4">{item.fillDate}</td>
                  <td className="px-6 py-4">
                    <Link to={`../view/${item.id}`} className="text-blue-500 font-semibold hover:underline">View Application </Link>
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
    </>
  );
}

export default PendingTable;
