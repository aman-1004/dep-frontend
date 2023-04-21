import React from "react";
import CommentBox from "../components/CommentBox.jsx";
import Modal from "../components/Modal.jsx";
import ReviewTaApplication from "./ReviewTaApplication.jsx";
import { useNavigate,useParams} from "react-router";
import { toast } from "react-hot-toast";

export default function RegistrarTaSubmission() {

  const { id } =useParams();

  const handleRegistrarTaResponse = (res) => {
    if (res == 200) {
      useNavigate("/registrar/pendingTa");
    } else {
      toast("You are not authorized");
    }
  };


  const registrarOnTaAccept = (e) => {
    const registrarTaData = {};
    const status = "ACCEPT";
    const registrarTaComment = document.querySelector('[name="comment"]');
    registrarTaData["comment"] = registrarTaComment.value;
    registrarTaData["status"] = status;
    registrarTaData["formId"] = id;

    console.log(registrarTaData);

    fetch("/api/submitRegistrarTaData", {
      method: "POST",
      data: JSON.stringify(registrarTaData),
    }).then(handleRegistrarTaResponse);

    console.log(registrarTaData);
  };

  const registrarOnTaReview = (e) => {
    const registrarTaData = {};
    const status = "REVIEW";
    const registrarTaComment = document.querySelector('[name="comment"]');
    registrarTaData["comment"] = registrarTaComment.value;
    registrarTaData["status"] = status;
    registrarTaData["formId"] = id;

    console.log(registrarTaData);

    fetch("/api/submitRegistrarTaData", {
      method: "POST",
      data: JSON.stringify(registrarTaData),
    }).then(handleRegistrarTaResponse);

    console.log(registrarTaData);
  };

  return (
    <>
      <h3>For use by the Registrar</h3>
      <Modal>
        <ReviewTaApplication />
      </Modal>
      <CommentBox onAccept={registrarOnTaAccept} onReview={registrarOnTaReview}  />
    </>
  );
}
