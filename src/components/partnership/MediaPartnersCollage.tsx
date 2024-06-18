import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface MediaPartners {
  id: string;
  url: string;
  size: "small" | "medium" | "large";
}

const MediaPartnersCollage: React.FC = () => {
  const [MediaPartners, setMediaPartners] = useState<MediaPartners[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMediaPartners = async () => {
      setIsLoading(true);
      const response = await fetch("/partnership/media-partners.json");
      const data = await response.json();
      const sortedData = data.sort((a: MediaPartners, b: MediaPartners) => {
        const sizeOrder = { large: 1, medium: 2, small: 3 };
        return sizeOrder[a.size] - sizeOrder[b.size];
      });
      setMediaPartners(sortedData);
      setIsLoading(false);
    };
    fetchMediaPartners();
  }, []);

  return (
    <div className="flex w-full max-w-sm flex-wrap items-center justify-center md:max-w-md lg:max-w-xl">
      {isLoading ? (
        <div className="flex flex-wrap items-center justify-center">
          <Skeleton className="m-2 h-[100px] w-[100px]" />
          <Skeleton className="m-2 h-[75px] w-[75px]" />
          <Skeleton className="m-2 h-[50px] w-[50px]" />
        </div>
      ) : (
        MediaPartners.length > 0 &&
        MediaPartners.map((mediapartner) => (
          <div
            key={mediapartner.id}
            className={`m-2 flex items-center justify-center ${mediapartner.size === "large" ? "h-[100px]" : ""} ${mediapartner.size === "medium" ? "h-[75px]" : ""} ${mediapartner.size === "small" ? "h-[50px]" : ""} `}
          >
            <img
              src={mediapartner.url}
              alt={`MediaPartnership logo ${mediapartner.id}`}
              className="h-full w-auto object-contain"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default MediaPartnersCollage;