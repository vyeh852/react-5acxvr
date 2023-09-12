import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { Link, useHistory } from "react-router-dom";
import "react-responsive-modal/styles.css";

const Page1 = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const history = useHistory();

  return (
    <div>
      <h1>Page 1 </h1>
      <p>scroll down the page and open the modal</p>
      <div
        style={{
          backgroundColor: "blue",
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
      <button
        style={{ height: "50px", widht: "200px" }}
        onClick={() => setActive1(true)}
      >
        Open a standard modal
      </button>
      <br />
      <button
        style={{ height: "50px", widht: "200px" }}
        onClick={() => setActive1(true)}
      >
        Open a disabled animation modal
      </button>
      <Modal
        open={active1}
        showCloseIcon={true}
        center
        onClose={() => {
          setActive1(false);
        }}
      >
        <h2>Animation Modal</h2>
        <Link style={{ display: "block", padding: "50px 20px" }} to="/example">
          Router Link: Navigate to Page2
        </Link>
        <button
          style={{ display: "block", padding: "50px 20px" }}
          onClick={() => {
            setActive1(false);
            history.push("/example");
          }}
        >
          Button onClick: Navigate to Page2
        </button>
        <p>Waiting until after the close transition will work</p>
        <button
          style={{ display: "block", padding: "50px 20px" }}
          onClick={() => {
            setActive1(false);
            setTimeout(() => {
              history.push("/example");
            }, 1000);
          }}
        >
          setTimeout: Navigate to Page2
        </button>
      </Modal>

      <Modal
        open={active2}
        showCloseIcon={true}
        center
        animationDuration={0}
        onClose={() => {
          setActive2(false);
        }}
      >
        <h2>No Animation Modal</h2>
        <Link style={{ display: "block", padding: "50px 20px" }} to="/example">
          Router Link: Navigate to Page2
        </Link>
        <button
          style={{ display: "block", padding: "50px 20px" }}
          onClick={() => {
            setActive2(false);
            history.push("/example");
          }}
        >
          Button onClick: Navigate to Page2
        </button>
        <p>Waiting until after the close transition will work</p>
        <button
          style={{ display: "block", padding: "50px 20px" }}
          onClick={() => {
            setActive2(false);
            setTimeout(() => {
              history.push("/example");
            }, 1000);
          }}
        >
          setTimeout: Navigate to Page2
        </button>
      </Modal>
    </div>
  );
};

export default Page1;
