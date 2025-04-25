import NavItems from './navigation/NavItems';
import SearchBtn from './buttons/SearchButton';
import MyTravelsButton from './buttons/MyTravelsButton';
import TelBtn from './buttons/TelButton';
import ProfileButton from './AuthButtons/ProfileButton';
import LoginButton from './AuthButtons/LoginButton';
import Logo from './Logo';
import { useRouter } from 'next/navigation';

const DesktopNav = ({ isLoggedIn }) => {
  const router = useRouter()
  return (
    <div className="hidden lg:flex items-center justify-between h-20">
      <div className="flex items-center gap-8">
        <Logo />
        <nav className="hidden lg:block">
          <NavItems />
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <SearchBtn />
        {isLoggedIn ? (
          <>
            <MyTravelsButton className="hidden lg:flex" />
            <ProfileButton className="hidden lg:flex" />
          </>
        ) : (
          <>
            <TelBtn className="hidden lg:flex" />
            <LoginButton className="hidden lg:flex" onClick={() => router.push("/phone")} />
          </>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
