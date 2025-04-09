"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import { EN_LOCALE, DE_LOCALE } from "app/config";

export default function LocalSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleClick = () => {
    const nextLocale = localActive === DE_LOCALE ? EN_LOCALE : DE_LOCALE;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <button onClick={handleClick} className={`text-lg ${className}`}>
      {localActive === DE_LOCALE ? "EN" : "DE"}
    </button>
  );
}
