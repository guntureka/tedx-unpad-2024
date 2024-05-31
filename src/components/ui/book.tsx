import React from "react";
import HTMLFlipBook from "react-pageflip";


const Book: React.FC = () => {
  const folderPath = "/";
  const numberOfPages = 8;

  const generateImages = () => {
    const images = [];
    for (let i = 1; i <= numberOfPages; i++) {
      const imagePath = `${folderPath}/${i}.png`;
      images.push(<img className="object-fit" key={i} src={imagePath} alt={`Page ${i}`} />);
    }
    return images;
  };

  const Style: React.CSSProperties = {
    color: 'blue',
    fontSize: '20px',
    margin: '10px',
    padding: '5px',
    border: '1px solid black',
    backgroundColor: 'lightgray',
    textAlign: 'center',
    borderRadius: '8px'
  };

  return (
    <HTMLFlipBook 
      width={350} 
      height={600} 
      className="demo-book" 
      style={Style}
      startPage={0} 
      size={"fixed"} 
      minWidth={0} 
      maxWidth={350} 
      minHeight={0} 
      maxHeight={600} 
      drawShadow={true} 
      flippingTime={1000} 
      usePortrait={true} 
      startZIndex={0} 
      autoSize={true} 
      maxShadowOpacity={1} 
      showCover={true} 
      mobileScrollSupport={true} 
      clickEventForward={true} 
      useMouseEvents={true} 
      swipeDistance={30} 
      showPageCorners={true} 
      disableFlipByClick={false}
    >
      <div/>
      {generateImages().map((img, index) => (
        <div className="Page" key={index}>
          {img}
        </div>
      ))}
      <div/>
    </HTMLFlipBook>
  );
};

export default Book;