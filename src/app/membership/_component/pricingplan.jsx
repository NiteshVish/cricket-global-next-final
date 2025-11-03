"use client";
import React, { useEffect, useState } from "react";
import { Imgmembership } from "@/shared/images";
import Image from "next/image";
import membershipApi from "@/api/membership.api";
import { toast } from "react-toastify";
import { htmlToString } from "@/utils/htmlTostring";


const PricingPlan = () => {
  const [plans, setPlans] = useState([]);

  const fetchPlans = async () => {
    try {
      const res = await membershipApi.getAllPlans();
      console.log("Membership Plans Response:", res);

      if (res.status?.toLowerCase() === "success") {
  setPlans(res.data);
}

    } catch (error) {
      console.log("Fetch membership error:", error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handlePayment = async (plan) => {
    try {
      const payload = {
        membershipId: plan._id,
        price: plan.price,
      };

      const res = await membershipApi.createMembershipPayment(payload);
      console.log("Membership payment res:", res);

      if (!res || res?.status?.toLowerCase() !== "success") {
        return toast.error(res?.message || "Payment failed ❌");
      }

      window.location.href = res.data.url; // ✅ Redirect to stripe

    } catch (error) {
      console.log("Payment Error:", error);
      toast.error("Something went wrong ❌");
    }
  };

  // UI START
  return (
    <section  className="bg-white py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1b2141] mb-18 text-center">
                Pricing Plans
              </h1>
      {plans.length > 0 && (
        <>
          {/* PLAN 1 */}
          <section>
            <div className="bg-white min-h-full flex flex-col items-center ">
              

              <div className="flex flex-col md:flex-row items-center justify-center gap-30 max-w-7xl">
                <div className=" rounded-2xl overflow-hidden shadow-lg max-w-xl bg-green-100">
                  <Image
                    src={Imgmembership.imgPassion1}
                    alt="Membership Promo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="max-w-lg">
                  <p className="text-blue-600 font-bold text-2xl mb-2 pt-6 gap-5">
                    £{plans[0]?.price}
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#1b2141] leading-snug mb-6">
                    {plans[0]?.name}
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    {htmlToString(plans[0]?.description)}
                  </p>

                  <button
                    onClick={() => handlePayment(plans[0])}
                    className="bg-green-600 text-white font-semibold text-lg px-5 py-3 !rounded-full shadow-md hover:bg-white hover:text-green-500 border-2 transition-all duration-200"
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
              </div>
            </section>

            {/* PLAN 2 */}
            <section>
              <div className="bg-[#f7f9fc] h-full flex flex-col justify-center px-6 md:px-20 lg:px-32 py-12">
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  
                  <div className="max-w-xl">
                    <p className="text-[#2e5ae0] font-bold text-lg mb-2">
                      £{plans[1]?.price} / YEAR
                    </p>

                    <h1 className="text-[#1b2141] font-bold !text-4xl mb-6">
                      {plans[1]?.name}
                    </h1>

                    <p className="text-[#324c72] text-[16px] leading-relaxed mb-8">
                      {plans[1]?.description}
                    </p>

                    <button
                      onClick={() => handlePayment(plans[1])}
                      className="bg-[#34a853] text-white font-bold text-lg px-8 py-3 rounded-full shadow-md hover:bg-white hover:text-green-500 border-2 transition-opacity duration-200"
                    >
                      GET STARTED
                    </button>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-md max-w-xl">
                    <Image
                      src={Imgmembership.imgPassion1}
                      alt="Solo Membership"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
        </>
      )}
    </section>
  );
};

export default PricingPlan;
