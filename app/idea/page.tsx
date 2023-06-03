'use client'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";

export default function Idea() {
    const startup = useSelector((state: RootState) => state.startup.startup)

    return (
        <div className="card w-[28rem] md:w-[32rem] bg-primary text-primary-content text-center">
            <div className="card-body">
                <h2 className="card-title text-bold justify-center mb-3">Startup</h2>
                <div className="flex flex-col gap-2">
                    {startup}
                </div>
            </div>
        </div>
    )
}
