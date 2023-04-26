import Form from "../components/Form.jsx";
import InputGroup from "../components/InputGroup.jsx";
import Input from "../components/Input.jsx";
import Table from "../components/Table.jsx";
import { useContext, useState } from "react";
import EstabSubmission from "./EstabSubmission.jsx";
import AccountsSubmission from "./AccountsSubmission.jsx";
import CommentBox from "../components/CommentBox.jsx";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { LoginContext } from "../LoginContext.jsx";

export default function NewApplication() {
  const [user, setUser] = useContext(LoginContext);
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();
  const handleRes = (res) => {
    if (res.status == 200) {
      navigate("/applicant/live")
    } else {
      toast("You are not authorized");
    }
  };

  const ltcSubmitHandler = (e) => {
    const arr = [
      "name",
      "designation",
      "date",
      "paylevel",
      "earnedLeaveAvailed",
      "fromDate",
      "toDate",
      "prefixFrom",
      "prefixTo",
      "suffixFrom",
      "suffixTo",
      "spouseEntitled",
      "homeTown",
      "natureOfTravel",
      "placeToVisit",
      "totalEstimatedFare",
      "advanceRequired",
      "encashmentAvailed",
      "encashmentNoOfDays",
      "certification",
    ];

    // console.log(e.target.querySelectorAll("input"));
    toast("Here is your toast");
    const formData = {};
    const inputs = e.target.querySelectorAll("input");
    // console.log(inputs);
    // formData['name'] = inputs[0].value;
    for (let i = 0; i < 16; i++) {
      formData[arr[i]] = inputs[i].value;
    }
    formData["advanceRequired"]=document.querySelector('[name="advanceRequired"]').value;
    formData["encashmentAvailed"]=document.querySelector('[name="encashment"]').value;
    formData["encashmentNoOfDays"]=document.querySelector('[name="encashmentDays"]').value;
    formData["certification"]=document.querySelector('[name="certification"]').value;

    formData["peopleInvolved"] = people;
    formData["stageCurrent"] = 1;
    formData["stageRedirect"] = null;
    console.log(people);
    console.log(formData);
    console.log("jsonified", JSON.stringify(formData));

    // a =

    fetch("/api/createNewLTCApplications", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(handleRes);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <h3 className="font-semibold text-xl text-gray-900 m-4 flex mx-auto">
          New Application
        </h3>
        <Form onSubmit={ltcSubmitHandler}>
          <InputGroup>
            <div className="m-4 grid gap-6 mb-1 md:grid-cols-2 xl:grid-cols-4">
              <Input label={"Name"} name="name" type="text" value={`${user.firstName} ${user.lastName}`} />
              <Input label={"Designation"} name="Designation" type="text" value={user.designation}/>
              <Input label={"Date of Joining"} name="date" type="date" value={new Date(user.dateOfJoining).toISOString().substring(0, 10)}/>
              <Input label={"Pay Level"} name="payLevel" type="number" value={user.role.payLevel}/>
            </div>
            <h3 className="font-semibold text-l m-4 text-gray-900">
              Leave Details
            </h3>
            <div
              className="m-4 grid gap-6 mb-1 md:grid-cols-2 
xl:grid-cols-4"
            >
              <Input
                label={"Earned Leave Availed"}
                name="earnedLeave"
                type="number"
              />
              <Input label={"From"} name="leaveFrom" type="date" />
              <Input label={"To"} name="leaveTo" type="date" />
            </div>
            <h3 className="font-semibold text-l m-4 text-gray-900">
              Prefix Details
            </h3>
            <div
              className="m-4 grid gap-6 mb-1 md:grid-cols-2 
xl:grid-cols-4"
            >
              <Input label={"From"} name="prefixFrom" type="date" />
              <Input label={"To"} name="prefixTo" type="date" />
            </div>
            <h3 className="font-semibold text-l m-4 text-gray-900">
              Suffix Details
            </h3>
            <div
              className="m-4 grid gap-6 mb-1 md:grid-cols-2 
            xl:grid-cols-4"
            >
              <Input label={"From"} name="suffixFrom" type="date" />
              <Input label={"To"} name="suffixTo" type="date" />

              <div className="flex ml-4 justify-around items-center">
                <h3 className="font-semibold">Spouse Entitled for LTC</h3>
                <Input
                  className="m-auto"
                  label={""}
                  name="spouseEntitled"
                  type="checkbox"
                />
              </div>
            </div>
            <div
              className="m-4 grid gap-6 mb-1 md:grid-cols-2 
xl:grid-cols-4"
            >
              <Input label={"Home Town"} name="homeTown" type="text" />
              <Input
                label={"Nature of Visiting Place"}
                name="visitNature"
                type="text"
              />
              <Input label={"Visiting Place"} name="visitPlace" type="text" />
              <Input
                label={"Total Estimated Fare"}
                name="estimatedFare"
                type="number"
              />
            </div>
          </InputGroup>

          <InputGroup>
            <h3 className="font-semibold text-l text-gray-900 m-4 flex">
              Details of People involved in LTC
            </h3>
            <Table
              fields={[
                { heading: "Name", type: "text" },
                { heading: "Age", type: "number" },
                { heading: "Relation", type: "text" },
                { heading: "From", type: "text", stateKey: 'fromPlace' },
                { heading: "To", type: "text", stateKey: 'toPlace' },
                { heading: "Back", type: "checkbox" },
                { heading: "Mode Of Travel", type: "text", stateKey: "modeOfTravel" },
              ]}
              data={people}
              setData={setPeople}
            />
            <div className="flex ml-4 justify-center space-x-10 items-center my-4">
              <h3 className="font-semibold">Advance Required</h3>
              <Input
                className="ml-8 mt-6"
                label={""}
                name="advanceRequired"
                type="checkbox"
              />
            </div>
            <h3 className="font-semibold text-l m-4 text-gray-900">
              Details for Encashment of Earned Leave
            </h3>
            <div className="m-4 grid gap-6 mb-1 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex ml-4 justify-start space-x-10 items-center my-4">
                <h3 className="font-semibold">Encashment Required</h3>
                <Input
                  className="ml-8 justify-center"
                  label={""}
                  name="encashment"
                  type="checkbox"
                />
              </div>
              <Input
                label={"No. of Days"}
                name="encashmentDays"
                type="number"
              />
            </div>
            <div className="flex ml-4 justify-start space-x-10 items-center my-8">
              <p className="font-semibold">
                The information, as given above is true to the best of my
                knowledge and belief
              </p>
              <Input name="certification" type="checkbox" />
            </div>

            <div className="flex justify-center">
              <Input
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                type="submit"
              />
            </div>
          </InputGroup>
        </Form>
        {/* <EstabSubmission /> */}
        {/* <AccountsSubmission /> */}
        {/* <CommentBox /> */}
      </div>
    </>
  );
}
