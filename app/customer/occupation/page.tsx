"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setOccupation } from "@/app/GlobalRedux/ideaSlice";
import { RootState } from "@/app/GlobalRedux/store";

export default function Occupation() {
  const occupation = useSelector((state: RootState) => state.idea.occupation);
  const dispatch = useDispatch();

  const handleOccupationClick = (selectedOccupation: string) => {
    dispatch(setOccupation(selectedOccupation));
  };

  return (
    <div className="main flex flex-col justify-center items-center text-white max-w-[24rem] gap-6">
      <div className="font-bold text-center flex flex-col gap-2">
        <div id="title" className="text-2xl">
          Who are you solving the problem for?
        </div>
        <div id="sub-title" className="text-xl">
          What is their Occupation?
        </div>
      </div>
      <div id="buttons" className="flex flex-col p-2 gap-3 justify-center">
        {["Student", "Office Worker", "Government", "Freelancer"].map(
          (occup) => (
            <button
              key={occup}
              className={`btn ${
                occupation.includes(occup) ? "btn-active" : ""
              } hover:border-white`}
              onClick={() => handleOccupationClick(occup)}
            >
              <span className="font-bold">{occup}</span>
            </button>
          )
        )}
      </div>
      {/* <div className='w-5/6'>
        <div className="divider after:bg-white before:bg-white">OR</div>
      </div>
      <div>
        <input type="text" onChange={() => setOccupation([])} placeholder="Other (Please Specify)" className="input input-bordered input-primary w-full max-w-xs" />
      </div> */}
      <div className="flex justify-around items-center min-w-[24rem]">
        <Link href="/customer/income">
          <button className="btn bg-pink-500 text-white hover:bg-pink-700">
            Previous
          </button>
        </Link>
        <Link href="/customer/country" hidden={occupation.length < 1}>
          <button className="btn bg-pink-500 text-white hover:bg-pink-700">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
