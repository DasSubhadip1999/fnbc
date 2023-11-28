import React from "react";
import { IoMdLock } from "react-icons/io";

const AuthFooter: React.FC = () => {
  return (
    <div className="h-[30%] flex flex-col justify-between">
      <div className="text-primary text-center">Create an account?</div>
      <div className="flex justify-center gap-1 items-center bg-[#F8F8F8] pt-4 pb-12">
        <IoMdLock /> <span>Secure Banking - Privacy Policy</span>
      </div>
    </div>
  );
};

export default AuthFooter;
