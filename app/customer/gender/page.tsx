"use client";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGender } from "@/app/GlobalRedux/ideaSlice";
import { RootState } from "@/app/GlobalRedux/store";
import Link from "next/link";
import { genderIcons } from "../../src/gender-icons";

export default function Gender() {
  const gender = useSelector((state: RootState) => state.idea.gender);
  const dispatch = useDispatch();

  const dispatchGender = useCallback(
    (genderType: string) => {
      dispatch(setGender(genderType));
    },
    [dispatch]
  );

  return (
    <div className="main flex flex-col justify-center items-center text-white max-w-[24rem] gap-6">
      <div className="font-bold text-center flex flex-col gap-2">
        <div id="title" className="text-2xl">
          Who are you solving the problem for?
        </div>
        <div id="sub-title" className="text-xl">
          What is their Gender?
        </div>
      </div>
      <div className="flex p-2 gap-4 flex-wrap justify-center max-w-[20rem] text-gray-300">
        <button
          className={`${
            gender.includes("Male") ? "selected" : ""
          } p-6 rounded-lg flex flex-col items-center active:scale-95 transition-all bg-blue-500 gap-2 group hover:text-white`}
          onClick={() => dispatchGender("Male")}
        >
          <Male size="4rem" />
          <span className="font-bold">Male</span>
        </button>
        <button
          className={`${
            gender.includes("Female") ? "selected" : ""
          } p-6 rounded-lg flex flex-col items-center active:scale-95 transition-all bg-pink-400 gap-2 group hover:text-white`}
          onClick={() => dispatchGender("Female")}
        >
          <Female size="4rem" />
          <span className="font-bold">Female</span>
        </button>
        <button
          className={`${
            gender.includes("Other Genders") ? "selected" : ""
          } p-6 rounded-lg flex flex-col items-center active:scale-95 transition-all bg-purple-400 gap-2 group hover:text-white`}
          onClick={() => dispatchGender("Other Genders")}
        >
          <GenderAmbiguous size="4rem" />
          <span className="font-bold">Other</span>
        </button>
        <button
          className={`${
            gender.includes("Not Specific") ? "selected" : ""
          } p-6 rounded-lg flex flex-col items-center active:scale-95 transition-all bg-gray-400 gap-2 group hover:text-white`}
          onClick={() => dispatchGender("Not Specific")}
        >
          <Genderless size="4rem" />
          <span className="font-bold">
            Not <br />
            Specific
          </span>
        </button>
      </div>
      <div className="flex justify-around items-center min-w-[24rem]">
        <Link href="/industry">
          <button className="btn bg-pink-500 text-white hover:bg-pink-700">
            Previous
          </button>
        </Link>
        <Link href="/customer/income" hidden={gender.length < 1}>
          <button className="btn bg-pink-500 text-white hover:bg-pink-700">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
