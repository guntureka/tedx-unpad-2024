import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Sponsors {
  id: string;
  url: string;
  size: "small" | "medium" | "large";
}

const SponsorsCollage: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsors[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSponsors = async () => {
      setIsLoading(true);
      const response = await fetch("/partnership/sponsors.json");
      const data = await response.json();
      const sortedData = data.sort((a: Sponsors, b: Sponsors) => {
        const sizeOrder = { large: 1, medium: 2, small: 3 };
        return sizeOrder[a.size] - sizeOrder[b.size];
      });
      setSponsors(sortedData);
      setIsLoading(false);
    };
    fetchSponsors();
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
        sponsors.length > 0 &&
        sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className={`m-2 flex items-center justify-center ${sponsor.size === "large" ? "h-[100px]" : ""} ${sponsor.size === "medium" ? "h-[75px]" : ""} ${sponsor.size === "small" ? "h-[50px]" : ""} `}
          >
            <img
              src={sponsor.url}
              alt={`Sponsorship logo ${sponsor.id}`}
              className="h-full w-auto object-contain"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default SponsorsCollage;