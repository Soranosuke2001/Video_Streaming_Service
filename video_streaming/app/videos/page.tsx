"use client";

import Loading from "@/components/Loading";
import VideoCard from "@/components/VideoCard";
import { useEffect, useState } from "react";

const page = ({}) => {
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

export default page;
