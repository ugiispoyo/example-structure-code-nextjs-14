import { useReducer } from "react";

import State from "./state";
import reducer from "./reducer";

import { T_Store } from "./types";
import { T_State } from "./state/types";

const Index = (init?: Partial<T_State>): T_Store => {
  return useReducer(reducer, {
    ...State,
    ...init,
  });
};

export default Index;
