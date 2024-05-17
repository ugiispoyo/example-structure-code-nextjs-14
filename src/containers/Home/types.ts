import T_State from "@/store/state/home/types";
import { T_Action } from "@/store/types";

export type T_HomeCTX = {
  dispatch: React.Dispatch<T_Action>;
} & Partial<T_State>;

export type T_HomeParamUseLogic = {
  dataExample: Array<any> | null;
};

export type T_HomeProvider = {
  children: JSX.Element | React.ReactNode;
  data: T_HomeParamUseLogic;
};
