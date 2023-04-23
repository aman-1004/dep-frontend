import React from "react";
export default function Form(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(props.onSubmit) props.onSubmit(e);
        // console.log(e.target);
        // const formData = new FormData(e.target);
        // for (const data of formData.entries()) {
        //   console.log(data[0], data[1]);
        // }
      }}
    >
      {props.children}
    </form>
  );
}
