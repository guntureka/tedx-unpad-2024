"use client"

import React from 'react';

export const EventCard = () => {
  return (
    <div className="max-w-3xl mx-auto text-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Are you ready for our Main Event?</h2>
        <p className="text-lg mb-6 " style={{ color: '#EA887B' }}>TEDx Padjadjaran University 2024: The Flavors of Wisdom</p>
        <div className="mb-6">
          <p className="mb-4">
            <span className="text-gray-400">Date</span>
            <span className="text-white ml-8">Saturday, July 6th 2024</span>
          </p>
          <p className="mb-4">
            <span className="text-gray-400">Time</span>
            <span className="text-white ml-8">14:00 - 20:00 WIB</span>
          </p>
          <p className="mb-4">
            <span className="text-gray-400">Place</span>
            <span className="text-white ml-8">De Majestic Bandung (Jl. Braga No.1)</span>
          </p>
        </div>
        <div className="flex space-x-4 mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-8 rounded">Read More</button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-8 rounded">Get Directions</button>
        </div>
      </div>
    </div>
  );
};

