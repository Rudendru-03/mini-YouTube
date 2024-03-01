import React from "react";
import { useAPI } from "../hooks/useApi";

// const discribe = ({ props }) => {
//   console.log(props);
//   return (
//     <div>
//       <p>hlkf;j lkdhfao; ksldfha;</p>
//     </div>
//   );
// };

const ChannelDiscription = () => {
  const discript = useAPI();
  return (
    <div className="bg-gray-500">
      Discription
      {/* {discript.map((item) => (
        <div key={item.id}>{item.snippet.description}</div>
      ))} */}
    </div>
  );
};

export default ChannelDiscription;

// console.log(item.snippet.description);
