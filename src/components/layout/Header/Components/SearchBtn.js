"use client"

import { CircleX, Search } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const SearchBtn = ({ className }) => {
    const [display, setDisplay] = useState("hidden");
    const [isMobile, setIsMobile] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                const newIsMobile = window.innerWidth <= 1024;
                setIsMobile(newIsMobile);
                
                if (newIsMobile && !isMobile) {
                    setDisplay("visible");
                }
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile])

    const openInput = () => {
        if (!isMobile) {
            if (display === "visible") {
                if (inputValue.trim()) {
                    search();
                } else {
                    closeInput();
                }
            } else {
                setDisplay("visible");
                setTimeout(() => {
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }, 10);
            }
        } else {
            if (inputValue.trim()) {
                search();
            }
        }
    };

    const closeInput = () => {
        setDisplay("hidden");
        cleanInput();
    };

    const search = () => {
        ////////////////////// Search Things //////////////////////////// 
        console.log("Searching for:", inputValue);
        
        if (!isMobile) {
            closeInput();
        } else {
            cleanInput();
        }
    };

    const cleanInput = () => {
        setInputValue("");
    };

    return (
        <div className={`gap-2 p-2 rounded shadow-2xs text-neutral lg:flex ${className} ${display === "visible" ? "bg-primary-content" : ""}`}>
            <Search onClick={openInput} className="cursor-pointer text-primary" />
            <input
                ref={inputRef}
                onKeyDown={e => e.key === "Enter" && inputValue.trim() ? search() : null}
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
                type="text"
                placeholder="جستجو..."
                className={`outline-0 active text-neutral lg:w-14 xl:w-auto ${display === "visible" || isMobile ? "" : "hidden"}`}
                aria-label="Search input"
            />
            {!isMobile && display === "visible" && (
                <CircleX className="cursor-pointer text-primary" onClick={closeInput} />
            )}
        </div>
    );
};

export default SearchBtn;