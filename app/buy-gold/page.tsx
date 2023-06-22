import BuyGoldForm from "@/components/BuyGoldForm";
import React from "react";

function page() {
  const lockerBalance = 3.432;
  const liveGoldRate = 5640.61;

  return (
    <div className="flex justify-between mx-auto max-w-6xl border-grey-400 border-2">
      <div className="w-[66%] max-w-4xl border-2 border-sky-200 p-2">
        <h1>Buy Gold</h1>
        <div className="flex justify-between my-2">
          <h2>Live buy price: ₹{liveGoldRate} /gm</h2>
          <h2>Locker balance: {lockerBalance} grams</h2>
        </div>
        <BuyGoldForm />
      </div>
      <div className="w-[33%] max-w-2xl border-2 border-sky-200 p-2">FAQs</div>
    </div>
  );
}

export default page;
