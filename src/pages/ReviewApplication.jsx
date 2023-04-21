import Form from "../components/Form.jsx";
import InputGroup from "../components/InputGroup.jsx";
import Input from "../components/Input.jsx";
import Table from "../components/Table.jsx";
import { useParams } from "react-router";
import { useState } from "react";
import EstabSubmission from "./EstabSubmission.jsx";
import AccountsSubmission from "./AccountsSubmission.jsx";
import CommentBox from "../components/CommentBox.jsx";
// import { user1 } from "../dummy/user.js";
import { ltcInfo } from "../dummy/ltcInfos.js";

export default function ReviewApplication() {
  const [ltcData, setLtcData] = useState(ltcInfo[0]);
  const [people, setPeople] = useState(ltcData.peopleInvolved);
  console.log(ltcData);
  return (
    <>
      <Form
        onSubmit={() => {
          console.log("Submitting Form");
        }}
      >
        <InputGroup>
          <Input
            readOnly
            label={"Name"}
            name="name"
            type="text"
            value={ltcData.user.firstName + ltcData.user.lastName}
          />
          <Input
            label={"Designation"}
            name="Designation"
            type="text"
            value={ltcData.user.role.designation}
          />
          <Input
            label={"Date of Joining"}
            name="date"
            type="date"
            value={ltcData.user.dateOfJoining}
          />
          <Input
            label={"Pay Level"}
            name="payLevel"
            type="number"
            value={ltcData.user.role.payLevel}
          />
          <h3>Leave Details</h3>
          <Input
            label={"Earned Leave Availed"}
            name="earnedLeave"
            type="number"
            value={ltcData.earnedLeaveAvailed}
          />
          <Input
            label={"From"}
            name="leaveFrom"
            type="date"
            value={new Date(ltcData.fromDate).toISOString().substring(0, 10)}
          />
          <Input
            label={"To"}
            name="leaveTo"
            type="date"
            value={new Date(ltcData.toDate).toISOString().substring(0, 10)}
          />
          <h3>Prefix Details</h3>
          <Input
            label={"From"}
            name="prefixFrom"
            type="date"
            value={new Date(ltcData.prefixFrom).toISOString().substring(0, 10)}
          />
          <Input
            label={"To"}
            name="prefixTo"
            type="date"
            value={new Date(ltcData.prefixTo).toISOString().substring(0, 10)}
          />
          <h3>Suffix Details</h3>
          <Input
            label={"From"}
            name="suffixFrom"
            type="date"
            value={new Date(ltcData.suffixFrom).toISOString().substring(0, 10)}
          />
          <Input
            label={"To"}
            name="suffixTo"
            type="date"
            value={new Date(ltcData.suffixTo).toISOString().substring(0, 10)}
          />
          <Input
            readOnly
            label={"Spouse Entitled for LTC"}
            name="spouseEntitled"
            type="checkbox"
            value={ltcData.spouseEntitled}
          />
          <Input
            label={"Home Town"}
            name="homeTown"
            type="text"
            value={ltcData.user.hometown}
          />
          <Input
            label={"Nature of Visiting Place"}
            name="visitNature"
            type="text"
            value={ltcData.natureOfTravel}
          />
          <Input
            label={"Visiting Place"}
            name="visitPlace"
            type="text"
            value={ltcData.placeToVisit}
          />
          <Input
            label={"Total Estimated Fare"}
            name="estimatedFare"
            type="number"
            value={ltcData.totalEstimatedFare}
          />
        </InputGroup>

        <InputGroup>
          <h3>Details of People involved in LTC</h3>
          <Table
            readOnly={true}
            fields={[
              { heading: "Name", type: "text" },
              { heading: "Age", type: "number" },
              { heading: "Relation", type: "text" },
              { heading: "From", type: "text", stateKey: "fromPlace" },
              { heading: "To", type: "text", stateKey: "toPlace" },
              { heading: "Back", type: "checkbox" },
              {
                heading: "Mode Of Travel",
                type: "text",
                stateKey: "modeOfTravel",
              },
            ]}
            data={people}
            setData={setPeople}
          />
          <Input
            readOnly
            label={"Advance Required"}
            name="advanceRequired"
            type="checkbox"
            value={ltcData.advanceRequired}
          />
          <h3>Details for Encashment of Earned Leave</h3>
          <Input
            label={"Encashment Required"}
            name="encashment"
            type="checkbox"
            checked={ltcData.encashmentAvailed}
          />
          <Input
            label={"No. of Days"}
            name="encashmentDays"
            type="number"
            value={ltcData.encashmentNoOfDays}
          />
          <p>
            The information, as given above is true to the best of my knowledge
            and belief{" "}
            <Input name="certification" type="checkbox" value={true} />
          </p>
        </InputGroup>
      </Form>
      {/* <EstabSubmission /> */}
      {/* <AccountsSubmission /> */}
      {/* <CommentBox /> */}
    </>
  );
}
