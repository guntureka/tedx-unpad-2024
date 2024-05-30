import React from "react";
import Link from "next/link";
import HTMLFlipBook from "react-pageflip";


const Book: React.FC = () => {
  const folderPath = "/book-content";
  const numberOfPages = 32;

  const generateImages = () => {
    const images = [];
    for (let i = 1; i <= numberOfPages; i++) {
      const imagePath = `${folderPath}/${i}.png`;
      images.push(<img className="object-fit" key={i} src={imagePath} alt={`Page ${i}`} />);
    }
    return images;
  };

  return (
    <Link className="mt-[70px]" href="/main">Main</Link>
    // <HTMLFlipBook width={350} height={600}>
    //   <div/>
    //   {generateImages().map((img, index) => (
    //     <div className="Page" key={index}>
    //       {img}
    //     </div>
    //   ))}
    //   <div/>
    // </HTMLFlipBook>
  );
};

export default Book;