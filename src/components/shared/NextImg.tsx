import ChildComponent from "@/types/ChildComponent";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface NextImage extends ChildComponent {
  url: string | StaticImport;
  alt: string;
  className?: string;
}

const NextImage: React.FC<NextImage> = ({ children, className, alt, url }) => {
  return (
    <figure className={twMerge(`relative w-full h-full ${className}`)}>
      <Image src={url} alt="" layout="fill" />
    </figure>
  );
};

export default NextImage;
