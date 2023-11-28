import React from "react";
import Button from "../layouts/Button";
import Container from "../layouts/Container";

const EmailId = () => {
  return (
    <Container className="mt-3">
      <form className="flex flex-col gap-3">
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="example@email.com" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="type your password" />
        </div>
        <Button text="Login" />
      </form>
    </Container>
  );
};

export default EmailId;
