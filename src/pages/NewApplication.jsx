import Form from "../components/Form.jsx";
import InputGroup from "../components/InputGroup.jsx";
import Input from "../components/Input.jsx";
import Table from "../components/Table.jsx";
import { useContext, useRef, useState } from "react";
import EstabSubmission from "./EstabSubmission.jsx";
import AccountsSubmission from "./AccountsSubmission.jsx";
import CommentBox from "../components/CommentBox.jsx";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { LoginContext } from "../LoginContext.jsx";
import DateRangePicker from "flowbite-datepicker/DateRangePicker";

// import { DateRangePicker } from "react-date-range";
// import { DateRangePicker } from "react-date-range";
// import 'react-daterange-picker/dist/css/react-calendar.css';

export default function NewApplication() {
  const [user, setUser] = useContext(LoginContext);
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();
  const [dates, setDates] = useState([]);

  const handleSelect = (dates) => {
    setDates(dates);
  };

  console.log("user is", user);

  const imageRef = useRef(null);
  const handleRes = (res) => {
    if (res.status == 200) {
      navigate("/applicant/live");
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

    toast("Application Submitted");
    const formData = {};
    const inputs = e.target.querySelectorAll("input");
    // formData['name'] = inputs[0].value;
    for (let i = 0; i < 16; i++) {
      formData[arr[i]] = inputs[i].value;
    }

    // const d1=inputs[5].value;
    // const d2=inputs[6].value;

    formData["advanceRequired"] = document.querySelector(
      '[name="advanceRequired"]'
    ).checked;
    formData["encashmentAvailed"] = document.querySelector(
      '[name="encashment"]'
    ).checked;
    formData["encashmentNoOfDays"] = document.querySelector(
      '[name="encashmentDays"]'
    ).value;
    formData["certification"] = document.querySelector(
      '[name="certification"]'
    ).value;

    formData["peopleInvolved"] = people;
    formData["stageCurrent"] = 1;
    formData["stageRedirect"] = null;

    // a =
    let fd = new FormData();
    fd.append("json", JSON.stringify(formData));
    for (let image of imageRef.current.files) {
      fd.append("file", image);
    }
    fetch("/api/createNewLTCApplications", {
      method: "POST",
      body: fd,
    }).then(handleRes);
  };

  return (
    <div className="bg-yellow-50">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="font-semibold text-xl text-gray-900 p-4 flex mx-auto">
          New Application
        </h3>
        <Form onSubmit={ltcSubmitHandler}>
          <InputGroup>
            <div className="m-4 grid gap-6 mb-1 md:grid-cols-2 xl:grid-cols-4">
              <Input
                label={"Name"}
                name="name"
                type="text"
                value={`${user.firstName} ${user.lastName}`}
                required
              />
              <Input
                label={"Designation"}
                name="Designation"
                type="text"
                value={user.designation}
                required
              />
              <Input
                label={"Date of Joining"}
                name="date"
                type="date"
                value={new Date(user.dateOfJoining)
                  .toISOString()
                  .substring(0, 10)}
                required
              />
              <Input
                label={"Pay Level"}
                name="payLevel"
                type="number"
                value={user.payLevel}
                required
              />
            </div>
            <h3 className="font-semibold text-l m-4 text-gray-900">
              Leave Details
            </h3>
            <div
              className="m-4 grid gap-6 mb-1 md:grid-cols-2 
xl:grid-cols-4"
            >
              {/* <DateRangePicker label="Journey Duration"/> */}
              {/* <DateRangePicker onSelect={handleSelect} value={dates} /> */}
              <Input
                label={"Earned Leave Availed"}
                name="earnedLeave"
                type="number"
                required
              />
              <Input label={"From"} name="leaveFrom" type="date" required />
              <Input label={"To"} name="leaveTo" type="date" required />
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

              <div className="flex ml-4 justify-around items-center"></div>
            </div>
            <div
              className="m-4 grid gap-6 mb-1 md:grid-cols-2 
xl:grid-cols-4"
            >
              <Input label={"Home Town"} name="homeTown" type="text" required />
              <Input
                label={"Nature of Visiting Place"}
                name="visitNature"
                type="text"
                required
              />
              <Input
                label={"Visiting Place"}
                name="visitPlace"
                type="text"
                required
              />
              <Input
                label={"Total Estimated Fare"}
                name="estimatedFare"
                type="number"
                required
              />
            </div>
          </InputGroup>

          <InputGroup>
            <h3 className="font-semibold text-l text-gray-900 m-4 flex">
              Details of People involved in LTC
            </h3>

            <div className="-z-50">
              <Table
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
            </div>
            <div className="flex ml-4 justify-center space-x-10 items-center my-4">
              <h3 className="font-semibold">Spouse Entitled for LTC</h3>
              <Input
                className="mt-2"
                label={""}
                name="spouseEntitled"
                type="checkbox"
              />
              <h3 className="font-semibold">Advance Required</h3>
              <span className="mt-2">
                <Input
                  className=""
                  label={""}
                  name="advanceRequired"
                  type="checkbox"
                />
              </span>
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
            <input ref={imageRef} name="file" type="file" multiple />
            <div className="flex ml-4 justify-start space-x-10 items-center my-8">
              <p className="font-semibold">
                The information, as given above is true to the best of my
                knowledge and belief
              </p>

              <Input name="certification" type="checkbox" required />
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
    </div>
  );
}
