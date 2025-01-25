import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon} from "lucide-react";

export const DATA = {
  name: "Tarun Monga",
  initials: "tm",
  url: "https://tmonga2208.vercel.app",
  location: "Ludhiana, IN",
  locationLink: "https://www.google.com/maps/place/ludhiana",
  description:
    "3rd Year Student. I love building things and helping people.",
  summary:
    "I'm a passionate web developer with a deep enthusiasm for creating dynamic and user-friendly digital experiences. With a strong foundation in programming and a keen eye for design, I specialize in crafting websites that not only look visually appealing but also function seamlessly to provide exceptional user interactions.I enjoy swimming, reading fiction, and indulging in tech reviews as hobbies. Gadgets hold a significant role in my life, and I'm passionate about them. Greece is my dream destination to explore. Traveling and tech fuel my interests, alongside the tranquility of books and the thrill of water.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Flutter",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tarunmonga2208@gmail.com",
    tel: "+91 7837080301",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/tmonga2208",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/tmonga2208-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/tmonga2208-x",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://dub.sh/tmonga2208-instagram",
        icon: Icons.Instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "The Resolute Mind",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Web Developer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
  ],
  education: [
    {
      school: "Thapar Intitute of Engineering and Technology",
      href: "https://thapar.edu",
      degree: "Electronics And Computer Engineering",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FGD2_H-AD1RqGQnIqngM6Mcv0CA4UjH1fg&s",
      start: "2022",
      end: "2026",
    },
    {
      school: "S.M.D.R.S.D Collegiate Senior Secondary School",
      href: "https://smdrsdschoolptk.com/",
      degree: "10+2",
      logoUrl: "https://smdrsdschoolptk.com/wp-content/uploads/2020/12/SCHOOL-LOGO.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "DAV Public School",
      href: "https://davbrsnagar.org/",
      degree: "10th",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/DAV_CMC_Logo.svg/1200px-DAV_CMC_Logo.svg.png",
      start: "2008",
      end: "2020",
    }
  ],
  projects: [
    {
      title: "THE RESOLUTE MIND",
      href: "https://theresolutemind.vercel.app/",
      dates: "Jun 2024 - Aug 2024",
      active: true,
      description:
       "Successfully built The Resolute Mind a comprehensive platform for psychology services. It offers facilities like video calls, secure messaging, and easy appointment booking with licensed professionals. The user-friendly site ensures seamless access to mental health support, tailored therapy options, and convenient communication tools for ongoing care.",
      technologies: [
        "React.js",
        "Javascript",
        "Firebase",
        "TailwindCSS",
        "webRTC"
      ],
      links: [
        {
          type: "Website",
          href: "https://theresolutemind.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tmonga2208/theresolutemind",
          icon: <Icons.github className="size-3" />,
        },
        
      ],
      image: "/res.png",
      video:
        "",
    },
    {
      title: "STORY TIME",
      href: "https://stm-five.vercel.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Successfully built Story Time a subscription-based website for book lovers. The platform offers an extensive library of books, allowing users to subscribe, explore, and enjoy a wide range of genres. With a user-friendly interface and personalized recommendations, Story Time provides an immersive reading experience for avid readers.",
      technologies: [
        "React.js",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://stm-five.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tmonga2208/new",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stm.png",
      video: "",
    },
    {
      title: "SubPIP (Chrome Extension)",
      href: "https://subpip.vercel.app",
      dates: "Jan 2025",
      active: true,
      description:
        "Watch videos with a floating window that stays on top of other applications, complete with playback controls and seamlessly integrated subtitles for a superior viewing experience.",
      technologies: [
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://subpip.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tmonga2208/Subpip",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Download",
          href: "https://dub.sh/subpip",
          icon: <Icons.download className="size-3" />,
        }
      ],
      image: "/subpip.png",
      video: "",
    },
  ],
  hackathons:[],
} as const;
