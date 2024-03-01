import React from "react";

const Button = (props) => {
  //   console.log(props.value.name);
  return (
    <div>
      <button className="m-2 px-5 py-2 bg-gray-300 rounded-lg w-24">
        {props.value.name}
      </button>
    </div>
  );
};

export default Button;
