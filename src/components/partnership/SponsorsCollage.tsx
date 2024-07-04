import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SponsorsCollage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "partnership/sponsor_5-7-2024.png";
    img.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="flex w-full justify-center px-[50px] md:px-[100px] lg:px-[140px]">
      {isLoading ? (
        <div className="flex w-full justify-center">
          <div className="relative w-full" style={{ paddingTop: "18.25%" }}>
            <Skeleton className="absolute left-0 top-0 h-full w-full" />
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center">
          <img
            src="partnership/sponsor_5-7-2024.png"
            className="w-full"
            alt="Sponsor"
          />
        </div>
      )}
    </div>
  );
};

export default SponsorsCollage;