import { T_State } from "../types";
import T_ActionHome from "./home/types";

export type T_Action = {
  type?: T_ActionHome;
  value?: any;
} & Partial<T_State>;
