'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import two from '../../../assets/pwp.png'
import Image from "next/image";
import { recoleta } from "@/app/fonts";
import { poppins } from "@/app/fonts";
// import "./PopularVideosCarousel.css"; // Optional for custom styling

const PopularVideosCarousel: React.FC = () => {
    const videos = [
        {
            id: 1,
            title: "CV FOR LAW INTERNSHIP || LAW INTERNSHIP CV FOR BEGINNERS",
            date: "June 18, 2024",
            image: two, // Replace with actual image
            link: "https://youtu.be/ufOEAI-Tuok", // Dynamic video link
        },
        {
            id: 2,
            title: "Work with Tech-Sustainable Startup I Apply for Off-campus Internships for college students I PWP",
            date: "March 1, 2024",
            image: two,
            link: "/", // Dynamic video link
        },
        {
            id: 3,
            title: "How to become Data Privacy & Technology Lawyer | Data Protection and Privacy Laws",
            date: "April 23, 2024",
            image: two,
            link: "/", // Dynamic video link
        },
        
        {
            id: 4,
            title: "CV FOR LAW INTERNSHIP || LAW INTERNSHIP CV FOR BEGINNERS",
            date: "June 18, 2024",
            image: two, // Replace with actual image
            link: "https://youtu.be/ufOEAI-Tuok", // Dynamic video link
        },
        {
            id: 5,
            title: "Work with Tech-Sustainable Startup I Apply for Off-campus Internships for college students I PWP",
            date: "March 1, 2024",
            image: two,
            link: "/", // Dynamic video link
        },
        {
            id: 6,
            title: "How to become Data Privacy & Technology Lawyer | Data Protection and Privacy Laws",
            date: "April 23, 2024",
            image: two,
            link: "/", // Dynamic video link
        },
        
        
    ];

    return (
        <div className="2xl:px-60 mb-16 lg:mb-28">
            {/* Heading and Buttons */}
            <div className="flex justify-between items-center mb-6 px-5 ">
                <h2 className={`${recoleta.className} text-[34px] lg:text-7xl 2xl:text-7xl font-bold`}>
                Dive Into These <br className="hidden md:block" /><span className=" text-blue-600">Resourceful</span> <span className="relative">Videos <img src="./icons/yellow.png" className="w-60 absolute left-2 right-0 top-5 lg:top-10" alt="" /></span>
                </h2>
                <div className="flex space-x-4">
                    <button
                        className="button-prev bg-yellow-400 hover:bg-blue-400 px-3 lg:px-6 py-3 lg:py-6 flex items-center justify-center text-2xl rounded-full  transition duration-300"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
                    </button>
                    <button
                        className="button-next bg-yellow-400 hover:bg-blue-400 px-3 lg:px-6 py-3 lg:py-6 text-2xl rounded-full flex items-center justify-center transition duration-300"
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                    </button>
                </div>
            </div>

            {/* Swiper Carousel */}
            <Swiper
            
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true} // Enable infinite loop
                navigation={{
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 3 },
                }}
            >
                {videos.map((video) => (
                    <SwiperSlide key={video.id}>
                        <div className="hover:shadow-lg p-2  rounded-2xl bg-[#f9f6f3] hover:bg-[#fd976d] transition-shadow duration-300 mt-5 lg:my-10 overflow-hidden">
                            <div className="flex flex-col  transition duration-300">
                                {/* Make the card image a link */}
                                <a href={video.link}>
                                    <Image
                                        src={video.image}
                                        alt={video.title}
                                        className="object-cover rounded-2xl mb-4"
                                    />
                                </a>
                                <div className="p-4 lg:p-6 flex flex-col">
                                    <h3 className={`${poppins.className} text-lg lg:text-2xl 2xl:text-3xl font-semibold font-poppins mb-2`}>{video.title}</h3>
                                    <p className="text-gray-500 mb-4">{video.date}</p>
                                    {/* Make the "View" button a link */}
                                    <a
                                        href={video.link}
                                        className="text-blue-500 hover:underline inline-block"
                                    >
                                        View → 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PopularVideosCarousel;
