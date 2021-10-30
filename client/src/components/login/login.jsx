import React, { useEffect } from "react";
import SawoLogin from "sawo-react";
import { setLogin } from "../../actions/user";
import Navbar from "../home/navbar/navbar";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  function sawoLoginCallback(payload) {
    console.log(payload);
    localStorage.setItem("payload", payload);
    setLogin(payload, history); //? Sending Payload to Backend
  }

  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required,
    identifierType: "email", //required, must be one of: 'email', 'phone_number_sms',
    apiKey: "f14ce0fa-8324-4c78-a311-8a2fc3f94dbe", // required, get it from sawo dev.sawolabs.com,
    containerHeight: "400px", // the login container height, default is 300px
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="w-96 mt-10 m-auto flex flex-col items-center min-h-full">
        
        <SawoLogin config={sawoConfig} className="self-center" />
      </div>
    </div>
  );
};

export default LoginPage;
