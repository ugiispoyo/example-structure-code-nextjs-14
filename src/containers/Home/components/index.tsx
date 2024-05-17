import dynamic from "next/dynamic";
import SkeletonLoading from "@/components/SkeletonLoading";

const ListData = dynamic(() => import("./list-data"), {
  loading: () => (
    <div className="flex flex-col mt-4 mb-10">
      <SkeletonLoading className="max-w-[350px] mx-auto min-h-[40px] mb-4 px-4" />
    </div>
  ),
});

const Components = () => {
  return (
    <>
      <ListData />
    </>
  );
};

export default Components;
