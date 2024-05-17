import { CSSProperties, HTMLAttributes } from "react";

import clsx from "clsx";

type T_SkeletonLoading = {
  className?: string;
  style?: CSSProperties;
};

export default function SkeletonLoading({
  className,
  style,
  ...props
}: T_SkeletonLoading & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "animate-pulse space-x-4 w-full min-h-[100px] bg-[#e97b262e]",
        className
      )}
      style={style}
      {...props}
    ></div>
  );
}
