import NavItems from './navigation/NavItems';
import MyTravelsButton from './buttons/MyTravelsButton';
import TelBtn from './buttons/TelButton';
import ProfileButton from './AuthButtons/ProfileButton';
import LoginButton from './AuthButtons/LoginButton';
import Logo from './Logo';
import { useRouter } from 'next/navigation';
import SearchButton from './buttons/SearchButton';

const DesktopNav = ({ isLoggedIn, user }) => {
  const router = useRouter();

  return (
    <div className="hidden lg:flex items-center justify-between h-20">
      <div className="flex items-center gap-8">
        <Logo />
        <nav className="hidden lg:block">
          <NavItems />
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <SearchButton />
        {isLoggedIn ? (
          <>
            <MyTravelsButton className="hidden lg:flex" />
            <ProfileButton className="hidden lg:flex" user={user} isGuest={user?.isGuest} />
          </>
        ) : (
          <>
            <TelBtn className="hidden lg:flex" />
            <LoginButton className="hidden lg:flex" onClick={() => router.push('/phone')} />
          </>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
