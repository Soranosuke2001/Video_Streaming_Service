import VideoUploadForm from "@/components/VideoUploadForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <Card className="bg-black w-fit h-fit text-white">
          <CardHeader>
            <CardTitle>Select a Video to Upload!</CardTitle>
            <CardDescription className="text-gray-500">
              You can visit the video streaming website to view the uploaded videos!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VideoUploadForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;
