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
      <CommentBox readOnly/>
      <Modal>
        <ReviewApplication />
      </Modal>
    </>
  );
  }
