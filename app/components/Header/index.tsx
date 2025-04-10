import NavbarClient from "@/components/Header/NavbarClient";
import NavbarServer from "@/components/Header/NavbarServer";

export default function Header() {
  return (
    <nav className="w-full  sm:px-10 md:px-20 lg:px-42 xl:px-52 sticky top-0 z-50 backdrop-blur-sm flex items-center gap-3">
      <NavbarServer />
      <NavbarClient />
    </nav>
  );
}
