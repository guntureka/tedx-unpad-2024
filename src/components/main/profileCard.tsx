"use client"

import React from 'react';

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  title: string;
  barText: string;
  barColor: string;
  triangleColor: string;
}

export const ProfileCard = ({ imageSrc, name, title, barText, barColor, triangleColor }: ProfileCardProps) => {
  return (
    <div className="flex flex-col items-center text-white p-0.2 m-0">
      <div className="text-center mb-2">
        <p className="font-bold mb-5" style={{ fontSize: '18px', whiteSpace: 'pre-wrap' }}>{barText}</p>
        <div className="w-80 h-8 mt-2" style={{ backgroundColor: barColor, border: "1.75px solid white" }}></div>
      </div>
      <div className="relative mb-4 mt-2">
        {/* Segitiga */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0" style={{
          borderLeft: "18px solid transparent",
          borderRight: "18px solid transparent",
          borderTop: `30px solid ${triangleColor}`
        }}></div>
        <img src={imageSrc} alt={name} className="rounded-lg w-32 h-32 object-cover object-top mt-16" />
      </div>
      <div className="text-center mt-4">
        <p className={`text-xl font-bold ${name === 'COMING SOON' ? 'text-sm' : ''}`}>{name}</p>
        <p className="text-sm" style={{ color: '#999999' }}>{title}</p>
      </div>
    </div>
  );
};