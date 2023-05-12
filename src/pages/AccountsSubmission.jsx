import React, { useState } from "react";
import Table from "../components/Table";
import Input from "../components/Input";
import CommentBox from "../components/CommentBox";
import Modal from "../components/Modal";
import ReviewApplication from "./ReviewApplication";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-hot-toast";

export default function AccountsSubmission() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [fares, setFares] = useState([]);  
  console.log(fares)
  const totalFare = fares.reduce((total, item) => {
    return total + item.singleFare * item.noOfFares;
  }, 0);
  const handleAccountsResponse = (res) => {
    if (res.status == 200) {
      navigate("/accounts/pending");
    } else {
      toast("You are not authorized");
    }
  };

  const accountsOnAccept = (e) => {
    const accountsData = {};
    const status = "ACCEPT";
    const totalAccountsRs = document.querySelector('[name="totalRs"]');
    const accountsAdmissibleAdvance = document.querySelector(
      '[name="admissibleAdvance"]'
    );
    const accountsPassedRs = document.querySelector('[name="passedRs"]');
    const accountsTitle = document.querySelector('[name="title"]');
    const accountsComment = document.querySelector('[name="comment"]');
    accountsData["totalRs"] = totalAccountsRs.value;
    accountsData["admissibleAdvance"] = accountsAdmissibleAdvance.value;
    accountsData["passedRs"] = accountsPassedRs.value;
    accountsData["title"] = accountsTitle.value;
    accountsData["comment"] = accountsComment.value;
    accountsData["status"] = status;
    accountsData["formId"] = id;
    accountsData["fares"] = fares;

    fetch("/api/submitAccountsData", {
      method: "POST",
      body: JSON.stringify(accountsData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(handleAccountsResponse);
  };

  const accountsOnReview = (e) => {
    const accountsData = {};
    const status = "REVIEW";
    const totalAccountsRs = document.querySelector('[name="totalRs"]');
    const accountsAdmissibleAdvance = document.querySelector(
      '[name="admissibleAdvance"]'
    );
    const accountsPassedRs = document.querySelector('[name="passedRs"]');
    const accountsTitle = document.querySelector('[name="title"]');
    const accountsComment = document.querySelector('[name="comment"]');
    accountsData["totalRs"] = totalAccountsRs.value;
    accountsData["admissibleAdvance"] = accountsAdmissibleAdvance.value;
    accountsData["passedRs"] = accountsPassedRs.value;
    accountsData["title"] = accountsTitle.value;
    accountsData["comment"] = accountsComment.value;
    accountsData["status"] = status;
    accountsData["formId"] = id;
    accountsData["fares"] = fares;

    accountsData;

    fetch("/api/submitAccountsData", {
      method: "POST",
      body: JSON.stringify(accountsData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(handleAccountsResponse);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Modal>
          <ReviewApplication />
        </Modal>
        <br></br>
        <Table
          fields={[
            { heading: "From", type: "text" , stateKey:"departureFrom"},
            { heading: "To", type: "text", stateKey:"arrivalTo"},
            { heading: "Mode Of Travel", type: "text", stateKey: "modeOfTravel"},
            { heading: "No. of Fares", type: "number", stateKey: "noOfFares"},
            { heading: "Single Fare", type: "number", stateKey: "singleFare"},
          ]}
          data={fares}
          setData={setFares}
        />
        <div className="m-4 grid gap-6 mb-1 md:grid-cols-2 xl:grid-cols-4">
          <Input label={"Total Rs."} name="totalRs" type="number" value={totalFare}/>
          <Input
            label={"Advance Admissible"}
            name="admissibleAdvance"
            type="number"
          />
          <Input label={"Passed For Rs."} name="passedRs" type="number" />
          <Input
            label={"Debitable to LTC Advance Dr./Mr./Mrs./Ms."}
            name="title"
            type="text"
          />
        </div>
        <CommentBox onAccept={accountsOnAccept} onReview={accountsOnReview} />
      </div>
    </>
  );
}
