"use client";
import { useState } from "react";
import Link from "next/link";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

import type { RootState } from "../../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { setCountry } from "@/app/GlobalRedux/ideaSlice";

// Registering the languages outside of the component
countries.registerLocale(enLocale);
countries.registerLocale(itLocale);

// Returns an object not a list
const countryObj = countries.getNames("en", { select: "official" });

const countryArr = Object.entries(countryObj).map(([key, value]) => {
  return {
    label: value,
    value: key,
  };
});

export default function Country() {
  const country = useSelector((state: RootState) => state.idea.country);
  const dispatch = useDispatch();

  const selectCountryHandler = (value: string) => dispatch(setCountry(value));

  return (
    <div className="main flex flex-col justify-center items-center text-white max-w-[24rem] gap-6">
      <div className="font-bold text-center flex flex-col gap-2">
        <div id="title" className="text-2xl">
          Who are you solving the problem for?
        </div>
        <div id="sub-title" className="text-xl">
          Where do they live?
        </div>
      </div>
      <div id="buttons" className="flex flex-col p-2 gap-3 justify-center">
        <select
          value={country}
          onChange={(e) => selectCountryHandler(e.target.value)}
          className="select select-primary w-full max-w-xs"
        >
          <option disabled selected>
            Where do they live?
          </option>
          {!!countryArr?.length &&
            countryArr.map(({ label, value }) => (
              <option key={value} value={label}>
                {label}
              </option>
            ))}
        </select>
      </div>
      <div className="flex justify-around items-center min-w-[24rem]">
        <Link href="/customer/occupation">
          <button className="btn bg-pink-500 text-white hover:bg-pink-700">
            Previous
          </button>
        </Link>
        <Link href="/confirm" hidden={country.length < 1}>
          <button className="btn bg-pink-500 text-white hover:bg-pink-700">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
