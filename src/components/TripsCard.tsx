
"use client"

import { useState } from "react";
import Image from "next/image";
import { TripWithDetails } from "@/lib/supabase";
import { LuCalendarDays } from "react-icons/lu";

interface TripCardProps {
    trip: TripWithDetails;
}

function TripCard({ trip }: TripCardProps) {
    const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(0);
    const selectedSchedule = trip.trip_schedules[selectedScheduleIndex];
    
    // Format dates to Thai format
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const thaiMonths = [
            'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
            'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
        ];
        return `${date.getDate()} ${thaiMonths[date.getMonth()]} ${date.getFullYear() + 543}`;
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
            {/* Cover Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={trip.cover_image_url || "/img/bg.jpg"}
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
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 h-14 flex items-start">
                    <span className="line-clamp-2 leading-7">
                        {trip.title}
                    </span>
                </h3>

                {/* deadline */}
                <div className="flex items-center text-gray-600 mb-3">
                    <LuCalendarDays className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                        {selectedSchedule 
                            ? `ปิดรับสมัคร: ${formatDate(selectedSchedule.registration_deadline)}`
                            : 'ไม่มีข้อมูลกำหนดการ'
                        }
                    </span>
                </div>

                {/* Travel Dates Selection */}
                {trip.trip_schedules && trip.trip_schedules.length > 0 && (
                    <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-2">เลือกรอบเดินทาง:</p>
                        <select
                            value={selectedScheduleIndex}
                            onChange={(e) => setSelectedScheduleIndex(Number(e.target.value))}
                            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 "
                        >
                            {trip.trip_schedules.map((schedule, index) => (
                                <option key={schedule.id} value={index}>
                                    {formatDate(schedule.departure_date)} - {formatDate(schedule.return_date)}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Commission */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-orange-600 text-2xl font-bold">
                            คอมมิชชั่น {trip.commission_value.toLocaleString()}.-
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