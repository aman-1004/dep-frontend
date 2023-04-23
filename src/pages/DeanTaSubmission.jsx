import React from 'react'
import CommentBox from "../components/CommentBox.jsx"
import Modal from '../components/Modal.jsx'
import ReviewTaApplication from './ReviewTaApplication.jsx'
import { useNavigate,useParams} from "react-router";
import { toast } from "react-hot-toast";

export default function DeanTaSubmission() {

  const { id } =useParams();

  const handleDeanTaResponse = (res) => {
    if (res == 200) {
      useNavigate("/dean/pendingTa");
    } else {
      toast("You are not authorized");
    }
  };


  const deanOnTaAccept = (e) => {
    const deanTaData = {};
    const status = "ACCEPT";
    const deanTaComment = document.querySelector('[name="comment"]');
    deanTaData["comment"] = deanTaComment.value;
    deanTaData["status"] = status;
    deanTaData["formId"] = id;

    console.log(deanTaData);

    fetch("/api/submitDeanTaData", {
      method: "POST",
      data: JSON.stringify(deanTaData),
    }).then(handleDeanTaResponse);

    console.log(deanTaData);
  };

  const deanOnTaReview = (e) => {
    const deanTaData = {};
    const status = "REVIEW";
    const deanTaComment = document.querySelector('[name="comment"]');
    deanTaData["comment"] = deanTaComment.value;
    deanTaData["status"] = status;
    deanTaData["formId"] = id;

    console.log(deanTaData);

    fetch("/api/submitDeanTaData", {
      method: "POST",
      body: JSON.stringify(deanTaData),
      headers : {
        'Content-Type': 'application/json'
     },
    }).then(handleDeanTaResponse);

    console.log(deanTaData);
  };

  return (
    <>
    <Modal>
        <ReviewTaApplication />
      </Modal>
      <CommentBox  onAccept={deanOnTaAccept} onReview={deanOnTaReview}   />
    </>
    
  )
}
