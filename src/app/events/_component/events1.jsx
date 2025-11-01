"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, CalendarDays } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventList = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterType, setFilterType] = useState("");
  const [events, setEvents] = useState([
    {
      id: 1,
      day: "Thu",
      date: "28",
      monthYear: "May 2026",
      dateTime: "May 28, 2026 @ 6:00 pm – 10:00 pm",
      title: "2026 IND vs ENG (W) T20 International",
      venue:
        "Essex County Cricket Club — The Cloud County Ground, Chelmsford, Sussex, United Kingdom",
      description:
        "Join Cricket Lovers Global on 28 May 2026 for an unforgettable night of cricket as India Women face England Women in a thrilling T20 clash. This isn’t just about the match — it’s about the experience.",
      ticketsLink: "#",
      price: "£998.00 – £999.00 • 120 tickets left",
      type: "paid",
    },
  ]);

  // Handle Filter Change
  const handleFilterChange = (value) => {
    setFilterType(value);

    // API call yaha lagega ✅
    console.log("Selected Filter:", value);

    // Example API (jab tum endpoint doge)
    // fetch(`/api/events?type=${value}`)
    //   .then(res => res.json())
    //   .then(data => setEvents(data))
  };

  return (
    <section className="min-h-full bg-white px-4 md:px-16 py-10 text-gray-800 relative">
      
      {/* Search */}
      <div className="flex flex-col md:flex-row items-center justify-between border border-gray-300 rounded-lg shadow-sm py-3 px-4 gap-4">
        <div className="flex items-center w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2">
          <Search className="text-gray-400 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search for events"
            className="w-full outline-none text-sm md:text-base"
          />
        </div>
        <button className="bg-[#551FFF] text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-[#4513e0] transition cursor-pointer">
          Find Events
        </button>
      </div>

      {/* Filter & Calendar */}
      <div className="flex items-center justify-between mt-6 border-b border-gray-300 pb-2 relative">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>

          {/* ✅ Filter Dropdown */}
          <select
            className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100 cursor-pointer"
            value={filterType}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="">Filter Events</option>
            <option value="free">Free Entry</option>
            <option value="paid">Paid Entry</option>
          </select>
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer relative"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <h2 className="text-xl md:text-2xl font-semibold">Upcoming</h2>
          <CalendarDays size={20} className="text-gray-600" />
          <span className="text-gray-500 text-lg">{showCalendar ? "▴" : "▾"}</span>

          {showCalendar && (
            <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-2">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Event List */}
      <div className="mt-5 border-t border-gray-200 pt-4">
        {events.map((event) => (
          <div key={event.id} className="mb-10 border-b border-gray-200 pb-6">
            <p className="text-gray-500 text-sm md:text-base mb-4">{event.monthYear}</p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="flex flex-col items-center w-20">
                <p className="uppercase text-xs text-gray-500">{event.day}</p>
                <h3 className="text-3xl font-bold text-gray-800">{event.date}</h3>
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-500">{event.dateTime}</p>
                <a href={event.ticketsLink} className="text-lg md:text-2xl font-semibold mt-2 mb-4 text-gray-900 hover:underline">
                  {event.title}
                </a>
                <p className="text-sm md:text-base text-gray-700 mt-3">
                  <strong>{event.venue.split("—")[0]}</strong> — {event.venue.split("—")[1]}
                </p>
                <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed tracking-normal">{event.description}</p>

                <a href={event.ticketsLink} className="inline-block mt-3 text-blue-600 font-medium hover:underline">
                  Get Tickets
                </a>
                <a href="#" className="text-sm text-gray-500 ml-4">{event.price}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventList;
