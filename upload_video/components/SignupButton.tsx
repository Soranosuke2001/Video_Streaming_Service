import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

interface signupButtonProps {}

const SignupButton: FC<signupButtonProps> = ({}) => {
  return (
    <Link href="/auth/signup">
      <Button className="bg-stone-950">Signup</Button>
    </Link>
  );
};

export default SignupButton;
