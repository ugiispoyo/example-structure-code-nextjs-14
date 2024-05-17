import React, { createContext, useContext } from "react";

import { useLogic } from "./hook";
import { T_HomeCTX, T_HomeProvider } from "./types";

export const HomeCTX = createContext<T_HomeCTX | null>(null);

export const useProps = (): T_HomeCTX | null => {
  const data = useContext(HomeCTX);
  return data;
};

export const HomeProvider = ({ children, data }: T_HomeProvider) => {
  const logic = useLogic(data);

  return <HomeCTX.Provider value={logic}>{children}</HomeCTX.Provider>;
};
