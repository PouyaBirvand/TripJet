"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Castle, ChevronDown, Compass, MoreHorizontal, Mountain, Mouse, Palmtree, Plane, Shield, Tent } from "lucide-react";

const data = [
  {
    title: "تورهای داخلی",
    icon: <Mountain className="w-5 h-5" />,
    places: [
      { title: "تورهای جنگلی", icon: <Palmtree className="w-5 h-5" />, link: "/domestic-tours/jungle" },
      { title: "جنوب گردی", icon: <Compass className="w-5 h-5" />, link: "/domestic-tours/south" },
      { title: "ساحلی", icon: <Palmtree className="w-5 h-5" />, link: "/domestic-tours/beach" },
      { title: "کوهنوردی", icon: <Mountain className="w-5 h-5" />, link: "/domestic-tours/mountain" },
      { title: "شمال", icon: <Compass className="w-5 h-5" />, link: "/domestic-tours/north" },
      { title: "کمپینگ", icon: <Tent className="w-5 h-5" />, link: "/domestic-tours/camping" },
    ],
  },
  {
    title: "تورهای خارجی",
    icon: <Plane className="w-5 h-5" />,
    places: [
      {
        title: "آسیا",
        icon: <Compass className="w-5 h-5" />,
        places: [
          { title: "ترکیه", link: "/international-tours/asia/turkey" },
          { title: "امارات", link: "/international-tours/asia/uae" },
          { title: "وان", link: "/international-tours/asia/van" },
          { title: "روسیه", link: "/international-tours/asia/russia" },
          { title: "هند", link: "/international-tours/asia/india" },
          { title: "مالزی", link: "/international-tours/asia/malaysia" },
          { title: "گرانادا", link: "/international-tours/asia/granada" },
        ],
      },
      {
        title: "اروپا",
        icon: <Castle className="w-5 h-5" />,
        places: [
          { title: "فرانسه", link: "/international-tours/europe/france" },
          { title: "آلمان", link: "/international-tours/europe/germany" },
          { title: "ایتالیا", link: "/international-tours/europe/italy" },
          { title: "اسپانیا", link: "/international-tours/europe/spain" },
        ],
      },
      {
        title: "آفریقا",
        icon: <Mouse className="w-5 h-5" />,
        places: [
          { title: "مصر", link: "/international-tours/africa/egypt" },
          { title: "مراکش", link: "/international-tours/africa/morocco" },
        ],
      },
    ],
  },
  { title: "بیمه مسافری", icon: <Shield className="w-5 h-5" />, link: "/insurance" },
  { title: "بیشتر", icon: <MoreHorizontal className="w-5 h-5" />, link: "/more" },
];

const NavItem = ({ item, level = 0, mobileMode = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const hasChildren = item.places && item.places.length > 0;
  const isTopLevel = level === 0;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li 
      ref={ref}
      className={`relative ${isTopLevel && !mobileMode ? 'mx-1' : ''}`}
    >
      <div className="flex items-center">
        {hasChildren ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-between w-full gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${
              isTopLevel && !mobileMode
                ? 'text-gray-800 hover:text-blue-600 font-medium hover:bg-blue-50'
                : 'text-gray-700 hover:bg-gray-100'
            } ${isOpen && isTopLevel && !mobileMode ? 'bg-blue-50 text-blue-600' : ''}`}
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="whitespace-nowrap">{item.title}</span>
            </div>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        ) : (
          <Link
            href={item.link}
            className={`flex items-center gap-2 w-full px-4 py-3 rounded-lg transition-all duration-200 ${
              isTopLevel && !mobileMode
                ? 'text-gray-800 hover:text-blue-600 font-medium hover:bg-blue-50'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.icon}
            <span className="whitespace-nowrap">{item.title}</span>
          </Link>
        )}
      </div>

      {hasChildren && isOpen && (
        <ul
          className={`${
            isTopLevel && !mobileMode
              ? 'absolute left-0 -right-1 top-16 mt-0 min-w-[240px] bg-white shadow-xl rounded-b-lg py-2 z-50 border border-gray-100 border-t-0'
              : 'pl-4 mt-1'
          }`}
          style={isTopLevel && !mobileMode ? { width: 'max-content' } : {}}
        >
          {item.places.map((child) => (
            <NavItem key={child.title} item={child} level={level + 1} mobileMode={mobileMode} />
          ))}
        </ul>
      )}
    </li>
  );
};

const NavItems = ({ mobileMode = false }) => {
  return (
    <ul className={mobileMode ? "space-y-1" : "flex items-center"}>
      {data.map((item) => (
        <NavItem key={item.title} item={item} mobileMode={mobileMode} />
      ))}
    </ul>
  );
};

export default NavItems;