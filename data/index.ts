
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];



  export const iconItems = new Map([
    ["React", "/re.svg"],
    ["TailwindCSS", "/tail.svg"],
    ["Java", "/java.svg"],
    ["Springboot", "/springboot.svg"],
    ["MongoDB", "/mongoDB.svg"],
    ["AWS", "/aws.svg"],
    ["Flutter", "/flutter.svg"],
    ["Android Studio", "/androidstudio.svg"],
    ["Restful API", "/rest-api.svg"],
    ["GitHub", "/github.svg"],
    ["Next.js", "/next.svg"],
    ["Stripe", "/stripe.svg"],
    ["TypeScript", "/ts.svg"],
    ["PrismaDB", "/prisma.svg"],
    ["PostgreSQL", "/postgresql.svg"],
    ["Figma", "/figma.svg"],
    ["Git", "/Git.svg"],
    ["Python", "/Python.svg"],
    ["JavaScript", "/JavaScript.svg"],
    ["MySQL", "/MySQL.svg"],
    ["HTML5", "/HTML5.svg"]
  ]);
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "About Me",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "Avaliable for work",
      description: "Remote and On-site",
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
      title: "Download My Resume",
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
      id: 1,
      title: "AstroTwin",
      des: "AstroTwin is a web application that matches users with their celebrity \"twins\" by analyzing and comparing astrological birth charts. Leveraging a sophisticated astrology engine, the app calculates and ranks the top three celebrity matches based on customizable planetary influences. Users can also explore a dynamic database of celebrity charts and insert celebrities into the database.<br><br> Developed using a combination of web scraping, API integration, and AWS deployment, AstroTwin showcases my skills in backend development, data processing, and full-stack implementation.",
      img: "/AstrotwinPoster.png",
      imgclassName: "top-0",
      iconLists: ["/re.svg", "/tail.svg", "/java.svg", "/springboot.svg", "/mongoDB.svg", "/aws.svg"],
      link: "https://astrotwin.live/createChart",
      githubLink: "https://github.com/laurenc206/astrotwin_client",
      techStack: ["React", "TailwindCSS", "Java", "Springboot", "MongoDB", "AWS"]
   
    },
    {
      id: 2,
      title: "HapMap",
      des: "HapMap is a sensory navigation app designed to assist low-vision users through haptic, vibrational, and auditory signals. Developed during a capstone project at the University of Washington, the course focused on complex software engineering tasks, including architectural design, requirements specification, CI/CD and rigorous testing. <br><br> As the backend lead, I designed and implemented the API pathways and navigation data models. I created a precise navigation iterator that integrates with the device's internal location API and Google Maps API, ensuring accurate and timely routing. My role also involved implementing precise logic and error handling while routing to enhance reliability and user experience.",
      img: "/HapMapPoster.png",
      iconLists: ["/flutter.svg", "/androidstudio.svg", "/rest-api.svg", "/github.svg"],
      githubLink: "https://github.com/Hap-Map/HapMap",
      techStack: ["Flutter", "Android Studio", "Restful API", "GitHub"]
    },
    {
      id: 3,
      title: "E-Commerce Storefront",
      des: "This project showcases a robust e-commerce solution composed of two distinct yet interconnected components: a storefront and a management dashboard, developed using modern full-stack technologies. <br><br>The storefront is an intuitive and responsive web application designed for a seamless shopping experience. Built with Tailwind CSS, Next.js, and React, it leverages API calls to fetch and display real-time product information, categories, and promotional content. This component focuses on delivering a smooth user experience for browsing and purchasing products, ensuring that customers have access to the latest inventory and offers.",
      img: "/StorePoster.png",
      imgclassName: "top-0",
      iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/stripe.svg"],
      link: "https://ecommerce-storefront-snowy.vercel.app",
      githubLink: "https://github.com/laurenc206/ecommerce_storefront",
      des2: "*All data in the Storefront Live Demo can be modified using the Dashboard Live Demo",
      techStack: ["React", "Next.js", "TailwindCSS", "TypeScript", "Stripe"]
    },
    {
      id: 4,
      title: "E-Commerce Dashboard",
      des: "The dashboard functions as a comprehensive administrative interface, enabling users to create and manage multiple e-commerce stores.<br><br> Developed with Next.js, Prisma, and Clerk, it provides advanced features such as authentication, CRUD database operations, and API routing. Users can configure store settings, manage inventory, and monitor key metrics like revenue and sales. The dashboard ensures that data for each store remains separate and organized, offering a detailed view of store performance and allowing for extensive customization of store elements.",
      img: "/DashboardPoster.png",
      imgclassName: "top-0",
      iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg", "/postgresql.svg"],
      link: "https://ecommerce-dashboard-one-alpha.vercel.app/",
      githubLink: "https://github.com/laurenc206/ecommerce_dashboard",
      des2: "To modify the content in the Live Demo Storefront, log in with the following credentials:",
      username: "test-admin",
      password: "admin_pw!12",
      techStack: ["React", "Next.js", "TailwindCSS", "TypeScript", "PrismaDB", "PostgreSQL"]
    },
  ];
  
  
  export const experiences = [
    {
      title: "AI Consultant, Advanced Coder",
      company_name: "Scale AI",
      icon: "/scale.svg",
      iconBg: "#383E56",

      points: [
        "Evaluated and tested AI-generated code, achieving a 90\%+ accuracy rate in audits through rigorous technical analysis and effective collaboration with team leads to ensure clear understanding of project specifications.",
        "Selected as a top contributor for a task force representing the top 2\% of performers, consistently delivering high-quality code across diverse projects.",
        "Promoted to project reviewer for 4 major initiatives, ensuring adherence to client specifications and providing actionable feedback that enhanced team output.",
      ],
    },
   
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/cavanaugh-lc/"
    },
    {
      id: 2,
      img: "/github2.svg",
      link: "https://github.com/laurenc206/"
    },

  ];