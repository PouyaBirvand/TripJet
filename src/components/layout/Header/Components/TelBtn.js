import { PhoneIncoming } from "lucide-react"
import Link from "next/link"

const TelBtn = ({className}) => {
    return (
        <Link className={`btn btn-outline btn-primary lg:flex ${className}`} href="tel:+02170709797">
            ۰۲۱۷۰۷۰۹۷۹۷
            <PhoneIncoming />
        </Link>
    )
}

export default TelBtn