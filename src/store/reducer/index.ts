import { T_Action, T_State } from "./../types";
import HomeReducer from "./home";

const reducer = (state: T_State, action: T_Action): T_State => {
  const updateState = action as T_State;

  return {
    ...state,
    ...updateState,
    Home: HomeReducer(state.Home as any, action, updateState.Home as any),
  };
};

export default reducer;
