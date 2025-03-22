import { features } from "@/constants";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="h-full order-2 custom:order-1 bg-linear-to-b from-primary via-background to-background p-8">
      <div className="w-full aspect-16/9 rounded-md relative ring-4 ring-white/30 ring-inset-0 shadow-2xl mb-4">
        <Image
          src="/project0.png"
          alt="Project"
          width={1920}
          height={1440}
          quality={100}
          className="w-full h-full object-fill rounded-md"
          priority
        />
      </div>
      <h2 className="text-2xl text-white">Features</h2>
      <div className="flex flex-col gap-2 mt-4 ml-4">
        {features.map((feature) => (
          <h3
            key={feature.title}
            className="flex gap-2 items-center text-lg text-white"
          >
            <Check className="w-5 h-5 rounded-sm text-white bg-primary p-[0.5px] font-bold" />
            {feature.title}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Project;
