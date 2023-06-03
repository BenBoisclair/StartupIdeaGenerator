"use client";
import { MoneyBill1 } from "@styled-icons/fa-regular/MoneyBill1";
import { useState } from "react";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { setIncome } from "@/app/GlobalRedux/ideaSlice";
import { RootState } from "@/app/GlobalRedux/store";

interface Income {
  incomeType: string;
  isSelected: boolean;
  dispatchIncome: (incomeType: string) => void; // change this line
}

const IncomeButton = ({ incomeType, isSelected, dispatchIncome }: Income) => {
  return (
    <button
      className={`${
        isSelected ? "selected" : ""
      } p-6 rounded-lg flex flex-col items-center active:scale-95 transition-all bg-green-400 gap-2 group hover:text-white`}
      onClick={() => dispatchIncome(incomeType)}
    >
      <MoneyBill1 size="4rem" />
      <span className="font-bold">{incomeType}</span>
    </button>
  );
};

export default function Income() {
  const income = useSelector((state: RootState) => state.idea.income);
  const dispatch = useDispatch();

  const dispatchIncome = (incomeType: string) => {
    dispatch(setIncome(incomeType));
  };

  return (
    <div className="main flex flex-col justify-center items-center text-white max-w-[24rem] gap-6">
      <div className="font-bold text-center flex flex-col gap-2">
        <div id="title" className="text-2xl">
          Who are you solving the problem for?
        </div>
        <div id="sub-title" className="text-xl">
          What is their Income? (Baht)
        </div>
      </div>
      <div className="flex p-2 gap-4 justify-center text-gray-300">
        <IncomeButton
          incomeType="Less than 10,000"
          isSelected={income.includes("Less than 10,000")}
          dispatchIncome={dispatchIncome}
        />
        <IncomeButton
          incomeType="10,000 to 100,000"
          isSelected={income.includes("10,000 to 100,000")}
          dispatchIncome={dispatchIncome}
        />
        <IncomeButton
          incomeType="More than 100,000"
          isSelected={income.includes("More than 100,000")}
          dispatchIncome={dispatchIncome}
        />
      </div>
      <div className="flex justify-around items-center min-w-[24rem]">
        <Link href="/customer/gender">
          <button className="btn bg-pink-500 text-white hover:bg-pink-700">
            Previous
          </button>
        </Link>
        <Link href="/customer/occupation" hidden={income.length < 1}>
          <button className="btn bg-pink-500 text-white hover:bg-pink-700">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
