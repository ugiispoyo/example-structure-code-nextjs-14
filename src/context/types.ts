import { T_Action } from "@/store/types";
import { T_State } from "@/store/types";

export type T_GlobalContextCTX = {
  dispatch: React.Dispatch<T_Action>;
  Store: (
    init?: Partial<T_State>
  ) => [T_State, React.Dispatch<T_Action & Partial<T_State>>];
} & T_State;

export type T_GlobalContextProvider = {
  children: JSX.Element | React.ReactNode;
};
