import React from "react";
import Button from "./Button";
import { BUTTON_ARRAY } from "./constant";

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {BUTTON_ARRAY.map((item) => (
        <Button value={item} key={item.id} />
      ))}
    </div>
  );
};

export default ButtonList;
