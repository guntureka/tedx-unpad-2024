import React from "react";
import HTMLFlipBook from "react-pageflip";

const Book: React.FC = () => {
  const folderPath = "./menu";
  const numberOfPages = 8;

  const generateImages = () => {
    const images = [];
    for (let i = 1; i <= numberOfPages; i++) {
      const imagePath = `${folderPath}/${i}.png`;
      images.push(
        <img
          className="object-fit"
          key={i}
          src={imagePath}
          alt={`Page ${i}`}
        />,
      );
    }
    return images;
  };

  const Style: React.CSSProperties = {
    color: "blue",
    fontSize: "20px",
    marginLeft: "320px",
    padding: "",
    border: "",
    backgroundColor: "none",
    textAlign: "center",
    borderRadius: "8px",
  };

  return (
    <HTMLFlipBook
      width={397}
      height={561}
      className="demo-book"
      style={Style}
      startPage={0}
      size={"fixed"}
      minWidth={0}
      maxWidth={1754}
      minHeight={0}
      maxHeight={1240}
      drawShadow={true}
      flippingTime={1000}
      usePortrait={true}
      startZIndex={0}
      autoSize={true}
      maxShadowOpacity={1}
      showCover={false}
      mobileScrollSupport={true}
      clickEventForward={true}
      useMouseEvents={true}
      swipeDistance={30}
      showPageCorners={false}
      disableFlipByClick={false}
    >
      <div />
      {generateImages().map((img, index) => (
        <div className="Page z-50" key={index}>
          {img}
        </div>
      ))}
      <div />
    </HTMLFlipBook>
  );
};

export default Book;
