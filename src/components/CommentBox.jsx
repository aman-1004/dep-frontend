import React, { useEffect, useState } from "react";
import Input from "./Input";
import { json, useLocation, useParams } from "react-router";
export default function CommentBox({ onAccept, onReview, readOnly }) {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const location = useLocation()
  useEffect(() => {
    const commentEndpoint = location.pathname.toLowerCase().includes("ta") ? "/api/getTAComments": "/api/getComments"
    fetch(commentEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    }).then(res => res.json()).then(setComments)
  }, [])

  return (
    <>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-gray-500">
          <thead className="text-gray-700 uppercase bg-gray-50">
            {comments.length != 0 && (<tr>
              <th scope="col" className="px-6 py-1">
                Commentor
              </th>
              <th scope="col" className="px-6 py-1">
                Comment
              </th>
            </tr>)}
          </thead>
          <tbody>
            {comments.map(comment => (
            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-1 text-base font-medium text-gray-900 whitespace-nowrap">

                  {`${comment.handler.designation}`}
              </th>
              <td className="px-6 py-1 text-base">
                  {`${comment.comment}`}
              </td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
      {!readOnly && (
        <>
          <div className="mt-4">
            <label
              htmlFor="comment"
              className="block m-2 text-sm font-medium text-gray-900"
            >
              {/* Add a comment */}
            </label>
            <textarea
              className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 my-4"
              name="comment"
              placeholder="Add Comment"
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
