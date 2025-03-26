import Link from "next/link";

const data = [
  {
      title: "تورهای داخلی",
      places: [
          { title: "تورهای جنگلی", link: "/domestic-tours/jungle" },
          { title: "جنوب گردی", link: "/domestic-tours/south" },
          { title: "ساحلی", link: "/domestic-tours/beach" },
          { title: "کوهنوردی", link: "/domestic-tours/mountain" },
          { title: "شمال", link: "/domestic-tours/north" },
          { title: "کمپینگ", link: "/domestic-tours/camping" },
      ],
  },
  {
      title: "تورهای خارجی",
      places: [
          {
              title: "آسیا",
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
              places: [
                  { title: "فرانسه", link: "/international-tours/europe/france" },
                  { title: "آلمان", link: "/international-tours/europe/germany" },
                  { title: "ایتالیا", link: "/international-tours/europe/italy" },
                  { title: "اسپانیا", link: "/international-tours/europe/spain" },
              ],
          },
          {
              title: "آفریقا",
              places: [
                  { title: "مصر", link: "/international-tours/africa/egypt" },
                  { title: "مراکش", link: "/international-tours/africa/morocco" },
              ],
          },
      ],
  },
  { title: "بیمه مسافری", link: "/insurance" },
  { title: "بیشتر", link: "/more" },
];

const NavItems = () => {
  return (
    <>
      {data.map((item) => {
        if (item.places && Array.isArray(item.places)) {
          return (
            <li key={item.title}>
              <details>
                <summary>{item.title}</summary>
                <ul className="max-h-80 overflow-y-auto z-10">
                  {item.places.map((place) => {
                    if (place.places) {
                      // Handle nested places (like Asia, Europe, Africa)
                      return (
                        <li key={place.title}>
                          <details>
                            <summary>{place.title}</summary>
                            <ul>
                              {place.places.map((subPlace) => (
                                <li key={subPlace.title}>
                                  <Link href={subPlace.link}>{subPlace.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </li>
                      );
                    } else {
                      // Handle direct places
                      return (
                        <li key={place.title}>
                          <Link href={place.link}>{place.title}</Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </details>
            </li>
          );
        } else if (item.link) {
          return (
            <li key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        }
        return null;
      })}
    </>
  );
};

export default NavItems;