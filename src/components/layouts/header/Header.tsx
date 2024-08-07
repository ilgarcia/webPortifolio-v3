
import Logo from "../Logo";
import ResumeBtn from "../ResumeBtn";
import ThemeSwitch from "./ThemeSwitch";
import Sidebar from "./Sidebar";

import HeaderAnimations from "./HeaderAnimations";
import Navbar from "./Navbar";

function Header() {
  return (
    <HeaderAnimations>
      <div className="flex items-center min-h-[4.5rem] w-full h-auto px-[5%] bg-transparent backdrop-blur-[6px] shadow-sm">
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
          <Logo />
          <Navbar />
          <div className=" flex items-center justify-end gap-2 lg:gap-10">
            <ResumeBtn className={"hidden lg:block"} />
            <ThemeSwitch />
            <Sidebar />
          </div>
        </div>
      </div>
    </HeaderAnimations>
  );
}

export default Header;
