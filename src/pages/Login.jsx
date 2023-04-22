import React, { useRef } from "react";
import Form from "../components/Form.jsx";
import Input from "../components/Input.jsx";
import { LoginContext } from "../LoginContext.jsx";
import { useContext } from "react";
import { toast } from "react-hot-toast";

export default function Login() {
  const [userInfo, setUserInfo] = useContext(LoginContext);
  const handleStatus = async (res) => {
    console.log("response status is", res.status);
    if (res.status != 200) {
      toast("You are not authoried");
      setUserInfo(null);
    } else {
      const data = await res.json();
      console.log(data);
      setUserInfo(data);
    }
  };

  const submitHandler = (e) => {
    const form = e.target;
    const email = form.elements[0].value;
    var formdata = new FormData();
    formdata.append("emailId", email);
    fetch("/api/login", {
      method: "POST",
      body: formdata,
    })
      .then(handleStatus)
      .catch((err) => console.log(err));
  };

  return (
    <>
      Login Page
      <Form onSubmit={submitHandler}>
        <Input name="emailId" type="email" />
        <Input type="submit" />
      </Form>
    </>
  );
}
