import React from 'react'
import EstabTaTable from '../components/EstabTaTable'
import ReviewTaApplication from './ReviewTaApplication' 
import CommentBox from '../components/CommentBox'
import Modal from "../components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form.jsx";
import { toast } from 'react-hot-toast';

export default function HodTaSubmission() {

  const { id } = useParams();

  const handleHodTaResponse = (res) => {
    if (res == 200) {
      useNavigate("/hod/pendingTa");
    } else {
      toast("You are not authorized");
    }
  };

  const hodOnTaAccept = (e) => {
    const hodTaData = {};
    const status = "ACCEPT";
    const hodTaComment = document.querySelector('[name="comment"]');
    hodTaData["comment"] = hodTaComment.value;
    hodTaData["status"] = status;
    hodTaData["formId"] = id;

    console.log(hodTaData);

    fetch("/api/submitHodTaData", {
      method: "POST",
      data: JSON.stringify(hodTaData),
    }).then(handleHodTaResponse);

    console.log(hodTaData);
  };

  const hodOnTaReview = (e) => {
    const hodTaData = {};
    const status = "REVIEW";
    const hodTaComment = document.querySelector('[name="comment"]');
    hodTaData["comment"] = hodTaComment.value;
    hodTaData["status"] = status;
    hodTaData["formId"] = id;

    console.log(hodTaData);

    fetch("/api/submitHodTaData", {
      method: "POST",
      data: JSON.stringify(hodTaData),
    }).then(handleHodTaResponse);

    console.log(hodTaData);
  };

  return (
    <>
    <h3>For use by the  Head of the Department</h3>
      <Modal>
        <ReviewTaApplication />
      </Modal>
      <CommentBox onAccept={hodOnTaAccept} onReview={hodOnTaReview}  />
    </>
  )
}
