import React from "react";
import CommentBox from "../components/CommentBox.jsx";
import Modal from "../components/Modal.jsx";
import ReviewApplication from "./ReviewApplication.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form.jsx";
import { toast } from 'react-hot-toast';

export default function ShowUserApplication() {
  const { id } = useParams();

  return (
    <>
    <div className="max-w-screen-lg mx-auto py-4">
      <div className="pb-8">
      <CommentBox readOnly/>
      </div>
      <Modal title={"View Application"}>
        <ReviewApplication />
      </Modal>
    </div>
    </>
  );
  }
