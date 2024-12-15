import HeaderDesktop from './MainHeader';
import { useMemo, useState } from 'react';
import { useCustomization } from '@digify/theme-kit';
import { useRouter } from 'next/router';
import BurgerMenu from './Components/BergurMenu';

function Header() {
  const {
    data: { layout }
  } = useCustomization('layout');

  const router = useRouter();

  const isHome = router.pathname === `/`;

  const titles = useMemo(() => {
    return layout?.navigation?.options.filter(option =>
      layout?.navigation?.value.some(item => item === option.value)
    );
  }, [layout]);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <BurgerMenu
        {...{
          openMenu,
          setOpenMenu
        }}
      />
      <HeaderDesktop {...{ isHome, titles, setOpenMenu }} />
    </>
  );
}

export default Header;
