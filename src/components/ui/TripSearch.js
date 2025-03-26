"use client"

import { useState } from "react"

const TripSearch = () => {

    const [tourType, setTourType] = useState("تورهای خارجی")

    return (
        <div className="bg-base-100 rounded p-4 shadow mt-52 relative z-10">
            <div className="flex gap-5 mb-8">
                {
                    ["تورهای خارجی", "تورهای داخلی"].map(tour => (
                        <button
                            key={tour}
                            className={tourType === tour ? "text-primary border-b-primary border-b-2 pb-2" : ""}
                            onClick={e => setTourType(tour)}
                        >{tour}</button>
                    ))
                }
            </div>
            
            <form action="#">

                <div className="flex gap-5 flex-wrap sm:flex-nowrap">
                    <select defaultValue="Pick a text editor" className="select select-primary w-full">
                        <option disabled={true}>Pick a text editor</option>
                        <option>VScode</option>
                        <option>VScode fork</option>
                        <option>Another VScode fork</option>
                    </select>

                    <select defaultValue="Pick a text editor" className="select select-primary w-full">
                        <option disabled={true}>Pick a text editor</option>
                        <option>VScode</option>
                        <option>VScode fork</option>
                        <option>Another VScode fork</option>
                    </select>

                    <button className="btn btn-primary px-10 w-full sm:basis-1/4">
                        جستجو
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TripSearch
