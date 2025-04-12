import { ArrowLeftRight } from 'lucide-react'
import Link from 'next/link'

const TextSliderItem = ({ origin, destination }) => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-2 bg-white py-2 px-4 rounded-lg border border-gray-200 
      hover:bg-gray-50 transition-colors whitespace-nowrap overflow-hidden relative top-3"
    >
      <span className="overflow-hidden text-ellipsis">{origin}</span>
      <ArrowLeftRight className="flex-shrink-0 text-blue-600" size={16} />
      <span className="overflow-hidden text-ellipsis">{destination}</span>
    </Link>
  )
}

export default TextSliderItem