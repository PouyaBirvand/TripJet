import { 
    Castle, 
    Compass, 
    Mountain, 
    Mouse, 
    Palmtree, 
    Plane, 
    Shield, 
    Tent,
    MoreHorizontal
  } from "lucide-react";
  
  export const navData = [
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
    { 
      title: "بیمه مسافری", 
      icon: <Shield className="w-5 h-5" />, 
      link: "/insurance" 
    },
    { 
      title: "بیشتر", 
      icon: <MoreHorizontal className="w-5 h-5" />, 
      link: "/more" 
    },
  ];