import React from 'react'
import EstabTaTable from '../components/EstabTaTable'
import ReviewTaApplication from './ReviewTaApplication' 
import CommentBox from '../components/CommentBox'
import Modal from "../components/Modal";
import { useNavigate,useParams} from "react-router";
import { toast } from "react-hot-toast";


export default function EstabTaSubmission() {

  const { id } =useParams();

 const handleEstabTaResponse = (res) => {
  if(res==200)
  {
    useNavigate("/establish/pendingTa");
  }
  else{
    toast("You are not authorized");
  }
 }

 const estabOnTaAccept = (e) =>{

    const estabTaData={};
    const status="ACCEPT";
    const estabTaComment=document.querySelector('[name="comment"]');
    estabTaData["comment"]=estabTaComment.value;
    estabTaData["status"]=status;
    estabTaData["formId"]=id;

    console.log(estabTaData);
  
    fetch("/api/submitEstabTaData",{
      method:"POST",
      data:JSON.stringify(estabTaData),
    }).then(handleEstabTaResponse);

 }

 const estabOnTaReview = (e) =>{

  const estabTaData={};
  const status="REVIEW";
  const estabTaComment=document.querySelector('[name="comment"]');
  estabTaData["comment"]=estabTaComment.value;
  estabTaData["status"]=status;
  estabTaData["formId"]=id;

  console.log(estabTaData);

  fetch("/api/submitEstabTaData",{
    method:"POST",
    body:JSON.stringify(estabTaData),
    headers : {
      'Content-Type': 'application/json'
   },
  }).then(handleEstabTaResponse);

 }

  return (
    <>
        <div className="max-w-screen-xl mx-auto">
    <h3>FOR USE OF ESTABLISHMENT SECTION</h3>
      <Modal>
        <ReviewTaApplication />
      </Modal>
      <EstabTaTable />
      <CommentBox onAccept={estabOnTaAccept} onReview={estabOnTaReview}  />
      </div>
    </>
  )
}
