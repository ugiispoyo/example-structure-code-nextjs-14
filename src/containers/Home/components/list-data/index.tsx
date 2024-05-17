import React from "react";

import { useProps } from "../../context";
import { T_HomeCTX } from "../../types";

const ListData = () => {
  const { dataExample } = useProps() as T_HomeCTX;

  return (
    <div>
      <ul>
        {dataExample?.map((item, i) => (
          <li key={i} className="mb-5">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListData;
