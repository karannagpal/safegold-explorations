"use client";

import { useState } from "react";
import Button from "../Button";
import { ButtonVariant } from "@/types";

function BuyGoldForm({ liveBuyPrice }: { liveBuyPrice: number }) {
  const [isBuyRupees, setIsBuyRupees] = useState<Boolean>(true);
  const [goldAmount, setGoldAmount] = useState<Number>(0);
  
  const [gramValue, setGramValue] = useState<Number>(0)
  const [formError, setFormError] = useState<String>("");

  const handleRadioClick = (newValue: boolean) => {
    setIsBuyRupees(newValue);
  };

  const handleGoldAmountChange = (amount: string | number) => {
    // ensuring only numbers are typed
    if (Number.isNaN(+amount)) {
      return false;
    }

    if (amount === "") {
      setFormError("This field is required");
    }

    if (isBuyRupees) {
      if (+amount < 10) {
        setFormError("Minimum allowed limit is Rs 10");
      } else if (+amount > 500000) {
        setFormError("Max allowed limit is Rs 5 lac");
      } else {
        setFormError("");
      }
    } else {
      if (+amount * liveBuyPrice < 10) {
        setFormError(`Minimum allowed limit is ${(10 / liveBuyPrice).toFixed(4)} grams (Rs 10)`);
      } else if (+amount * liveBuyPrice > 500000) {
        setFormError(`Maximum allowed limit is ${(500000 / liveBuyPrice).toFixed(4)} grams (Rs 5 lac)`);
      } else {
        setFormError("");
      }
    }

    setGoldAmount(+amount);
  };

  const handleSubmit = () => {
    if (formError !== "") {
      console.log("form errors to be resolved before submitting");
      return false;
    }
    alert("good to go");
  };

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
        <div className="mt-8">
          <div className="mb-8">
            <label className=" mr-2" htmlFor="enterAmountInput">
              Enter Amount
            </label>
            <input
              required
              type="tel"
              value={+goldAmount}
              onChange={(e) => handleGoldAmountChange(e.target.value)}
              id="enterAmountInput"
              className="rounded-md p-2"
            />
            <span className="ml-2">{isBuyRupees ? "rupees" : "grams"}</span>
            <div className="text-red-700">{formError}</div>
          </div>
          <Button
            ctaText="Proceed to Buy >>"
            onClickHandler={handleSubmit}
            variant={ButtonVariant.GREEN_OUTLINED}
          />
        </div>
      </form>
    </div>
  );
}

export default BuyGoldForm;
