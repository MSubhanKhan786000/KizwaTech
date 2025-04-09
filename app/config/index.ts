import {
  FaWifi,
  FaUserGroup,
  FaStaylinked,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

import {
  BusinessSolution,
  Database,
  Design,
  DesktopAppDevelopment,
  InfraSecurity,
  MobileAppDevelopment,
  ResourceConjuring,
  Software,
  Technology,
  WebAppDevelopment,
} from "@/assets/icons/service-icons";

import WhyUs1 from "@/assets/why-us/1.svg";
import WhyUs2 from "@/assets/why-us/2.svg";
import WhyUs3 from "@/assets/why-us/3.svg";

export const theme = {
  LIGHT: {
    background: "#fff",
    brand: "#ed7130",
    main: "#0C1338",
    gray: "#737373",
  },
  DARK: {
    background: "#0C0800",
    brand: "#ed7130",
    main: "#fff",
    gray: "#fff",
  },
};

export const LIGHT_MODE_FILL = "#c67e0c";
export const BLUE = "#c67e0c";
export const WHITE = "#fff";

export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";
export const EN_LOCALE = "en";
export const AR_LOCALE = "ar";
export const LOCALES = [EN_LOCALE, AR_LOCALE];

export const LOCALES_FOR_DROPDOWN = [
  {
    label: "English",
    value: EN_LOCALE,
  },
  {
    label: "ARABIC",
    value: AR_LOCALE,
  },
];

export const HEADER_LINKS = [
  {
    id: "home",
    label: "home",
    href: "",
  },
  {
    id: "about-us",
    label: "aboutUs",
    href: "#about-us",
  },
  {
    id: "products-services",
    label: "productsServices",
    href: "#services",
  },
  {
    id: "testimonials",
    label: "testimonials",
    href: "#testimonials",
  },
];

export const ABOUT_US = [
  { icon: FaWifi, contentKey: "service1" },
  { icon: FaUserGroup, contentKey: "service2" },
  { icon: FaStaylinked, contentKey: "service3" },
];

export const SERVICES = [
  {
    // image: InfraSecurity,
    image: BusinessSolution,
    title: "service1",
  },
  {
    // image: Technology,
    image: ResourceConjuring,
    title: "service2",
  },
  {
    image: Database,
    title: "service3",
  },
  {
    // image: BusinessSolution,
    image: DesktopAppDevelopment,
    title: "service4",
  },
  {
    // image: WebAppDevelopment,
    image: MobileAppDevelopment,
    title: "service5",
  },
  {
    // image: MobileAppDevelopment,
    image: Technology,
    title: "service6",
  },
  // {
  //   image: ResourceConjuring,
  //   title: "service7",
  // },
  // {
  //   image: Design,
  //   title: "service8",
  // },
  // {
  //   image: Software,
  //   title: "service9",
  // },
  // {
  //   image: DesktopAppDevelopment,
  //   title: "service10",
  // },
];

export const WHY_CHOSE_US = [WhyUs1, WhyUs2, WhyUs3];

export const TESTIMONIALS = [
  {
    id: 3,
    name: "Abdullah Al Hammoodi",
    occupation: "Saudi Arabia",
    image: "https://example.com/images/testimonials/jane-smith.jpg",
    content:
      "The sales support from the KizwaTech team was remarkable. They were always ready to assist and provided detailed explanations that made the whole process seamless. Their expertise in the field is truly commendable.",
    stars: 5,
  },
  {
    id: 4,
    name: "Peter Scott",
    occupation: "USA",
    image: "https://example.com/images/testimonials/ahmed-khan.jpg",
    content:
      "The Cloud professional service offered by KizwaTech is top-notch. The team is knowledgeable and efficient, and they made sure that the transition to the cloud was smooth and hassle-free for our organization.",
    stars: 5,
  },
  {
    id: 5,
    name: "Bassam Al Turki",
    occupation: "Turkey",
    image: "https://example.com/images/testimonials/maria-garcia.jpg",
    content:
      "The technical support from KizwaTech is experienced and reliable. They are quick to respond and always find effective solutions to any issues we encounter. Their dedication to customer satisfaction is evident in their work.",
    stars: 5,
  },
  {
    id: 6,
    name: "Yousuf Al Reffai",
    occupation: "UAE",
    image: "https://example.com/images/testimonials/liu-wei.jpg",
    content:
      "We have been purchasing hardware systems from KizwaTech and their delivery is always before time. The quality of the products is excellent and their commitment to punctuality has greatly benefited our operations.",
    stars: 4,
  },
];

export const SOCIAL_LINKS = [
  {
    link: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    link: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    link: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    link: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
];
