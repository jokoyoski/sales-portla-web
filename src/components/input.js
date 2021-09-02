import React from "react";
import { MDBInput } from "mdbreact";

const InputPage = () => {
  return <MDBInput label="Full Name"/>;
};

const Input2 = () => {
  return <MDBInput label="Email Address" type="email"/>;
};

const Input3 = () => {
  return <MDBInput label="Phone Number" type="phone" />;
};

const Input4 = () => {
  return <MDBInput label="Gender" type="text" />;
};

const Input5 = () => {
  return <MDBInput label="Date of Birth" type="text" />;
};
export { InputPage, Input2, Input3, Input4, Input5};
