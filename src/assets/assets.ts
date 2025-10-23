import logo from "@/assets/logo.png";
import arrow_icon from "@/assets/arrow-icon.png";
import header_bg_color from "@/assets/header-bg-color.png";
import moon_icon from "@/assets/moon_icon.png";
import menu_black from "@/assets/menu-black.png";
import close_black from "@/assets/close-black.png";
import profile_img from "@/assets/profile_img.jpg";
import hand_icon from "@/assets/hand-icon.png";
import right_arrow_white from "@/assets/right-arrow-white.png";
import download_icon from "@/assets/download-icon.png";
import user_img from "@/assets/user_img.jpg";
import code_icon from "@/assets/code-icon.png";
import code_icon_dark from "@/assets/code-icon-dark.png";
import edu_icon from "@/assets/edu-icon.png";
import edu_icon_dark from "@/assets/edu-icon-dark.png";
import project_icon from "@/assets/project-icon.png";
import project_icon_dark from "@/assets/project-icon-dark.png";
import vscode from "@/assets/vscode.png";
import firebase from "@/assets/firebase.png";
import figma from "@/assets/figma.png";
import git from "@/assets/git.png";
import mongodb from "@/assets/mongodb.png";
import web_icon from "@/assets/web-icon.png";
import ui_icon from "@/assets/ui-icon.png";
import mobile_icon from "@/assets/mobile-icon.png";
import graphics_icon from "@/assets/graphics-icon.png";
import right_arrow from "@/assets/right-arrow.png";

export const assets = {
  logo,
  arrow_icon,
  header_bg_color,
  moon_icon,
  menu_black,
  close_black,
  profile_img,
  hand_icon,
  right_arrow_white,
  download_icon,
  user_img,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  web_icon,
  ui_icon,
  mobile_icon,
  graphics_icon,
  right_arrow,
};

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, Javascript, ReactJS, NextJS, NodeJS, Express, NestJS",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Engineering Technologies",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Build more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];
