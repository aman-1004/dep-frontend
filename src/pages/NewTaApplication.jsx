import Form from "../components/Form.jsx";
import InputGroup from "../components/InputGroup.jsx";
import Input from "../components/Input.jsx";
import Table from "../components/Table.jsx";
import { useState } from "react";
import EstabSubmission from "./EstabSubmission.jsx";
import AccountsSubmission from "./AccountsSubmission.jsx";
import CommentBox from "../components/CommentBox.jsx";
import ReviewTaApplication from "./ReviewTaApplication.jsx";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function NewTaApplication() {
    const [peopleInTa, setPeopleInTa] = useState([]);
    const [journeyDetails,setJourneyDetails] =useState([]);

    const handleTaRes = (res) => {
      if (res.status == 200) {
        useNavigate("/applicant/liveTa");
      } else {
        toast("You are not authorized");
      }
    };
  
    const taSubmitHandler = (e) => {
      const arr = [
        "name",
        "empCode",
        "payLevel",
        "Designation",
        "department",
        "date",
        "leaveFrom",
        "leaveTo",
        "advanceDrawnAmount",
        "advanceDrawnDate",
        "accountNo",
        "totalAmount",
        "certification",
      ];
  
      // console.log(e.target.querySelectorAll("input"));
      const taFormData = {};
      const inputs = e.target.querySelectorAll("input");
      // console.log(inputs);
      // formData['name'] = inputs[0].value;
      for (let i = 0; i < 13; i++) {
        taFormData[arr[i]] = inputs[i].value;
      }
      taFormData["peopleInvolved"] = peopleInTa;
      taFormData["journeyDetails"] = journeyDetails;
      taFormData["stageCurrent"]= 1;
      taFormData["stageRedirect"]=null;
      console.log(taFormData);
      // a =
  
      fetch("/api/createNewTAApplication", {
        method: "POST",
        body: JSON.stringify(taFormData),
        headers : {
          'Content-Type': 'application/json'
       },
      }).then(handleTaRes);
    };

    return (
      <>
              <div className="max-w-screen-xl mx-auto">
        <h3 className="font-semibold text-xl text-gray-900 m-4 flex">New TA Application</h3>
        <Form onSubmit={taSubmitHandler}
        >
          <InputGroup>
          <div className='m-4 grid gap-6 mb-1 md:grid-cols-2 xl:grid-cols-4'>

            <Input label={"Name"} name="name" type="text"  />
            <Input label={"Emp. Code"} name="empCode" type="number"  />
            <Input label={"Pay Level"} name="payLevel" type="number" />
            <Input label={"Designation"} name="Designation" type="text" />
            <Input label={"Department"} name="department" type="text" />
            <Input label={"Date of Joining"} name="date" type="date" /> 
            </div>
            <h3 className="font-semibold text-l text-gray-900 m-4 flex">Leave Details</h3>
            <div className='m-4 grid gap-6 mb-1 md:grid-cols-2 xl:grid-cols-4'>            {/* <Input label={"Earned Leave Availed"} name="earnedLeave" type="number" /> */}
            <Input label={"From"} name="leaveFrom" type="date" />
            <Input label={"To"} name="leaveTo" type="date" />
            {/* <h3>Prefix Details</h3>
            <Input label={"From"} name="prefixFrom" type="date" />
            <Input label={"To"} name="prefixTo" type="date" />
            <h3>Suffix Details</h3>
            <Input label={"From"} name="suffixFrom" type="date" />
            <Input label={"To"} name="suffixTo" type="date" /> */}
            {/* <Input
              label={"Spouse Entitled for LTC"}
              name="spouseEntitled"
              type="checkbox"
            /> */}
            <Input label={"Advance Drawn"} name="advanceDrawnAmount" type="number" />
            <Input label={"Advance Drawn Date"} name="advanceDrawnDate" type="date" />
            {/* <Input label={"Home Town"} name="homeTown" type="text" /> */}
            <Input label={"Bank Account No. (SBI/Any other):"} name="accountNo" type="number" />
            {/* <Input
              label={"Nature of Visiting Place"}
              name="visitNature"
              type="text"
            />
            <Input label={"Visiting Place"} name="visitPlace" type="text" />
            <Input
              label={"Total Estimated Fare"}
              name="estimatedFare"
              type="number"
            /> */}
            </div>
          </InputGroup>
  
          <InputGroup>
            <h3 className="font-semibold text-l text-gray-900 m-4 flex">Particulars of the claimant and family in respect of whom the Leave Travel Concession has been claimed:</h3>
            <Table
              fields={[
                { heading: "Name", type: "text" },
                { heading: "Age", type: "number" },
                { heading: "Relation", type: "text" },
                // { heading: "From", type: "text" },
                // { heading: "To", type: "text" },
                // { heading: "Back", type: "checkbox" },
                // { heading: "Mode Of Travel", type: "text" },
              ]}
              data={peopleInTa}
              setData={setPeopleInTa}
            />
            {/* <Input
              label={"Advance Required"}
              name="advanceRequired"
              type="checkbox"
            />
            <h3>Details for Encashment of Earned Leave</h3>
            <Input
              label={"Encashment Required"}
              name="encashment"
              type="checkbox"
            />
            <Input label={"No. of Days"} name="encashmentDays" type="number" /> */}

            <h3 className="font-semibold text-l text-gray-900 m-4 flex">Details of journey(s) performed by Government Employee and the members of his/her family:</h3>
            <Table
              fields={[
                { heading: "Departure Date", type: "date" },
                { heading: "Departure From", type: "text" },
                { heading: "Arrival Date", type: "date" },
                { heading: "Arrival To", type: "text" },
                { heading: "Distance in Kms", type: "number" },
                { heading: "Mode Of Travel", type: "text" },
                { heading: "Class of Travel", type: "text" },
                { heading: "No. of Fares", type: "number" },
                { heading: "Total Fare Paid", type: "number" },
                { heading: "Ticket No./PNR/Remarks", type: "text" },
              ]}
              data={journeyDetails}
              setData={setJourneyDetails}
            />

<div className="m-4 grid gap-6 mb-1 md:grid-cols-2 xl:grid-cols-4">
            <Input label={"Total"} name="totalAmount" type="number" />

            </div>


            <h3 className="font-semibold text-l text-gray-900 m-4 flex">CERTIFIED THAT:</h3>
            <div className='flex ml-4 justify-start space-x-10 items-center my-8'>
            <p className="font-semibold">
              The information, as given above is true to the best of my knowledge
              and belief 
            </p>
            <Input name="certification" type="checkbox" />
            </div>
            <div className='flex ml-4 justify-center space-x-10 items-center my-8'>
            <Input className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"  type="submit" />
            </div>
            
            
          </InputGroup>
        </Form>
        {/* <EstabSubmission /> */}
        {/* <AccountsSubmission /> */}
        {/* <CommentBox /> */}
 
        {/* <ReviewTaApplication /> */}
         </div>
      </>
    );
}
