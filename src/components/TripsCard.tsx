
"use client"

import { useState } from "react";
import Image from "next/image";
import { Trip, TripDate } from "@/data/trips";

interface TripCardProps {
    trip: Trip;
}

function TripCard({ trip }: TripCardProps) {
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);
    const selectedTripDate = trip.tripDates[selectedDateIndex];

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
            {/* Cover Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={trip.coverImage}
                    alt={trip.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 384px) 100vw, 384px"
                    priority={false}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "/img/bg.jpg";
                    }}
                />
                <div className="absolute top-3 left-3 bg-black/40 text-white px-2 py-1 rounded-lg text-lg font-semibold backdrop-blur-sm">
                    {selectedTripDate.availableSeats} ที่นั่งเหลือ
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {trip.title}
                </h3>

                {/* Duration */}
                <div className="flex items-center text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{trip.duration}</span>
                </div>

                {/* Travel Dates Selection */}
                <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">เลือกรอบเดินทาง:</p>
                    <select
                        value={selectedDateIndex}
                        onChange={(e) => setSelectedDateIndex(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 "
                    >
                        {trip.tripDates.map((tripDate, index) => (
                            <option key={index} value={index}>
                                {tripDate.startDate} - {tripDate.endDate} ({tripDate.availableSeats} ที่นั่ง)
                            </option>
                        ))}
                    </select>
                </div>

                {/* Commission */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-orange-600 text-2xl font-bold">
                            คอมมิชชั่น {trip.commission.toLocaleString()}.-
                        </span>
                    </div>
                </div>

                {/* Book Button */}
                <div className="w-3/4 md:w-full md:px-5 flex items-center justify-center mx-auto">
                    <button className="bg-orange-600 w-full hover:bg-orange-700 text-white font-semibold py-2 px-2 rounded-full  duration-200 transition-all transform hover:scale-105">
                        ดูทริป
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TripCard;