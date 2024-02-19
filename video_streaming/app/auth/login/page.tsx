"use client";

import LoginForm from "@/components/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="absolute top-10 left-10">
          <Link href="/">
            <ArrowLeft className="w-fit text-neutral-300" size={50} />
          </Link>
        </div>
        <Card className="bg-black w-fit h-fit text-white">
          <CardHeader>
            <CardTitle>Login to View Videos!</CardTitle>
            <CardDescription className="text-gray-500">
              Once you login, you can view all the videos user&lsquo;s have uploaded
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;
