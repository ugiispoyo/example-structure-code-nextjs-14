import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Store from "@/store";

export const useLogic = () => {
  const pathname = usePathname();
  const [state, dispatch] = Store();

  /* Set every change page, position scroll from top */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return {
    ...state,
    dispatch,
    Store,
  };
};
