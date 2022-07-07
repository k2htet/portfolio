import { portfolio, starwar, counter, ecommerce } from "../assets";

export const data = [
  {
    title: "Portfolio",
    img: portfolio,
    des: "Customize material UI, clean Files Folder structure and own figma design",
    lang: ["ReactJs, ", "Material UI"],
    link: "https://github.com/k2htet/Starwar",
    live: "https://kokohtet.vercel.app/",
    responsive: "Yes",
  },
  {
    title: "Starwar API",
    img: starwar,
    des: "Server side state management with react-query and refactor source code.",
    lang: ["ReactJs and hooks, ", "React-Query"],
    link: "https://github.com/k2htet/Starwar",
    live: "https://starwar-mu.vercel.app/",
    responsive: "No",
  },
  {
    title: "Simple Ecommerce",
    img: ecommerce,
    des: "Server side state management with react-query and client for redux-toolkit",
    lang: ["ReactJs ", "React-Query ", "Redux-toolkit"],
    link: "https://github.com/k2htet/fakestore",
    live: "https://kkstore.vercel.app/",
    responsive: "Mobile-first",
  },
  {
    title: "Simple Counter",
    img: counter,
    des: "Client side state management with React useReducer hook + context Api",
    lang: ["ReactJs and hooks "],
    link: "https://github.com/k2htet/counter",
    responsive: "No",
  },
];

export const skillsData = [
  {
    title: "HTML",
    value: 80,
  },
  {
    title: "CSS",
    value: 80,
  },
  {
    title: "Javascript",
    value: 70,
  },
  {
    title: "ReactJs",
    value: 70,
  },
];

export const lib = [
  { title: "Material Ui", value: 70 },
  { title: "Redux-Toolkit ", value: 60 },
  { title: "React-Query", value: 60 },
  { title: "Git & Github", value: 60 },
];
