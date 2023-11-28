import React, { useState } from "react";
import NextImage from "../shared/NextImg";
import auth_bg from "@/components/assets/images/auth_bg.svg";
import Container from "../layouts/Container";
import AuthControl from "./AuthControl";
import MPIN from "./MPIN";
import AuthFooter from "./AuthFooter";
import EmailId from "./EmailId";

const Auth = () => {
  const [isMPIN, setIsMPIN] = useState(true);

  return (
    <div className="bg-primary h-screen overflow-y-hidden">
      <Container>
        <div className="h-52 relative">
          <NextImage url={auth_bg} alt="Login" />
          <div className="flex items-center justify-between absolute w-full left-0 bottom-0">
            <div className="text-white flex flex-col gap-1">
              <div className="font-light">Bank at your finger tips</div>
              <div className="font-bold text-xl">Login Method</div>
            </div>
            <NextImage
              url={"/images/Logo.svg"}
              alt="Logo"
              className="w-16 h-16 border-2 border-white rounded-md"
            />
          </div>
        </div>
      </Container>
      <div className="bg-white mt-6 rounded-t-2xl flex flex-col justify-between overflow-hidden h-[70dvh]">
        <div>
          <AuthControl isMPIN={isMPIN} setIsMPINFunc={setIsMPIN} />
          {isMPIN ? <MPIN /> : <EmailId />}
        </div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default Auth;
