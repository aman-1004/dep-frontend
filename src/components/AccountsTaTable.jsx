import React from "react";
import Input from "./Input";
import EstabRow from "./EstabRow";
// import { ltcInfoOld } from "../dummy/ltcInfosOld";
import { taInfo } from "../dummy/taInfos";
import AccountsTaRow from "./AccountsTaRow";

export default function AccountsTaTable() {
  //   const taData = taInfo[0];
  //   const ltcDataOld = ltcInfoOld[0];
  return (
    <>
      {/* <Input label={"Date of Joining"} name="joining date" type="date" value={ltcData.user.dateOfJoining}/>
      <Input label={"Block Year"} name="blockYear" type="text" /> */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-gray-500 ">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50">SI. No.</th>
            <th scope="col" className="px-6 py-3 ">Particulars</th>
            <th scope="col" className="px-6 py-3 bg-gray-50">Amount</th>
            {/* <th>Current LTC</th> */}
          </tr>

          <AccountsTaRow
            serialNo={"1."}
            particulars={"Air Fare"}
            name={"airFare"}
            type={"number"}
          />

          <AccountsTaRow
            serialNo={"2."}
            particulars={"Train Fare"}
            name={"trainFare"}
            type={"number"}
          />

          <AccountsTaRow
            serialNo={"3."}
            particulars={"Bus Fare"}
            name={"busFare"}
            type={"number"}
          />

          <AccountsTaRow
            serialNo={"4."}
            particulars={"Other if any"}
            name={"otherFare"}
            type={"number"}
          />

          <AccountsTaRow
            serialNo={"5."}
            particulars={"Total (1 to 4)"}
            name={"totalFare"}
            type={"number"}
          />

          <AccountsTaRow
            serialNo={"6."}
            particulars={"Advance if any to be deducted"}
            name={"advanceDeduction"}
            type={"number"}
          />


          <AccountsTaRow
            serialNo={"7."}
            particulars={"Net amount to be reimbursed to the Claimant (5-6)"}
            name={"netReimbursement"}
            type={"number"}
          />

        </table>
      </div>
    </>
  );
}
