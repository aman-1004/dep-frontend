import React, { useEffect, useState } from "react";
import Input from "./Input";
import { json, useParams } from "react-router";
export default function CommentBox({ onAccept, onReview, readOnly}) {
  const {id} = useParams()
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("/api/getComments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ltcId: id })
    }).then(res => res.json()).then(setComments)
  }, [])

  return (
    <>
    <h3>Comments:</h3>
    <ul>
      {comments.map(comment => <li key={comment.id}>{`Comment: ${comment.comment} by ${comment.handler.role.designation}`}</li>)}
    </ul>
    {!readOnly && ( 
      <>
      <div className="mt-4">
        <label
          htmlFor="comment"
          className="block m-2 text-sm font-medium text-gray-900"
        >
          Add a comment
        </label>
        <textarea
          className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 my-4"
          name="comment"
          placeholder=""
        ></textarea>
      </div>
      <button
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        name="review"
        onClick={onReview}
      >
        Review
      </button>
      <button
      className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        name="accept"
        onClick={onAccept}
      >
        Submit
      </button>
      </>
    )}
    </>
  );
}
