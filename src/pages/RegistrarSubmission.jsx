import React from 'react'
import CommentBox from "../components/CommentBox.jsx"
import Modal from '../components/Modal.jsx'
import ReviewApplication from './ReviewApplication.jsx'
import { useNavigate,useParams} from "react-router";
import { toast } from "react-hot-toast";

export default function RegistrarSubmission() {

  const { id } =useParams();

  const handleRegistrarResponse = (res) => {
    if (res == 200) {
      useNavigate("/registrar/pending");
    } else {
      toast("You are not authorized");
    }
  };


  const registrarOnAccept = (e) => {
    const registrarData = {};
    const status = "ACCEPT";
    const registrarComment = document.querySelector('[name="comment"]');
    registrarData["comment"] = registrarComment.value;
    registrarData["status"] = status;
    registrarData["formId"] = id;

    console.log(registrarData);

    fetch("/api/submitRegistrarData", {
      method: "POST",
      data: JSON.stringify(registrarData),
    }).then(handleRegistrarResponse);

    console.log(registrarData);
  };

  const registrarOnReview = (e) => {
    const registrarData = {};
    const status = "REVIEW";
    const registrarComment = document.querySelector('[name="comment"]');
    registrarData["comment"] = registrarComment.value;
    registrarData["status"] = status;
    registrarData["formId"] = id;

    console.log(registrarData);

    fetch("/api/submitRegistrarData", {
      method: "POST",
      data: JSON.stringify(registrarData),
    }).then(handleRegistrarResponse);

    console.log(registrarData);
  };

  return (
    <>
     <h3>For use by the Registrar</h3>
    <Modal>
        <ReviewApplication />
      </Modal>
      <CommentBox onAccept={registrarOnAccept} onReview={registrarOnReview}  />
    </>
    
  )
}
