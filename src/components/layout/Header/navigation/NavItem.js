import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

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

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
            className={`flex items-center cursor-pointer justify-between w-full gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${
              isTopLevel && !mobileMode
                ? 'text-gray-800 hover:text-blue-600 font-medium hover:bg-blue-50'
                : 'text-gray-700 hover:bg-gray-100'
            } ${isOpen && isTopLevel && !mobileMode ? 'bg-blue-50 text-blue-600' : ''}`}
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="whitespace-nowrap font-normal">{item.title}</span>
            </div>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        ) : (
          <Link
            href={item.link || '#'}
            className={`flex items-center gap-2 w-full px-4 py-3 rounded-lg transition-all duration-200 ${
              isTopLevel && !mobileMode
                ? 'text-gray-800 hover:text-blue-600 font-medium hover:bg-blue-50'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.icon}
            <span className="whitespace-nowrap font-normal">{item.title}</span>
          </Link>
        )}
      </div>

      {hasChildren && isOpen && (
        <ul
          className={`${
            isTopLevel && !mobileMode
              ? 'absolute left-0 -right-1 top-16 mt-0 cursor-pointer min-w-[240px] bg-white shadow-xl rounded-b-lg py-2 z-50 border border-gray-100 border-t-0'
              : 'pl-4 mt-1'
          }`}
          style={isTopLevel && !mobileMode ? { width: 'max-content' } : {}}
        >
          {item.places.map((child) => (
            <NavItem 
              key={child.title} 
              item={child} 
              level={level + 1} 
              mobileMode={mobileMode} 
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;