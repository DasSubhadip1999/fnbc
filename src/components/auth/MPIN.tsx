import React, { useState } from "react";
import OTPInput from "react-otp-input";
import Button from "../layouts/Button";
import Container from "../layouts/Container";

const MPIN: React.FC = () => {
  const [pin, setPin] = useState<string>("");
  // const setPinFunc : React.Dispatch<React.SetStateAction<boolean>> = setPin;

  const handlePaste: React.ClipboardEventHandler = (event) => {
    const data = event.clipboardData.getData("text");
    setPin(data);
  };

  return (
    <Container className="flex flex-col items-center mt-8">
      <OTPInput
        value={pin}
        onChange={setPin}
        numInputs={4}
        inputType={"number"}
        renderSeparator={false}
        onPaste={handlePaste}
        inputStyle={{
          border: "1px solid #E0E0E0",
          borderRadius: "8px",
          width: "55px",
          height: "55px",
          fontSize: "12px",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue",
          margin: "0px 12px",
        }}
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus={true}
      />
      <div className="text-sm text-primary font-normal my-6">Forgot MPIN?</div>
      <Button text="Login" />
    </Container>
  );
};

export default MPIN;
