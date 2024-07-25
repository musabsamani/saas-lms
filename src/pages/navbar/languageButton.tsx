import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import useReact18n from '../../hooks/useReact18n';
import { lngs } from '../../constants/global';
import { supportedLanguagesTypes } from '../../types/languages';

const LanguageButton = ({ className }: { className?: string }) => {
    const { i18n } = useTranslation();
    const { changeLanguage } = useReact18n()


    return <Menu as="div" className={`relative text-white ${className}`}>
        <div>
            <MenuButton className="flex">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open language menu</span>
                <FontAwesomeIcon icon={faLanguage} className="text-3xl" />
            </MenuButton>
        </div>
        <MenuItems
            transition
            className="flex flex-col justify-center items-center divide-y-2 divide-[#5B5B5B] bg-white text-[#5B5B5B] absolute start-0 z-[3] mt-2 w-28 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
            {Object.keys(lngs).map((lng) => {
                const typedLng = lng as supportedLanguagesTypes;
                const language = lngs[typedLng];

                if (!language) return null; // Handle potential undefined value

                return (
                    <MenuItem key={typedLng}>
                        <button className={`block px-4 py-2 hover:text-[#49BBBD] ${i18n.resolvedLanguage === typedLng ? 'font-bold text-[#49BBBD]' : ''}`}
                            onClick={() => changeLanguage(typedLng)}>
                            {language.nativeName}
                        </button>
                    </MenuItem>
                );
            })}
        </MenuItems>
    </Menu >


}
export default LanguageButton;