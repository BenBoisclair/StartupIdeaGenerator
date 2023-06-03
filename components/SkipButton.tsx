import Link from "next/link";

type props = {
    nextPage : string,
}

export default function SkipButton ({ nextPage } : props) {
    return (
        <div>
            <Link href={`/${nextPage}`}>
                <button className="btn btn-link">Skip</button>
            </Link>
        </div>
    )
}