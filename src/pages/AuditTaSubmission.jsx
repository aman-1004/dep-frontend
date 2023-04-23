import React from "react";
import CommentBox from "../components/CommentBox.jsx";
import Modal from "../components/Modal.jsx";
import ReviewTaApplication from "./ReviewTaApplication.jsx";
import { useNavigate,useParams} from "react-router";
import { toast } from "react-hot-toast";

export default function AuditTaSubmission() {

  const { id } =useParams();

  const handleAuditTaResponse = (res) => {
    if (res == 200) {
      useNavigate("/audit/pendingTa");
    } else {
      toast("You are not authorized");
    }
  };


  const auditOnTaAccept = (e) => {
    const auditTaData = {};
    const status = "ACCEPT";
    const auditTaComment = document.querySelector('[name="comment"]');
    auditTaData["comment"] = auditTaComment.value;
    auditTaData["status"] = status;
    auditTaData["formId"] = id;

    console.log(auditTaData);

    fetch("/api/submitAuditTaData", {
      method: "POST",
      body: JSON.stringify(auditTaData),
      headers : {
        'Content-Type': 'application/json'
     },
    }).then(handleAuditTaResponse);

    console.log(auditTaData);
  };

  const auditOnTaReview = (e) => {
    const auditTaData = {};
    const status = "REVIEW";
    const auditTaComment = document.querySelector('[name="comment"]');
    auditTaData["comment"] = auditTaComment.value;
    auditTaData["status"] = status;
    auditTaData["formId"] = id;

    console.log(auditTaData);

    fetch("/api/submitAuditTaData", {
      method: "POST",
      data: JSON.stringify(auditTaData),
    }).then(handleAuditTaResponse);

    console.log(auditTaData);
  };

  return (
    <>
      <h3 className="font-semibold text-xl text-gray-900 m-4 flex mx-auto">For use by the Audit Section</h3>
      <Modal>
        <ReviewTaApplication />
      </Modal>
      <CommentBox  onAccept={auditOnTaAccept} onReview={auditOnTaReview} />
    </>
  );
}
