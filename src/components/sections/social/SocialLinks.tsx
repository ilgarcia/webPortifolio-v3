import { GitHubIcon, LinkedinIcon } from "@/components/layouts/SvgIcons";

const socialLinks = [
  {
    id: 1,
    title: "Ilgarcia Github Profile",
    link: "https://github.com/ilgarcia",
    svg: <GitHubIcon className="fill-foreground hover:fill-primary brightness-75 hover:brightness-100" />,
  },
  {
    id: 2,
    title: "Ilgarcia LinkedIn Profile",
    link: "https://www.linkedin.com/in/ilgarcia/",
    svg: <LinkedinIcon className="fill-foreground hover:fill-primary brightness-75 hover:brightness-100" />,
  },
];

export default socialLinks;
