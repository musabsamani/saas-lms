import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import LanguageButton from '../navbar/languageButton'
import Logo from '../../components/common/Logo'
import Button from '../../components/common/buttons/Button'

const navigation = [
  { name: 'home', to: '/', current: true },
  { name: 'about', to: '/', current: false },
  { name: 'courses', to: '/', current: false },
  { name: 'careers', to: '/', current: false },
  { name: 'blog', to: '/', current: false },
  { name: 'login', to: '/', current: false },
  { name: 'signup', to: '/', current: false },
]

const Navbar = () => {
  const { t } = useTranslation();
  const navRef = useRef<HTMLElement>(null)
  const [prevScroll, setPrevScroll] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const nav = navRef.current;

    if (nav) {
      if (currentScroll > 1200) {
        nav.classList.add('stickyNav');

        if (currentScroll > prevScroll) {
          nav.classList.remove('top-0');
          nav.classList.add('top-[-100px]');
        } else {
          nav.classList.remove('top-[-100px]');
          nav.classList.add('top-0');
        }
      } else {
        nav.classList.remove('stickyNav');
        nav.classList.add('top-0');
        nav.classList.remove('top-[-100px]');
      }
    }

    setPrevScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScroll]);

  return (
    <Disclosure ref={navRef} as="nav" className="h-[100px] text-white capitalize font-medium relative z-[5] duration-300 transition-all">
      <div className="container h-full mx-auto overflow-visible py-0">
        <div className="relative h-full flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center 2xl:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="text-4xl group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} aria-hidden="true" className="block group-data-[open]:hidden" />
              <FontAwesomeIcon icon={faTimes} aria-hidden="true" className="hidden group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 py-2 h-full items-center justify-center 2xl:items-stretch 2xl:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 2xl:static 2xl:inset-auto 2xl:ml-6 2xl:pr-0">
            <div className="hidden 2xl:ml-6 2xl:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={
                      `rounded-md px-3 py-2 flex justify-center items-center hover:bg-[#5B5B5B] ${item.current ?
                        'font-bold' : ''}`
                    }
                  >
                    {t(`navbar.${item.name}`)}
                  </Link>
                ))}
                <Button type="primary1">{t("navbar.login")}</Button>
                <Button type="primary2">{t("navbar.signup")}</Button>

                <div className="px-3 py-2 flex justify-center items-center rounded-md hover:bg-[#5B5B5B]">
                  <LanguageButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="2xl:hidden min-h-[600px] overflow-y-auto">
        <div className="container overflow-visible mx-auto py-0 space-y-1 px-2 pb-5 pt-2 bg-gray-700">
          {navigation.map((item) => (
            <DisclosureButton
              key={t(`navbar.${item.name}`)}
              as={Link}
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={`block rounded-md px-3 py-2 font-medium hover:bg-gray-800 ${item.current ? 'bg-gray-900 text-white' : ""}`}>
              {t(`navbar.${item.name}`)}
            </DisclosureButton>
          ))}
          <div className="block  rounded-md text-white hover:bg-gray-800 ml-3 ">
            <LanguageButton />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
export default Navbar