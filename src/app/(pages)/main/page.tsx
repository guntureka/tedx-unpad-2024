import { Banner } from "@/components/Banner";
import { AboutUs } from "@/components/AboutUs";
import { CardBody, CardContainer, CardItem } from "@/components/LogoX";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    } from "@/components/Carousel";


    export default function Home() {
    const images = ["/banner1.jpg"];
    const slides = [
        {
        title: "The Power of Vulnerability",
        speaker: "Dr. Emily Johnson",
        description:
            "In this compelling TED Talk, Dr. Emily Johnson delves into the transformative potential of vulnerability. Drawing from her extensive research in psychology and personal experiences, she explores how embracing our imperfections can lead to deeper connections, personal growth, and resilience. Join her on a journey to discover the courage and strength that lie within our vulnerabilities, and learn how they can become our greatest assets in navigating life's challenges.",
        image: "/banner1.jpg",
        },
        {
            title: "The Power of Vulnerability",
            speaker: "Dr. Emily Johnson",
            description:
                "In this compelling TED Talk, Dr. Emily Johnson delves into the transformative potential of vulnerability. Drawing from her extensive research in psychology and personal experiences, she explores how embracing our imperfections can lead to deeper connections, personal growth, and resilience. Join her on a journey to discover the courage and strength that lie within our vulnerabilities, and learn how they can become our greatest assets in navigating life's challenges.",
            image: "/banner1.jpg",
            },
        // Add more slide objects as needed
    ];

    return (
        <main>
        <Banner className="h-[40rem]" images={images}>
            <div className="z-50 flex flex-col justify-center items-start md:flex px-8 md:px-16">
            <h1 className="font-bold md:text-7xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                TEDxUNPAD
            </h1>
            <h2 className="md:text-4xl text-left bg-clip-text text-transparent text-[#EA887B] bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                The Flavours of Wisdom
            </h2>
            <p className="md:text-3xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                A place where wisdom can be seen and discovered
            </p>

            <div className="flex flex-row gap-5">
                <button className="w-[258px] h-[66px] px-4 py-2 backdrop-blur-sm bg-[#C93420] text-white text-center rounded-[20px] relative mt-4 hover:bg-[#721E12] hover:text-[#999999]">
                <span>Buy Ticket</span>
                </button>
            </div>
            </div>
        </Banner>

        <div className="flex flex-row justify-between gap-8 w-full">
            <div className="flex flex-1 flex-col justify-center mt-20 items-center">
            <div className="w-[633px] h-[163px] mb-8">
                <div className="relative shadow-xl bg-darkgrey border border-[#C93420] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-left text-left">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    About TEDx
                </h1>
                <p className="font-normal text-base text-white mb-4 relative z-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    vestibulum dolor vel ipsum scelerisque, eget lacinia libero
                    hendrerit. Vivamus tempus ultricies metus, quis ullamcorper
                    libero accumsan id. Cras vel pharetra arcu.
                </p>
                <AboutUs number={20} />
                </div>
            </div>

            <div className="w-[633px] h-[163px]">
                <div className="relative shadow-xl bg-darkgrey border border-[#C93420] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-left text-left">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    About TEDxPadjadjaran University
                </h1>
                <p className="font-normal text-base text-white mb-4 relative z-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    vestibulum dolor vel ipsum scelerisque, eget lacinia libero
                    hendrerit. Vivamus tempus ultricies metus, quis ullamcorper
                    libero accumsan id. Cras vel pharetra arcu.
                </p>
                {/* <AboutUs number={20} /> */}
                </div>
            </div>
            </div>

            <div className="flex-1">
            <CardContainer className="inter-var">
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-600 sm:w-600 h-600 p-6">
                <CardItem translateZ="100" className="w-auto mt-4">
                    <Image
                    src="/logox.png"
                    height="600"
                    width="600"
                    className="h-600 w-600 object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                    />
                </CardItem>
                </CardBody>
            </CardContainer>
            </div>
        </div>

        <Timeline />

        <div className="justify-center items-center min-h-screen bg-black mt-20">
            <div className="text-center mb-8 text-white">
            <h1 className="text-2xl font-bold">
                Explore Our Discussion Topics and Featured Speakers
            </h1>
            </div>

            <div className="flex justify-center">
            <Carousel className="w-full max-w-2xl max-h-1x1">
                <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                    <div className="p-8 bg-white text-black rounded-lg shadow-lg flex mt-10">
                        <div className="w-1/3 h-1/3 flex items-center justify-center bg-red-500 rounded-lg">
                        <img
                            src={slide.image}
                            alt="Speaker"
                            className="object-cover h-full w-full rounded-lg"
                        />
                        </div>
                        <div className="w-2/3 p-4">
                        <h2 className="text-xl font-bold mb-2 ml-4">{slide.title}</h2>
                        <h3 className="text-lg mb-2 ml-4">{slide.speaker}</h3>
                        <p className="text-sm ml-4">{slide.description}</p>
                        </div>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="text-white" />
                <CarouselNext className="text-white" />
            </Carousel>
            </div>
        </div>
        </main>
    );
}
