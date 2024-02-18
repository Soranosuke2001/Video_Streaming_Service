import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { FC } from "react";

interface VideoCardProps {
  data: any;
}

type videoType = {
  id: number,
  user_id: string,
  video_id: string,
  video_link: string,
  date_created: string
}

const VideoCard: FC<VideoCardProps> = ({ data }: any) => {
  const videos = data["data"];
  console.log(videos);
  return (
    <>
      {videos.map((video: videoType) => {
        const { id, user_id, video_id, video_link, date_created } = video
        return (
          <Card key={id} className="w-[350px]">
            <CardHeader>
              <CardTitle>{video_id}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={video_link}>Video Link</Link>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p>Uploaded By: {user_id}</p>
              <p>Date Published: {date_created}</p>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default VideoCard;
