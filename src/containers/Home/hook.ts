import { useReducer } from "react";

import { T_HomeParamUseLogic } from "./types";
import { useGlobalProps } from "@/context/context";
import { T_GlobalContextCTX } from "@/context/types";

export const useLogic = (data: T_HomeParamUseLogic) => {
  const { dataExample } = data; /* Data from server */
  const { Store, Home } = useGlobalProps() as T_GlobalContextCTX;
  const [state, dispatch] = Store({ Home: { ...Home, dataExample } });

  return {
    ...state.Home,
    dispatch,
  };
};
