'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { setStartup } from "@/app/GlobalRedux/startupSlice";

import { industries } from "../industry/page";
import { Genderless, MoneyBill1 } from "styled-icons/fa-solid";
import { World } from '@styled-icons/boxicons-regular/World';
import { WorkOutline } from "styled-icons/material";
import { useState } from "react";


export default function Confirm() {
    const [loading, setLoading] = useState<boolean>(false)

    const industry = useSelector((state: RootState) => state.idea.industry)
    const gender = useSelector((state: RootState) => state.idea.gender)
    const income = useSelector((state: RootState) => state.idea.income)
    const occupation = useSelector((state: RootState) => state.idea.occupation)
    const country = useSelector((state: RootState) => state.idea.country)

    const dispatch = useDispatch()
    const router = useRouter();

    const generateIdea = async () => {
        setLoading(true)
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                industry,
                gender,
                income,
                occupation,
                country
            })
        })
        // Now we handle the response here
        const data = await response.json();
        setLoading(false)
        // Assuming the response contains a field 'startup'
        dispatch(setStartup(data.startup.text))
        console.log("Data: ", data);
        router.push('/idea')
    }
    
    
    return (
        <div className="card w-[28rem] md:w-[32rem] bg-primary text-primary-content text-center">
            <div className="card-body">
                <h2 className="card-title text-bold justify-center mb-3">Confirm Generation?</h2>
                <div className="flex flex-col gap-2">
                    <span className="text-lg">Industry(s)</span>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {industry.map((industryName, index) => (
                            <button 
                                key={industryName}
                                className={`btn text-white`}>
                                {industries.names.map((name, index) => {
                                    if(name === industryName) {
                                        return industries.titles[index]
                                        }
                                    }
                                )}
                            </button>
                            ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-lg">Customer</span>
                    <div className="flex gap-2 justify-center text-gray-200">
                        <Link href='/customer/gender'>
                            <button 
                                className={`p-3 h-full rounded-lg w-[6rem] flex flex-col items-center active:scale-95 transition-all bg-gray-400 gap-2 group hover:text-white`}>
                                <Genderless size='3rem'/>
                                <span className="font-bold text-sm">{gender}</span>
                            </button>
                        </Link>
                        <Link href='/customer/income'>
                            <button 
                                className={`p-3 h-full rounded-lg w-[6rem] flex flex-col items-center active:scale-95 transition-all bg-green-600 gap-2 group hover:text-white`} >
                                <MoneyBill1 size='3rem'/>
                                <span className="font-bold text-sm">{income}</span>
                            </button>
                        </Link>
                        <Link href='/customer/occupation'>
                            <button 
                                className={`p-3 h-full rounded-lg w-[6rem] flex flex-col items-center active:scale-95 transition-all bg-slate-500 gap-2 group hover:text-white`} >
                                <WorkOutline size='3rem'/>      
                                <span className="font-bold text-sm">{occupation}</span>
                            </button>
                        </Link>
                        <Link href='/customer/country'>
                            <button 
                                className={`p-3 h-full rounded-lg w-[6rem] flex flex-col items-center active:scale-95 transition-all bg-yellow-500 gap-2 group hover:text-white`} >
                                <World size='3rem'/>    
                                <span className="font-bold text-sm">{country}</span>
                            </button>
                        </Link>
                    </div>  
                </div>    
                <div className="card-actions justify-end mt-2">
                    <Link href='/customer/country'>
                        <button className="btn bg-pink-500 text-white hover:bg-pink-700">Previous</button>
                    </Link>
                    <button className="btn" onClick={generateIdea}>
                        {loading ? 
                            (<span className="loading loading-spinner"></span>) 
                        : ''}
                        Generate
                    </button>
                </div>
            </div>
        </div>
    )
}