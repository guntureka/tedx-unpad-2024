import React from "react";

const FestivalBanner = () => {
  return (
    <div className="bg-red-600 flex flex-col md:flex-row justify-between p-8 rounded-lg z-10 space-y-10">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl text-center md:text-left md:text-3xl font-bold">
          The Flavours of Wisdom Festival
        </h1>
        <p className="text-sm">
          A piece where wisdom can be seen and discovered
        </p>
        <p className="text-sm">TEDx Padjadjaran University</p>
      </div>
      <div className="flex flex-col place-content-end items-center">
        <h3 className="text-center text-sm text-white">Follow Us On:</h3>
        <div className="flex flex-row items-center">
          <a href="https://www.instagram.com/tedxpadjadjaranuniversity/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
            >
              <path
                d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"
                fill="#FFFFFF"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/tedx-padjadjaran-university/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32px"
              height="32px"
              viewBox="0 0 50 50"
            >
              <path
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                fill="#FFFFFF"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FestivalBanner;
