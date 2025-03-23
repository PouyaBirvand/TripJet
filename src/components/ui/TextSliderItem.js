import { ArrowLeftRight } from "lucide-react"
import Link from "next/link"

const TextSliderItem = ({origin, destination}) => {
    return (
        <Link href="/" className="flex justify-center gap-1 bg-base-100 p-2 rounded-lg">
            {origin}
            <ArrowLeftRight className="text-primary w-5" />
            {destination}
        </Link>
    )
}

export default TextSliderItem