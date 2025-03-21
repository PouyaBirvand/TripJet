import Link from "next/link";

const NavItems = ({ data }) => {
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