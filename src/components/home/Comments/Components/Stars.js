import { Star } from "lucide-react"

const Stars = ({ filled = 0 }) => {
    // ایجاد آرایه‌ای از ستاره‌ها
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        stars.push(
            <Star 
                key={i} 
                className={i < filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
            />
        );
    }
    
    return <div className="flex flex-row-reverse">{stars}</div>;
}

export default Stars

