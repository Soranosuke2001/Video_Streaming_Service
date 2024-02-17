import LoginButton from "@/components/LoginButton";
import SignupButton from "@/components/SignupButton";

export default function Home() {
  return (
    <main className="text-white flex flex-col justify-between h-screen">
      <div>
        <div className="text-center">
          <h1 className="text-6xl pt-24 font-serif">Video Streaming Service</h1>
          <h2 className="text-xl pt-6">ACIT 3855 Project 1</h2>
        </div>
        <div className="flex pt-40 justify-center items-center">
          <div className="text-lg">
            To get Started, <LoginButton /> or <SignupButton />
          </div>
        </div>
      </div>
      <footer className="text-center p-4">
        <p>Created By: Sora & Nazira</p>
      </footer>
    </main>
  );
}

