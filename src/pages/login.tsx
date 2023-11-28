import NextImage from "@/components/shared/NextImg";
import Auth from "@/components/auth/Auth";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [isFlash, setIsFlash] = useState<React.SetStateAction<boolean>>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFlash(false);
    }, 2000);
  }, []);

  return (
    <>
      {isFlash ? (
        <main
          className={`bg-[#5e1d8e] flex justify-center items-center bg-[url('/images/home_background.svg')] bg-no-repeat bg-cover min-h-screen max-h-screen overflow-x-hidden`}>
          <NextImage
            url="/images/Logo.svg"
            alt="Logo"
            className="w-32 aspect-square"
          />
        </main>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Login;
