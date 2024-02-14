import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface loginButtonProps {}

const LoginButton: FC<loginButtonProps> = ({}) => {
  return (
    <Link href="/login">
      <Button>Login</Button>
    </Link>
  );
};

export default LoginButton;
