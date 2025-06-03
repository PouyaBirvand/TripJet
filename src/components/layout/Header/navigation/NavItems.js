import { navData } from './navData';
import NavItem from './NavItem';

const NavItems = ({ mobileMode = false }) => {
  return (
    <ul className={mobileMode ? 'space-y-1' : 'flex items-center'}>
      {navData.map(item => (
        <NavItem key={item.title} item={item} mobileMode={mobileMode} />
      ))}
    </ul>
  );
};

export default NavItems;
