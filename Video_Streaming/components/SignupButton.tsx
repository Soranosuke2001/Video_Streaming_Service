import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

interface signupButtonProps {}

const SignupButton: FC<signupButtonProps> = ({}) => {
  return (
    <Link href="/signup">
      <Button>Signup</Button>
    </Link>
  );
};

export default SignupButton;
