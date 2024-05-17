"use client";
import dynamic from "next/dynamic";
import clsx from "clsx";

import SkeletonLoading from "@/components/SkeletonLoading";
import { GlobalContextProvider } from "@/context/context";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <SkeletonLoading />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <SkeletonLoading />,
});

const RenderApp = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalContextProvider>
      <RenderApp>{children}</RenderApp>
    </GlobalContextProvider>
  );
}
