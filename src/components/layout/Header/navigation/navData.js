import {
  Castle,
  Compass,
  Mountain,
  Mouse,
  Palmtree,
  Plane,
  Shield,
  Tent,
  MoreHorizontal,
} from 'lucide-react';

export const navData = [
  {
    title: 'تورهای داخلی',
    icon: <Mountain className="w-5 h-5" />,
    places: [
      {
        title: 'تورهای جنگلی',
        icon: <Palmtree className="w-5 h-5" />,
        link: '/',
      },
      { title: 'جنوب گردی', icon: <Compass className="w-5 h-5" />, link: '/' },
      { title: 'ساحلی', icon: <Palmtree className="w-5 h-5" />, link: '/' },
      {
        title: 'کوهنوردی',
        icon: <Mountain className="w-5 h-5" />,
        link: '/',
      },
      { title: 'شمال', icon: <Compass className="w-5 h-5" />, link: '/' },
      { title: 'کمپینگ', icon: <Tent className="w-5 h-5" />, link: '/' },
    ],
  },
  {
    title: 'تورهای خارجی',
    icon: <Plane className="w-5 h-5" />,
    places: [
      {
        title: 'آسیا',
        icon: <Compass className="w-5 h-5" />,
        places: [
          { title: 'ترکیه', link: '/' },
          { title: 'امارات', link: '/' },
          { title: 'وان', link: '/' },
          { title: 'روسیه', link: '/' },
          { title: 'هند', link: '/' },
          { title: 'مالزی', link: '/' },
          { title: 'گرانادا', link: '/' },
        ],
      },
      {
        title: 'اروپا',
        icon: <Castle className="w-5 h-5" />,
        places: [
          { title: 'فرانسه', link: '/' },
          { title: 'آلمان', link: '/' },
          { title: 'ایتالیا', link: '/' },
          { title: 'اسپانیا', link: '/' },
        ],
      },
      {
        title: 'آفریقا',
        icon: <Mouse className="w-5 h-5" />,
        places: [
          { title: 'مصر', link: '/' },
          { title: 'مراکش', link: '/' },
        ],
      },
    ],
  },
  {
    title: 'بیمه مسافری',
    icon: <Shield className="w-5 h-5" />,
    link: '/',
  },
  {
    title: 'بیشتر',
    icon: <MoreHorizontal className="w-5 h-5" />,
    link: '/',
  },
];
