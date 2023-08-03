// export default function Toggler({ colorList }) {
//   return (
//     <div>
//       {colorList.map((color) => (
//         <p key="1">{color}</p>
//       ))}
//     </div>
//   );
// }

import { useState } from "react";

export default function Toggler() {
  const [val, setVal] = useState(false);
  const updateVal = () => {
    setVal(!val);
  };
  return <h1 onClick={updateVal}>{!val ? "🥺" : "😁"}</h1>;
}
