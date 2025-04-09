"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import { EN_LOCALE, AR_LOCALE } from "app/config";

export default function LocalSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleClick = () => {
    let nextLocale;
    if (localActive === EN_LOCALE) {
      nextLocale = AR_LOCALE;
    } else {
      nextLocale = EN_LOCALE;
    }
    router.replace(`/${nextLocale}`);
  };

  return (
    <button onClick={handleClick} className={`text-lg ${className}`}>
      {localActive === EN_LOCALE ? "AR" : "EN"}
    </button>
  );
}
