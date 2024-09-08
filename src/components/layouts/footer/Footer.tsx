import { CopyrightIcon } from "@/components/ui/svgIcons";

function Footer() {
  return (
    <footer className="absolute bottom-0 bg-background-secondary text-secondary w-full border-t-2 border-indigo-500/30 px-4 z-50">
      <div className="flex items-center max-w-7xl mx-auto py-4 text-base font-medium">
        <CopyrightIcon className="mr-1 fill-secondary scale-75" /> 
        2023 Igor Lima Garcia
      </div>
    </footer>
  );
}

export default Footer;