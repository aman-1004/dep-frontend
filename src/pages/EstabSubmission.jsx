import React from "react";
import EstabTable from "../components/EstabTable";
import CommentBox from "../components/CommentBox";
import Modal from "../components/Modal";
import ReviewApplication from "./ReviewApplication";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-hot-toast";

export default function EstabSubmission() {
  const { id } = useParams();

  const handleEstabResponse = (res) => {
    if (res == 200) {
      useNavigate("/establish/pending");
    } else {
      toast("You are not authorized");
    }
  };

  const estabOnAccept = (e) => {
    const estabData = {};
    const status = "ACCEPT";
    const estabBlockYear = document.querySelector('[name="blockYear"]');
    const estabComment = document.querySelector('[name="comment"]');
    estabData["blockYear"] = estabBlockYear.value;
    estabData["comment"] = estabComment.value;
    estabData["status"] = status;
    estabData["formId"] = id;

    console.log(estabData);

    fetch("/api/submitEstabData", {
      method: "POST",
      data: JSON.stringify(estabData),
    }).then(handleEstabResponse);
  };

  const estabOnReview = (e) => {
    const estabData = {};
    const status = "REJECT";
    const estabBlockYear = document.querySelector('[name="blockYear"]');
    const estabComment = document.querySelector('[name="comment"]');
    estabData["blockYear"] = estabBlockYear.value;
    estabData["comment"] = estabComment.value;
    estabData["status"] = status;
    estabData["formId"] = id;

    console.log(estabData);

    fetch("/api/submitEstabData", {
      method: "POST",
      body: JSON.stringify(estabData),
      headers : {
        'Content-Type': 'application/json'
     },
    }).then(handleEstabResponse);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <h3>FOR USE OF ESTABLISHMENT SECTION</h3>
        <Modal>
          <ReviewApplication />
        </Modal>
        <EstabTable />
        <CommentBox onAccept={estabOnAccept} onReview={estabOnReview} />
      </div>
    </>
  );
}
