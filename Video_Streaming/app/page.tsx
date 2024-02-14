import LoginButton from "@/components/loginButton";
import SignupButton from "@/components/signupButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>Video Streaming Service</h1>
        <h2>ACIT 3855 Project 1</h2>
      </div>
      <div>
        To get Started, <LoginButton /> or <SignupButton />
      </div>
    </main>
  );
}
