import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 20,
    title: "Ryde",
    des: "This is a ride-hailing app like Uber or Bolt. Built with React Native, google location etc",
    img: "/ryde1.jpg",
    iconLists: ["/reactnative-inner.svg"],
    link: "https://expo.dev/artifacts/eas/a6QDMomzyJvxKvR5nMY931.apk",
  },
  // {
  //   id: 18,
  //   title: "News App",
  //   des: "This is a simple World News Mobile App using Kotlin",
  //   img: "/slanted-newsapp.jpeg",
  //   iconLists: ["/kotlin.svg"],
  //   link: "#",
  // },
  {
    id: 19,
    title: "I-Lotus-Homes Mobile App",
    des: "This is Real Estate Mobile built with react native",
    img: "/slanted-ilotus.jpeg",
    iconLists: ["/reactnative-inner.svg"],
    link: "https://expo.dev/accounts/honeybadgerng/projects/ilotus-homes/builds/d51dacab-65d2-4b3a-ae54-bc9e68cc4b6a",
  },
  {
    id: 5,
    title: "Yarn Social media app",
    des: "Yarn is a unique social media application that stands out by utilizing pidgin English as its primary means of user interaction. Embrace the opportunity to join and experience this novel social media experience.",
    img: "/yarn-social-media-app.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg", "/js.svg"],
    link: "https://mern-social-media2.vercel.app/",
  },
  {
    id: 12,
    title: "Xclusive Realtors",
    des: "Uae real estate company",
    img: "/xclusive realtors.png",
    iconLists: ["/next.svg", "/re.svg", "/js.svg", "/fm.svg"],
    link: "https://uae-properties-teal.vercel.app/",
  },
  {
    id: 15,
    title: "Brainwave",
    des: "An AI app that is going to revolutionize tech industry",
    img: "/brainwave.png",
    iconLists: ["/next.svg", "vite.svg", "/tail.svg", "/ts.svg", "/re.svg"],
    link: "https://jsm-brainwave.com/",
  },
  {
    id: 16,
    title: "My Next.js Portfolio",
    des: "This is my previous portfolio",
    img: "/nextjs portfolio.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/gsap.svg"],
    link: "https://next-js-portfolio-pearl.vercel.app/",
  },
  // {
  //   id: 17,
  //   title: "Xclusive Mart",
  //   des: "An ongoing eCommerce project",
  //   img: "/xclusive mart.png",
  //   iconLists: [
  //     "/re.svg",
  //     "/tail.svg",
  //     "/ts.svg",
  //     "/strapi1.svg",
  //     "/stripe.svg",
  //   ],
  //   link: "https://ecomerce-vert-kappa.vercel.app/",
  // },
  {
    id: 7,
    title: "Mervielle Hub Official website",
    des: "Luxurious spa nestled in the heart of Lagos. Immerse yourself in a haven of serenity where you can indulge in a range of rejuvenating treatments and pampering experiences.",
    img: "/mervielle.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/three.svg", "/gsap.svg"],
    link: "https://honeybadgerng.github.io/Mervielle_hub/",
  },
  {
    id: 9,
    title: "RJB Xclusive property website",
    des: "RJB Xclusive Properties is a distinguished real estate agency specializing in providing exceptional property solutions. With our extensive knowledge and expertise in the industry, we are committed to assisting clients in finding their ideal properties in Nigeria.",
    img: "/xclusiveproperties.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/three.svg", "/gsap.svg"],
    link: "https://honeybadgerng.github.io/RJB-Properties/",
  },
  {
    id: 8,
    title: "The Resolve Interior Designs",
    des: "The Resolve Decor, a rapidly growing startup dedicated to transforming interiors across Nigeria. its not a bad 3",
    img: "/resolvedecor.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/three.svg", "/gsap.svg"],
    link: "https://honeybadgerng.github.io/interor_decor_sample_site_1/",
  },

  {
    id: 10,
    title: "Ragalia Gadget store",
    des: "Welcome to our intuitive and innovative gadget e-commerce website! We take inspiration from the latest trends and technology to bring you an exceptional online shopping experience.",
    img: "/regalia_gadget_sample.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/stripe.svg"],
    link: "https://honeybadgerng.github.io/gadgetsitesample1/",
  },
  {
    id: 11,
    title: "Secure press Security",
    des: "Welcome to Secure Press, a visionary and imaginary security company committed to providing top-notch security solutions. Our virtual security services are designed to protect individuals, businesses, and organizations from potential threats and vulnerabilities.",
    img: "/securepress.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://honeybadgerng.github.io/securepress/",
  },
  {
    id: 13,
    title: "Saz Portfolio.png",
    des: "Graphic designer",
    img: "/saz portfolio.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://honeybadgerng.github.io/saz-solutions/",
  },
  {
    id: 14,
    title: "Audipsalm",
    des: "Tech company",
    img: "/audipsalm.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://honeybadgerng.github.io/audipsalmwebapp/",
  },
  // {
  //   id: 1,
  //   title: "3D Solar System Planets to Explore",
  //   des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
  //   img: "/p1.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  //   link: "#",
  // },
  // {
  //   id: 2,
  //   title: "Yoom - Video Conferencing App",
  //   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  //   link: "#",
  // },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "#",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://iphone-doc.vercel.app/",
  // },
  // {
  //   id: 6,
  //   title: "Yarn Decentralized Social media app",
  //   des: "Yarn, an innovative social media application, has been developed using React, Chakra UI, Lens protocol, Ethers, and GraphQL.  You are welcome to explore and make use of it at your convenience.",
  //   img: "/yarn-decentralized-social-media-app.png",
  //   iconLists: ["/re.svg", "/tail.svg", "/eth.svg", "/graphql.svg", "/fm.svg"],
  //   link: "https://decentralized-social-media-app-three.vercel.app/",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Moshood was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Moshood's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Moshood is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Moshood was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Moshood's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Moshood is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Moshood was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Moshood's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Moshood is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Moshood was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Moshood's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Moshood is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Moshood was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Moshood's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Moshood is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/honeybadgerng",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.twitter.com/honeybadgerng01",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/moshoodraji/",
  },
];
