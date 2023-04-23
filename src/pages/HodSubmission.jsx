import React from "react";
import CommentBox from "../components/CommentBox.jsx";
import Modal from "../components/Modal.jsx";
import ReviewApplication from "./ReviewApplication.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form.jsx";
import { toast } from 'react-hot-toast';

export default function HodSubmission() {
  const { id } = useParams();

  const handleHodResponse = (res) => {
    if (res == 200) {
      useNavigate("/hod/pending");
    } else {
      toast("You are not authorized");
    }
  };

  const hodOnAccept = (e) => {
    const hodData = {};
    const status = "ACCEPT";
    const hodComment = document.querySelector('[name="comment"]');
    hodData["comment"] = hodComment.value;
    hodData["status"] = status;
    hodData["formId"] = id;

    console.log(hodData);

    fetch("/api/submitHodData", {
      method: "POST",
      body: JSON.stringify(hodData),
      headers : {
        'Content-Type': 'application/json'
     },
    }).then(handleHodResponse);

    console.log(hodData);
  };

  const hodOnReview = (e) => {
    const hodData = {};
    const status = "REVIEW";
    const hodComment = document.querySelector('[name="comment"]');
    hodData["comment"] = hodComment.value;
    hodData["status"] = status;
    hodData["formId"] = id;

    console.log(hodData);

    fetch("/api/submitHodData", {
      method: "POST",
      data: JSON.stringify(hodData),
    }).then(handleHodResponse);

    console.log(hodData);
  };

  return (
    <Form>
      <h3 className="font-semibold text-xl text-gray-900 m-4 flex mx-auto">For use by the Head of the Department</h3>
      <Modal>
        <ReviewApplication />
      </Modal>
      <CommentBox onAccept={hodOnAccept} onReview={hodOnReview} />
    </Form>
  );
}
