import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";

import tleLogo from "@/assets/dark-logo.svg";
import { EN_LOCALE, HEADER_LINKS, SOCIAL_LINKS, AR_LOCALE } from "@/config";

export default function Footer() {
  const t = useTranslations("footer");
  const activeLocale = useLocale();

  return (
    <footer className="px-4 sm:px-10 md:px-20 lg:px-52 py-20 font-poppins min-h-[30vh] relative bg-purple bg-wave-img bg-cover bg-center">
      <div className="grid gird-cols-1 md:grid-cols-2 mb-5 gap-12 md:gap-20 z-50 md:mb-20 lg:mb-44">
        <div
          className={`flex flex-col items-center md:items-start text-center md:text-left gap-3 ${
            activeLocale === AR_LOCALE ? "items-end" : "items-start"
          }`}
        >
          <div className="flex items-center justify-center md:justify-start">
            {activeLocale === EN_LOCALE && (
              <IoLocationSharp size="25px" color="white" className="mr-1" />
            )}
            <span className="text-[#d9d9d9] text-[16px] max-w-[50%] md:max-w-[80%]">
              {t("address")}
            </span>
            {activeLocale === AR_LOCALE && (
              <IoLocationSharp size="25px" color="white" className="ml-1" />
            )}
          </div>
          <div className="flex items-center justify-center md:justify-start">
            {activeLocale === EN_LOCALE && (
              <MdEmail size="25px" color="white" className="mr-1" />
            )}

            <span className="text-[#d9d9d9] text-[16px]">
              info@KizwaTech.com
            </span>
            {activeLocale === AR_LOCALE && (
              <MdEmail size="25px" color="white" className="ml-1" />
            )}
          </div>
          <div className="flex items-center justify-center md:justify-start">
            {activeLocale === EN_LOCALE && (
              <MdPhone size="25px" color="white" className="mr-1" />
            )}

            <span className="text-[#d9d9d9] text-[16px]">+971-58-628-4432</span>
            {activeLocale === AR_LOCALE && (
              <MdPhone size="25px" color="white" className="ml-1" />
            )}
          </div>
        </div>

        {/* Links */}
        <ul className="flex flex-col text-white gap-4 items-center md:items-start justify-between">
          {HEADER_LINKS.map((link) => (
            <Link key={link.id} href={link.href}>
              {t(link.label)}
            </Link>
          ))}
          <Link href="/">{t("consult")}</Link>
        </ul>

        <div className="flex flex-col gap-5">
          <h6 className="text-white font-bold text-lg md:text-[20px]">
            {t("subscribeNewsLetter")}
          </h6>

          <div className="flex gap-3">
            <input
              type="text"
              className="border-none outline-none rounded-md placeholder-gray-500 dark:placeholder-white px-5 py-3"
              dir={activeLocale === AR_LOCALE ? "rtl" : "ltr"}
              placeholder={t("enterEmail")}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-5">
        <p className="text-white font-medium text-center text-[14px]">
          {t("copyright")}
        </p>
        <div className="flex gap-2">
          {SOCIAL_LINKS.map((link, ind) => (
            <Link
              key={ind}
              className="border-2 border-[#D4D4D430] rounded p-1 h-9 w-9 flex items-center justify-center"
              href={link.link}
              target="_blank"
            >
              <link.icon color="white" className="w-3 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
