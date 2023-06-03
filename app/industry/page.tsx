'use client'
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIndustry } from "@/app/GlobalRedux/ideaSlice";
import { RootState } from "@/app/GlobalRedux/store";
import Link from "next/link";

export const industries = {
  names: ['Finance', 'Education', 'AI', 'Food', 'Fashion', 'Nature', 'Travel', 'Health'],
  titles: ['💸 Finance', '📓 Education', '🤖 AI', '🍔 Food', '👗 Fashion', '🌿 Nature', '🚗 Travel', '🏥 Health'],
};

export default function Industry() {
  const industry = useSelector((state: RootState) => state.idea.industry);
  const dispatch = useDispatch();

  const addToIndustries = useCallback((industryName : string) => {
    const industryIndex = industry.indexOf(industryName);
    if (industryIndex !== -1) {
      const newIndustry = [...industry];
      newIndustry.splice(industryIndex, 1);
      dispatch(setIndustry(newIndustry));
    } else if (industry.length >= 3) {
      const newIndustry = [...industry];
      newIndustry.shift();
      newIndustry.push(industryName);
      dispatch(setIndustry(newIndustry));
    } else {
      dispatch(setIndustry([...industry, industryName]));
    }
  }, [industry, dispatch]);

  return (
    <div className="main flex flex-col justify-center items-center text-white max-w-[24rem] gap-6">
      <div id="title" className="text-2xl font-bold text-center">What industry are you interested in?<br/>Pick up to three! {`(${industry.length}/3)`}</div>
      <div id="buttons" className="flex gap-3 flex-wrap max-w-[24rem] justify-center">
        {industries.names.map((industryName, index) => (
          <button 
            key={industryName}
            className={`btn ${industry.includes(industryName) ? 'btn-active' : ''} hover:border-white`} 
            onClick={() => addToIndustries(industryName)}>
            {industries.titles[index]}
          </button>
        ))}
      </div>
      <div className="flex justify-around items-center min-w-[24rem]">
        <Link href='/ '>
            <button className="btn bg-pink-500 text-white hover:bg-pink-700">Previous</button>
        </Link>
        <Link href='/customer/gender' hidden={industry.length < 1}>
            <button className="btn bg-pink-500 text-white hover:bg-pink-700">Next</button>
        </Link>
      </div>
    </div>
  );
}
