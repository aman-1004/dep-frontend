import React from 'react'
import CommentBox from "../components/CommentBox.jsx"
import Modal from '../components/Modal.jsx'
import ReviewApplication from './ReviewApplication.jsx'
import { useNavigate,useParams} from "react-router";
import { toast } from "react-hot-toast";

export default function DeanSubmission() {

  const { id } =useParams();

  const handleDeanResponse = (res) => {
    if (res == 200) {
      useNavigate("/dean/pending");
    } else {
      toast("You are not authorized");
    }
  };


  const deanOnAccept = (e) => {
    const deanData = {};
    const status = "ACCEPT";
    const deanComment = document.querySelector('[name="comment"]');
    deanData["comment"] = deanComment.value;
    deanData["status"] = status;
    deanData["formId"] = id;

    console.log(deanData);

    fetch("/api/submitDeanData", {
      method: "POST",
      data: JSON.stringify(deanData),
    }).then(handleDeanResponse);

    console.log(deanData);
  };

  const deanOnReview = (e) => {
    const deanData = {};
    const status = "REVIEW";
    const deanComment = document.querySelector('[name="comment"]');
    deanData["comment"] = deanComment.value;
    deanData["status"] = status;
    deanData["formId"] = id;

    console.log(deanData);

    fetch("/api/submitDeanData", {
      method: "POST",
      data: JSON.stringify(deanData),
    }).then(handleDeanResponse);

    console.log(deanData);
  };

  return (
    <>
     <h3>For use by the Dean</h3>
    <Modal>
        <ReviewApplication />
      </Modal>
      <CommentBox onAccept={deanOnAccept} onReview={deanOnReview}  />
    </>
    
  )
}
