import React from "react";
import Button from "./ui/Button";
import Wrapper from "./Wrapper";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-full backdrop-blur-3xl z-10 top-0 left-0 bg-transparent text-white">
      <Wrapper className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2 relative">
          <Image width={40} height={40} alt="logo" src="/Three.svg" />
          <h2 className=" text-3xl font-bold absolute -top-[2px] left-[42px]">
            codevault
          </h2>
        </div>
        <Button>Get More Projects</Button>
      </Wrapper>
    </div>
  );
};

export default Navbar;
