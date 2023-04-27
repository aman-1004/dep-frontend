import React from "react";
import CommentBox from "../components/CommentBox.jsx";
import Modal from "../components/Modal.jsx";
import ReviewTaApplication from "./ReviewTaApplication.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form.jsx";
import { toast } from 'react-hot-toast';

export default function ShowUserTaApplication() {
    const { id } = useParams();

    return (
      <>
        <Form>
          <h3>click on View TA Application</h3>
        </Form>
        <Modal title={"View TA Application"}>
          <ReviewTaApplication />
        </Modal>
      </>
    );
}
