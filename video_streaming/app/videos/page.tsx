"use client";

import Loading from "@/components/Loading";
import VideoCard from "@/components/VideoCard";
import { FC, useEffect, useState } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_FETCH_VID_URL!)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="h-screen flex justify-evenly items-center">
        {isLoading ? <Loading /> : <VideoCard data={data} />}
      </div>
    </>
  );
};

export default Page;
