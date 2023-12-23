import React from "react";
import Navbar from "./Navbar";

export default function Dashboard(props) {
  return (
    <>
      <Navbar user={props.user} />
    </>
  );
}
