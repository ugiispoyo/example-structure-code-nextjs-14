import { T_Action } from "../../types";
import T_State from "@/store/state/home/types";

const reducer = (
  state: T_State,
  action: T_Action,
  injectState: T_State
): T_State => {
  const { type, value } = action;

  if (typeof type === "undefined") {
    return { ...state, ...injectState };
  }

  switch (type) {
    default:
      return state;
  }
};

export default reducer;
