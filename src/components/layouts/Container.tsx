import ChildComponent from "@/types/ChildComponent";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Container extends ChildComponent {
  className?: string;
}

const Container: React.FC<Container> = ({ children, className }) => {
  return (
    <div className={twMerge(`w-11/12 mx-auto ${className}`)}>{children}</div>
  );
};

export default Container;
