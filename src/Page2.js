import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <h1>Page 2 </h1>
      <Link to="/">Back to Page1</Link>
      <div
        style={{
          backgroundColor: "red",
          color: "#fff",
          height: "150vh",
          margin: "20px auto",
          padding: "40px",
          outline: "3px dashed black",
          width: "50vw"
        }}
      >
        Box used to increase page height
      </div>
      <p>Scrolling will be trapped. Reload to regain scrolling</p>
      <Link to="/">Back to Page1</Link>
    </div>
  );
};

export default Page2;
