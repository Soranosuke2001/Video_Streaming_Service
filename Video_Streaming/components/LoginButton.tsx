import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface loginButtonProps {}

const LoginButton: FC<loginButtonProps> = ({}) => {
  return (
    <Link href="/auth/login">
      <Button className="bg-stone-950">Login</Button>
    </Link>
  );
};

export default LoginButton;
