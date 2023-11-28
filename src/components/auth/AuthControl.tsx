import React from "react";

interface AuthControl {
  isMPIN: Boolean;
  setIsMPINFunc: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthControl: React.FC<AuthControl> = ({ isMPIN, setIsMPINFunc }) => {
  return (
    <div className="bg-[#f8f8f8] grid grid-cols-2">
      <button
        onClick={() => !isMPIN && setIsMPINFunc(true)}
        className={`${
          isMPIN ? "auth-method-active" : "text-[rgba(0,0,0,0.4)]"
        } text-[13px] py-4 after:rounded-r-md transition-all`}>
        Quick Access MPIN
      </button>
      <button
        onClick={() => isMPIN && setIsMPINFunc(false)}
        className={`${
          !isMPIN ? "auth-method-active" : "text-[rgba(0,0,0,0.4)]"
        } text-[13px] py-4 after:rounded-l-md transition-all`}>
        Email ID
      </button>
    </div>
  );
};

export default AuthControl;
