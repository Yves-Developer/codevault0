import Email from "@/components/Email";
import Project from "@/components/Project";
import Button from "@/components/ui/Button";
import Wrapper from "@/components/Wrapper";
import React from "react";

const Home = () => {
  return (
    <Wrapper>
      <div className="w-2/3 h-[150px] absolute -top-20 left-10 rounded-[50%] -z-100 bg-primary blur-[150px]" />
      <div className="w-full sm:h-screen border-1 shadow-xl grid grid-cols-1 custom:grid-cols-2 overflow-hidden rounded-sm bg-secondary mt-20">
        <Project />
        <Email />
      </div>
      <div className="w-2/3 h-[150px] absolute -bottom-20 right-10 rounded-[50%] -z-100 bg-primary blur-[150px]" />
    </Wrapper>
  );
};

export default Home;
