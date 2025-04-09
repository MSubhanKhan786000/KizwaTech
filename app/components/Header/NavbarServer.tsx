import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher, ThemeSwitcher } from 'app/components';

import { HEADER_LINKS } from '@/config';
import Button from '@/components/Button';
import NavLogo from './NavLogo';

export default function NavbarServer() {
  const t = useTranslations('header');

  return (
    <div className='flex justify-between w-full'>
      <Link href='/'>
        <NavLogo />
      </Link>
      <ul
        className='hidden md:flex gap-5 lg:gap-10 items-center justify-between ml-4 text-sm lg:text-[16px]'
        id='navLinks'
      >
        {HEADER_LINKS.map((link) => (
          <Link key={link.id} href={link.href}>
            {t(link.label)}
          </Link>
        ))}
      </ul>
      <div className='hidden md:flex items-center gap-2 xl:gap-5'>
        <ThemeSwitcher />
        <Button className='dark:bg-brand dark:text-black'>
          {t('consultUs')}
        </Button>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
