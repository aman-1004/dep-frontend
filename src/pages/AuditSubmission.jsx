import React from 'react'
import CommentBox from "../components/CommentBox.jsx"
import Modal from '../components/Modal.jsx'
import ReviewApplication from './ReviewApplication.jsx'
import { useNavigate,useParams} from "react-router";
import { toast } from "react-hot-toast";

export default function AuditSubmission() {
  const { id } =useParams();

  const handleAuditResponse = (res) => {
    if (res == 200) {
      useNavigate("/audit/pending");
    } else {
      toast("You are not authorized");
    }
  };


  const auditOnAccept = (e) => {
    const auditData = {};
    const status = "ACCEPT";
    const auditComment = document.querySelector('[name="comment"]');
    auditData["comment"] = auditComment.value;
    auditData["status"] = status;
    auditData["formId"] = id;

    console.log(auditData);

    fetch("/api/submitAuditData", {
      method: "POST",
      data: JSON.stringify(auditData),
    }).then(handleAuditResponse);

    console.log(auditData);
  };

  const auditOnReview = (e) => {
    const auditData = {};
    const status = "REVIEW";
    const auditComment = document.querySelector('[name="comment"]');
    auditData["comment"] = auditComment.value;
    auditData["status"] = status;
    auditData["formId"] = id;

    console.log(auditData);

    fetch("/api/submitAuditData", {
      method: "POST",
      body: JSON.stringify(auditData),
      headers : {
        'Content-Type': 'application/json'
     },
    }).then(handleAuditResponse);

    console.log(auditData);
  };


  return (
    <>
      <div className="max-w-screen-xl mx-auto">
    <Modal>
        <ReviewApplication />
      </Modal>
      <CommentBox onAccept={auditOnAccept} onReview={auditOnReview} />
      </div>
    </>
    
  )
}
