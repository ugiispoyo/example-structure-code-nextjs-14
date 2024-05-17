"use client";
import React from "react";

import Components from "./components";

import { HomeProvider } from "./context";
import { T_HomeParamUseLogic } from "./types";

const HomeContainer = (data: T_HomeParamUseLogic) => {
  return (
    <HomeProvider data={data}>
      <Components />
    </HomeProvider>
  );
};

export default HomeContainer;
