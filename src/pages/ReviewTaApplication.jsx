import Form from "../components/Form.jsx";
import InputGroup from "../components/InputGroup.jsx";
import Input from "../components/Input.jsx";
import Table from "../components/Table.jsx";
import { useState } from "react";
import EstabSubmission from "./EstabSubmission.jsx";
import AccountsSubmission from "./AccountsSubmission.jsx";
import CommentBox from "../components/CommentBox.jsx";
import { taInfo } from "../dummy/taInfos.js";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function ReviewTaApplication() {
  const { id } = useParams();
  const [taData, setTaData] = useState(taInfo[0]);
  const [people, setPeople] = useState(taData.peopleInvolved);
  const [journey, setJourney] = useState(taData.journeyDetails);


  const handleInfo = (json) => {
    setTaData(json);
    setPeople(json.ltcInfo.peopleInvolved);
    setJourney(json.journeyDetails);
  };

  useEffect(() => {
    fetch("/api/getTAInfo", {
      method: "POST",
      body: JSON.stringify({ taId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(handleInfo);
   
  }, []);

  const totalFare = journey.reduce((total, item) => {
    return total + item.totalFare;
  }, 0);

  return (
    <>
      <h3>New TA Application</h3>
      <Form
        onSubmit={() => {
          /*
              <form method="POST" action="/api/createNewApplication">
  
              </form>
              fetch('/api/createNewApplication', {
                method: "POST",
                data: JSON.stringify(people)
              }).then(res => res.json()).then(json_data => handle(json_date))
            */
        }}
      >
        <InputGroup>
          <Input
            label={"Name"}
            name="name"
            type="text"
            value={taData.user.firstName + taData.user.lastName}
          />
          <Input
            label={"Emp. Code"}
            name="empCode"
            type="number"
            value={taData.user.id}
          />
          <Input
            label={"Pay Level"}
            name="payLevel"
            type="number"
            value={taData.user.payLevel}
          />
          <Input
            label={"Designation"}
            name="Designation"
            type="text"
            value={taData.user.designation}
          />
          <Input
            label={"Department"}
            name="department"
            type="text"
            value={taData.user.department}
          />

          <Input
            label={"Date of Joining"}
            name="date"
            type="date"
            value={new Date(taData.fillDate).toISOString().substring(0, 10)}
          />
          <h3>Leave Details</h3>
          {/* <Input label={"Earned Leave Availed"} name="earnedLeave" type="number" /> */}
          <Input
            label={"From"}
            name="leaveFrom"
            type="date"
            value={new Date(taData.ltcInfo.fromDate)
              .toISOString()
              .substring(0, 10)}
          />
          <Input
            label={"To"}
            name="leaveTo"
            type="date"
            value={new Date(taData.ltcInfo.toDate)
              .toISOString()
              .substring(0, 10)}
          />
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
          <Input
            label={"Advance Drawn"}
            name="advanceDrawnAmount"
            type="number"
            value={taData.ltcInfo.advanceRequired}
          />
          <Input
            label={"Advance Drawn Date"}
            name="advanceDrawnDate"
            type="date"
            value={taData.ltcInfo.advanceDrawnDate ? new Date(taData.ltcInfo.advanceDrawnDate)
              .toISOString()
              .substring(0, 10) : ""}
          />
          {/* <Input label={"Home Town"} name="homeTown" type="text" /> */}
          <Input
            label={"Bank Account No. (SBI/Any other):"}
            name="accountNo"
            type="number"
            value={taData.accountNo ? taData.accountNo:""}
          />
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
        </InputGroup>

        <InputGroup>
          <h3>
            Particulars of the claimant and family in respect of whom the Leave
            Travel Concession has been claimed:
          </h3>
          <Table
            readOnly={true}
            fields={[
              { heading: "Name", type: "text" },
              { heading: "Age", type: "number" },
              { heading: "Relation", type: "text" },
              // { heading: "From", type: "text" },
              // { heading: "To", type: "text" },
              // { heading: "Back", type: "checkbox" },
              // { heading: "Mode Of Travel", type: "text" },
            ]}
            data={people}
            setData={setPeople}
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

          <h3>
            Details of journey(s) performed by Government Employee and the
            members of his/her family:
          </h3>
          <Table
            readOnly={true}
            fields={[
              {
                heading: "Departure Date",
                type: "date",
                stateKey: "departureDate",
              },
              {
                heading: "Departure From",
                type: "text",
                stateKey: "departureFrom",
              },
              {
                heading: "Arrival Date",
                type: "date",
                stateKey: "arrivalDate",
              },
              { heading: "Arrival To", type: "text", stateKey: "arrivalTo" },
              {
                heading: "Distance in Kms",
                type: "number",
                stateKey: "distance",
              },
              {
                heading: "Mode Of Travel",
                type: "text",
                stateKey: "modeOfTravel",
              },
              {
                heading: "Class of Travel",
                type: "text",
                stateKey: "classOfTravel",
              },
              {
                heading: "No. of Fares",
                type: "number",
                stateKey: "noOfFares",
              },
              {
                heading: "Total Fare Paid",
                type: "number",
                stateKey: "totalFare",
              },
              {
                heading: "Ticket No./PNR/Remarks",
                type: "text",
                stateKey: "ticketNo",
              },
            ]}
            data={journey}
            setData={setJourney}
          />

          <Input
            label={"Total"}
            name="totalAmount"
            type="number"
            value={totalFare}
          />

          <h3>CERTIFIED THAT:</h3>
          <p>
            The information, as given above is true to the best of my knowledge
            and belief{" "}
            <Input name="certification" type="checkbox" value={true} />
          </p>

          <Input type="submit" />
        </InputGroup>
      </Form>
      {/* <EstabSubmission /> */}
      {/* <AccountsSubmission /> */}
      {/* <CommentBox /> */}
    </>
  );
}
