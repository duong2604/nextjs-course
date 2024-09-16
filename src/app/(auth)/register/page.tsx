"use client";

import React from "react";

const Register = () => {
  const throwNewError = () => {
    throw new Error("This is a new error");
  };

  throwNewError();
  return <div>Register page</div>;
};

export default Register;
