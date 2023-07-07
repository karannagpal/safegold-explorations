"use client";

import { useEffect, useState } from "react";

function TimerCard({ deadline }: { deadline: Date }) {
  const now = new Date();
  const seconds_left = Math.floor((deadline.getTime() - now.getTime()) / 1000);

  const [timerValue, setTimerValue] = useState<number>(seconds_left);
  const [progress, setProgress] = useState<number>(100);

  useEffect(() => {
    const custom_timer = setInterval(() => {
      if (timerValue !== 0) {
        setTimerValue(timerValue - 1);
        setProgress(timerValue * 0.333);
      }
    }, 1000);

    return () => clearInterval(custom_timer);
  }, [timerValue]);

  const getElapsedTime = (seconds: number) => {
    let seconds_left = seconds;
    let minutes_left = 0;
    if (seconds > 60) {
      minutes_left = Math.floor(seconds / 60);
      seconds_left = seconds % 60;
    }
    return `${minutes_left}:${seconds_left.toString().padStart(2, "0")}`;
  };

  const getWidth = (progress: number) => {
    return `w-[${Math.floor(progress)}%]`;
  };

  return (
    <div className="border border-white max-w-[640px] rounded-lg text-white overflow-hidden">
      <div className="pt-4 pb-3 px-4 bg-gradient-to-r from-sg-dark-green-500 to-sg-dark-green-700">
        <div className="flex justify-between">
          <aside>
            <div className="text-xs text-sg-dark-primary-100 flex">
              <div className="py-1 mr-1">LIVE BUYING PRICE</div>
              <div className="bg-[#4695A1] border border-[#ebebeb] inset-shadow-dark rounded p-1">
                24K • 99.99%
              </div>
            </div>
            <div>Rs 6,322/gm</div>
          </aside>
          <aside>
            <div className="text-center p-4">{getElapsedTime(timerValue)}</div>
          </aside>
        </div>
      </div>
      <div
        className={`bg-[#EAB640] rounded-b-2xl h-1 ${getWidth(progress)}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default TimerCard;
