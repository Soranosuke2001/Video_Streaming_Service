"use client";

import SignupForm from "@/components/SignupForm";
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
            <CardTitle>Signup to Get Started!</CardTitle>
            <CardDescription className="text-gray-500">
              Once you signup, you can view all the videos user's have uploaded
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;
