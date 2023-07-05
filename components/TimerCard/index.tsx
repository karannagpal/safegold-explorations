import React from "react";

function TimerCard() {
  const progress = 30;
  return (
    <div className="border border-white max-w-[360px] rounded-lg text-white overflow-hidden">
      <div className="pt-4 pb-3 px-4 bg-gradient-to-r from-sg-dark-green-500 to-sg-dark-green-700">
        <div className="flex justify-between">
          <aside>
            <div className="text-xs flex">
              <div className="py-1 mr-1">LIVE BUYING PRICE</div>
              <div className="bg-sky-400 rounded p-1">24K • 99.99%</div>
            </div>
            <div>Rs 6,322/gm</div>
          </aside>
          <aside>
            <div className="text-center p-4">03:30</div>
          </aside>
        </div>
      </div>
			<div className={`bg-[#EAB640] rounded-b-2xl h-1 max-w-[30%]`}></div>
    </div>
  );
}

export default TimerCard;
