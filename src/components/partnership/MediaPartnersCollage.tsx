import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const MediaPartnersCollage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "partnership/medpart_2-7-2024.png";
    img.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="flex w-full justify-center px-[50px] md:px-[100px] lg:px-[140px]">
      {isLoading ? (
        <div className="flex w-full justify-center">
          <div className="relative w-full" style={{ paddingTop: "19.41%" }}>
            <Skeleton className="absolute left-0 top-0 h-full w-full" />
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center">
          <img
            src="partnership/medpart_2-7-2024.png"
            className="w-full"
            alt="Sponsor"
          />
        </div>
      )}
    </div>
  );
};

export default MediaPartnersCollage;