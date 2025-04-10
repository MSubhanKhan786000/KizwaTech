"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import Logo from "@/assets/dark-logo.svg";
import useIsMounted from "app/hooks/useIsMounted";

export default function NavLogo() {
  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <div className="w-[220px] h-[61.5px]"></div>;
  }

  return (
    <Image
      alt="KTK Logo"
      src={Logo}
      width={220}
      height={61.5}
      className="w-[70px] md:w-[70px] lg:w-[80px] xl:w-[100px]"
    />
  );
}
