import { T_Action } from "./reducer/types";
import { T_State } from "./state/types";

export type T_Store = [T_State, React.Dispatch<T_Action & Partial<T_State>>];
export type { T_State } from "./state/types";
export type { T_Action } from "./reducer/types";
