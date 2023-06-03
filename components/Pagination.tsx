import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type props = {
    left? : string
    right? : string
    hidden? : boolean
}

export default function Pagination ({left, right, hidden} : props) {
    return (
        <div className={`${hidden ? 'hidden' : 'flex'} gap-2 justify-center absolute bottom-40`}>
            {left ? (
            <Link href={`/${left}`}>
                <button className="p-2 hover:border-2 rounded-full bg-[#de4fa7] box-border">
                    <ChevronLeftIcon className="w-7 h-7 text-white"/>
                </button>
            </Link>
            ) : ''}
            {right ? (
            <Link href={`/${right}`}>
                <button className="p-2 hover:border-2 rounded-full bg-[#de4fa7] box-border">
                    <ChevronRightIcon className="w-7 h-7 text-white"/>
                </button>
            </Link>
            ) : ''}
        </div>
    )
}

{/* <div class="btn-group">
  <button class="btn btn-lg">1</button>
  <button class="btn btn-lg btn-active">2</button>
  <button class="btn btn-lg">3</button>
  <button class="btn btn-lg">4</button>
</div> */}