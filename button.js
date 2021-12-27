import React from "react";

const Button = ({ callbackClick }) => {
  return (
    <>
      <button onClick={callbackClick}>Click</button>
      {console.log("Button Re-render")}
    </>
  );
};

export default React.memo(Button);
