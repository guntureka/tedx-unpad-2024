import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface Video {
  id: string;
  url: string;
}

const VideoCarousel: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      const response = await fetch("/partnership/videos.json");
      const data = await response.json();
      setVideos(data);
      setIsLoading(false);
    };
    fetchVideos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {isLoading ? (
        <Skeleton className="h-[calc(280px*9/16)] w-screen max-w-[280px] md:h-[calc(448px*9/16)] md:max-w-md lg:h-[calc(672px*9/16)] lg:max-w-2xl" />
      ) : (
        videos.length > 0 && (
          <Carousel className="w-screen max-w-[280px] md:max-w-md lg:max-w-2xl">
            <CarouselContent>
              {videos.map((video) => (
                <CarouselItem key={video.id} className="w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`${video.url}?autopause=0&autoplay=1&byline=0&controls=0&dnt=1&loop=1&muted=1&portrait=0&title=0`} 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    className="aspect-video w-full"  
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="rounded-full bg-[#FE2704] hover:bg-[#C93420]" />
            <CarouselNext className="rounded-full bg-[#FE2704] hover:bg-[#C93420]" />
          </Carousel>
        )
      )}
    </div>
  );
};

export default VideoCarousel;