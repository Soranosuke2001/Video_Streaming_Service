import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FC } from "react";
import { Button } from "./ui/button";

interface VideoCardProps {
  data: any;
}

type videoType = {
  id: number;
  user_id: string;
  username: string;
  video_id: string;
  video_title: string;
  video_link: string;
  date_created: string;
};

const VideoCard: FC<VideoCardProps> = ({ data }: any) => {
  const videos = data["data"];

  return (
    <>
      {videos.map((video: videoType) => {
        const { id, username, video_title, video_link, date_created } =
          video;
        return (
          <Card key={id} className="w-[350px]">
            <CardHeader>
              <CardTitle>{video_title}</CardTitle>
            </CardHeader>
            <CardContent>
              <a href={video_link} target="_blank">
                <Button>Watch Video</Button>
              </a>
            </CardContent>
            <CardFooter className="flex-col items-start">
              <p className="text-lg font-semibold">Uploaded By:</p>
              <p>{username}</p>
              <p className="text-lg font-semibold">Date Published:</p>
              <p>{date_created}</p>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default VideoCard;
