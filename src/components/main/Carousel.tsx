"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Link from "next/link";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imagePath: string;
  buttonColor: string;
  link: string; // Add link field
}

const slides: Slide[] = [
  {
    title: "Quarter Life Crisis",
    subtitle: "Dr. Fredrick Dermawan Purba, M.Psi",
    description:
      "Dr. Fredrick Dermawan Purba, M.Psi., or more often addressed as Bang Jeki, is a lecturer and clinical psychologist who is actively involved in research and interventions in the area of health psychology, especially quality of life, mental health, and well-being. He is currently serving as Vice Dean for Learning, Student Affairs, and Research at the Faculty of Psychology, Universitas Padjadjaran",
    buttonText: "Click to Read More",
    imagePath: "/speakers-1.jpg",
    buttonColor: "red",
    link: "/speakers-page/post-colonialism-and-inferiority-complex", // Example link
  },
  {
    title: "Economics and Entrepreneurship",
    subtitle: "Yoel Tristan Kurniawan",
    description:
      "Starting his entrepreneurial journey at the young age of 17, Yoel Tristan has navigated through numerous challenges, experiencing eight business failures along the way. Demonstrating unwavering resilience, he completed his studies at SBM ITB and now helms the flourishing enterprises Fit Fuel and Poppy's Dream. His relentless drive and innovative vision earned him the distinguished title of winner at Gen-Zesia's premier business competition, the Diplomat Success Challenge",
    buttonText: "Click to Read More",
    imagePath: "/speakers-2.jpg",
    buttonColor: "red",
    link: "/speakers-page/economics-and-entrepreneurship", // Example link
  },
];

const MyCarousel: React.FC = () => {
  return (
    <CarouselWrapper>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <Container>
              <ImageContainer>
                <Image src={slide.imagePath} alt={slide.subtitle} />
              </ImageContainer>
              <TextContainer>
                <h2>
                  <strong>{slide.title}</strong>
                </h2>
                <h3>
                  <strong>{slide.subtitle}</strong>
                </h3>
                <p>{slide.description}</p>
              </TextContainer>
              <Button
                style={{ background: slide.buttonColor }}
                href={slide.link}
              >
                {slide.buttonText}
              </Button>
            </Container>
          </Slide>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1084px;
  height: auto;
  overflow: hidden;
  border-radius: 20px;
  margin: auto;

  @media (max-width: 768px) {
    width: 400px;
    height: auto;
    border-radius: 10px;
  }
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 474px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  flex-direction: row;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 500px;
  }
`;

const TextContainer = styled.div`
  width: 60%;
  padding: 20px;
  text-align: justify;
  color: black;
  position: relative;
  overflow: hidden;

  h2,
  h3 {
    color: black;
    margin: 0 0 10px 0;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
  }

  h3 {
    font-weight: semibold;
    font-size: 20px;
  }

  p {
    flex-grow: 1;
    overflow-y: auto;
    color: black;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 227px;
  height: 258px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  @media (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;

const Image = styled.img`
  width: 227px;
  height: 258px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Button = styled.a`
  // Changed to anchor tag for links
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 100px;
  bottom: 50px;
  text-decoration: none;
  transition:
    background-color 0.3s,
    box-shadow 0.3s;

  &:hover {
    background-color: red;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 10px;
  }
`;

export default MyCarousel;
