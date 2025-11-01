"use client";
import { useState } from "react";

export default function EventDetailsPage() {
  const [qty, setQty] = useState(1);
  const [showOptions, setShowOptions] = useState(false);
  const [option, setOption] = useState("");

  const price = 999; 
  const total = qty * price;

  const handleTicketClick = () => {
    setShowOptions(true);
  };

  const handleConfirm = () => {
    if (!option) {
      alert("Please select a purchase option (Required)");
      return;
    }
    alert(`✅ Ticket Added\nOption: ${option}\nQty: ${qty}`);
    setShowOptions(false);
    setOption("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          EXPERIENCE THE THRILL LIVE IN THE STADIUM!
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          GET YOUR TICKETS TO WATCH YOUR FAVORITE TEAM IN ACTION.
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-8 text-lg font-semibold">
          <p>OCTOBER 3, 2022 @ 8:00 AM - JULY 9, 2032 @ 5:00 PM</p>
          <p>PRICE : <span className="font-bold">$99.99</span></p>
        </div>
      </section>

      {/* How to Buy + Benefits */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 py-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">HOW TO BUY:</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700">✅ PURCHASE ONLINE THROUGH OUR OFFICIAL WEBSITE.</li>
            <li className="flex items-center gap-2 text-gray-700">✅ BUY FROM AUTHORIZED TICKETING PARTNERS.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">BENEFITS OF BUYING OFFICIAL TICKETS:</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700">✅ GUARANTEED ENTRY TO THE STADIUM.</li>
            <li className="flex items-center gap-2 text-gray-700">✅ ACCESS TO EXCLUSIVE FAN EVENTS.</li>
            <li className="flex items-center gap-2 text-gray-700">✅ PRIORITY FOR HIGH-DEMAND MATCHES AND FINALS.</li>
          </ul>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4 py-10">

        {/* Ticket Card */}
        <div className="md:col-span-2 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-5">TICKETS</h2>

          <p className="text-gray-600 text-sm mb-2">
            <span className="font-bold">VENUE:</span> OLD TRAFFORD CRICKET GROUND, MANCHESTER, UNITED KINGDOM
          </p>

          <div className="flex justify-between items-center py-4 border-b">
            <p className="font-bold text-lg">IND vs ENG (W) T20 INTERNATIONAL</p>
            <p className="font-bold text-lg">${price}.00</p>
          </div>

          {/* Quantity */}
          <div className="flex justify-between items-center py-6">
            <p className="font-bold text-gray-700">QUANTITY: {qty}</p>
            <div className="flex items-center gap-3">
              <button onClick={() => qty > 1 && setQty(qty - 1)} className="border px-3 py-1 rounded text-lg">-</button>
              <span className="font-bold text-lg">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="border px-3 py-1 rounded text-lg">+</button>
            </div>
          </div>

          <div className="flex justify-between items-center pb-6 border-b">
            <p className="font-bold">TOTAL: ${total}.00</p>

            {!showOptions ? (
              <button 
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700"
                onClick={handleTicketClick}
              >
                GET TICKETS
              </button>
            ) : (
              <div className="flex flex-col gap-3 w-48">
                <select
                  className="border p-2 rounded-md"
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value="">Select Option *</option>
                  <option value="T-Shirt">T-Shirt</option>
                  <option value="Bat">Bat</option>
                </select>

                <button
                  className="bg-green-600 text-white px-4 py-2 rounded font-bold hover:bg-green-700"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Ticket Details */}
        {/* Ticket Details */}
<div className="bg-white shadow-md p-8 rounded-lg md:w-[380px]">
  <h2 className="text-3xl font-bold mb-6">TICKET DETAILS</h2>
  <div className="space-y-5 text-base leading-relaxed">
    <p><span className="font-bold">START:</span> July 4, 2026 @ 2:00 PM</p>
    <p><span className="font-bold">END:</span> July 4, 2026 @ 6:00 PM</p>
    <p><span className="font-bold">COST:</span> £998.00 – £999.00</p>
    <p><span className="font-bold">EVENT CATEGORY:</span> T20 INTERNATIONAL</p>
  </div>
</div>


      </section>
    </div>
  );
}
