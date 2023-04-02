import { onClose } from "@/slices/loginModal";
import { RootState } from "@/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./sideBar/input";
import Modal from "./sideBar/modal";

const LoginModal = () => {
  let dispatch = useDispatch();
  let loginModalState = useSelector((state: RootState) => state.login.isOpen);

  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      console.log("email", email);
      console.log("password", password);

      dispatch(onClose());
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModalState}
      title="Login"
      actionLabel="Sign in"
      onClose={() => dispatch(onClose())}
      onSubmit={handleSubmit}
      body={bodyContent}
    />
  );
};

export default LoginModal;
