
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import Logo from "@/components/ui/logo";
import NeonButton from "@/components/ui/neonButton";
import ThemeSwitch from "@/components/ui/themeSwitch";

import HeaderAnimations from "@/components/animations/layouts/HeaderAnimations";

function Header() {
  return (
    <HeaderAnimations>
      <div className="flex items-center min-h-[4.5rem] w-full h-auto px-[5%] bg-transparent backdrop-blur-[6px] shadow-sm">
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
          <Logo />
          <Navbar />
          <div className=" flex items-center justify-end gap-2 lg:gap-10">
            <NeonButton className={"hidden lg:block"} />
            <ThemeSwitch />
            <Sidebar />
          </div>
        </div>
      </div>
    </HeaderAnimations>
  );
}

export default Header;
