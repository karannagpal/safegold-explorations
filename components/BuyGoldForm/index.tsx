"use client";

import { useState } from "react";
import Button from "../Button";
import { ButtonVariant } from "@/types";

function BuyGoldForm() {
  const [isBuyRupees, setIsBuyRupees] = useState<Boolean>(true);
  const [goldAmount, setGoldAmount] = useState<Number>(0);

  const handleRadioClick = (newValue: boolean) => {
    setIsBuyRupees(newValue);
  };

  // validations
  // required
  // min, max purchase amount in rupees
  // rupee-gram conversions for both of above ^^

  return (
    <div className="bg-green-300 rounded-lg p-4">
      <form>
        <div className="flex justify-evenly p-1">
          <div className="flex">
            <input
              type="radio"
              id="buyInRupeesRadio"
              checked={!!isBuyRupees}
              onClick={() => handleRadioClick(true)}
            />
            <label htmlFor="buyInRupeesRadio" className="ml-2">
              Buy in Rupees
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              id="buyInGramsRadio"
              checked={!isBuyRupees}
              onClick={() => handleRadioClick(false)}
            />
            <label htmlFor="buyInGramsRadio" className="ml-2">
              Buy in Grams
            </label>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <label className=" mr-2" htmlFor="enterAmountInput">
              Enter Amount
            </label>
            <input
              required
              type="tel"
              id="enterAmountInput"
              className="rounded-md p-2"
            />
            <span className="ml-2">{isBuyRupees ? "rupees" : "grams"}</span>
          </div>
          <Button
            ctaText="Proceed to Buy >>"
            onClickHandler={() => alert("submit")}
            variant={ButtonVariant.GREEN_OUTLINED}
            customClasses="bg-black text-yellow-200"
          />
        </div>
      </form>
    </div>
  );
}

export default BuyGoldForm;
