import Link from "next/link";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

function Content() {
  return (
    <div className="absolute top-[20%] md:top-[50%] left-0 md:-translate-y-1/2 w-full px-[5%]">
      <div className="relative flex flex-col gap-4 mx-auto  max-w-7xl w-full h-full text-base md:text-lg">
        <div className="flex items-center gap-0.5 text-xl lg:text-2xl text-orange-400 font-semibold after:contents-[''] after:absolute after:left-8 after:top-8 after:w-px after:h-[60vh] after:mt-2 after:bg-gradient-to-b after:from-slate-600 after:to-slate-600/5">
          <span className="text-3xl lg:text-4xl text-slate-600 font-extralight">
            &lt;
          </span>
          Hi There!
          <span className="text-3xl lg:text-4xl text-slate-600 font-extralight">
            &gt;
          </span>
        </div>
        <div className="flex flex-col space-y-2 ml-12 mt-2 lg:mt-4 mb-20 gap-6">
          <h1 className="text-4xl lg:text-6xl font-bold lg:leading-10">
            I&apos;m Igor Lima Garcia
          </h1>
          <p className="max-w-2xl text-slate-200">
            I&apos;am a dedicated software engineer specializing in crafting
            outstanding and practical digital experiences. With a lot of
            confidence, natural curiosity, and a continuous commitment to
            refining my skills, I thrive on tackling design challenges one
            project at a time.
          </p>
          <Link
            href={"/#about"}
            className="group absolute -bottom-4 left-[20px] flex flex-col items-center gap-2 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className=" dark:fill-gray-400 group-hover:fill-accentColor dark:group-hover:fill-accentColor scale-125"
            >
              <path d="M13.298 2.115a.473.473 0 0 0-.548.477v2.86c0 .199.12.374.286.484.503.336.834.91.834 1.563v2c0 1.03-.84 1.88-1.87 1.88-1.04 0-1.88-.85-1.88-1.88v-2c0-.653.338-1.227.844-1.563.165-.11.286-.285.286-.483v-2.86a.473.473 0 0 0-.548-.478A7.498 7.498 0 0 0 6.7 4.2a7.484 7.484 0 0 0-2.2 5.3v5c0 4.13 3.37 7.5 7.5 7.5s7.5-3.37 7.5-7.5v-5c0-3.69-2.687-6.766-6.202-7.384Z"></path>
            </svg>
            <DoubleArrowDownIcon className=" dark:fill-gray-400 group-hover:text-accentColor dark:group-hover:text-accentColor scale-125" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
