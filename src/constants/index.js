import {
    web_dev,
    seo,
    ai,
    ma_dev,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    apu,
    bb,
    sunway,
    threejs,
    python,
    linkedin,
    instagram,
    gith,
    lintramax,
    fyp,
    ruma,
    voltio,
    jiraffe,
    langchain,
    nextjs,
    shadcn,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      bg:web_dev,
    },
    {
      title: "Mobile App Developer",
      bg: ma_dev
    },
    {
      title: "SEO",
      bg: seo
    },
    {
      title:"AI enthusiastic",
      bg:ai
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Next.JS",
      icon: nextjs,
    },
    {
      name: "Shadcns/UI",
      icon: shadcn,
    },
    {
      name:"Python",
      icon:python
    },
    {
      name:"LangChain",
      icon:langchain
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Diploma Student",
      company_name: "Asia Pacific University",
      icon: apu,
      iconBg: "#FFFFFF",
      date: "June 2020 - August 2022",
      points: [
        "Enroll in the course of Diploma in Information & Communication Technology with a specialism in Software Engineering",
        "Learn a lot of different skills including basic networking, web development, database, Java & Python programming and etc",
        "Graduated with a CGPA of 3.78"
      ],
    },
    {
      title: "SEO Intern",
      company_name: "BikeBear",
      icon: bb,
      iconBg: "#fbda19",
      date: "May 2022 - August 2022",
      points: [
        "Successfully completed my Diploma internship at BikeBear Sdn Bhd as an SEO intern",
        "Learned how to help clients get their website index by Google",
        "Improve SEO rating of clients site",
        "Got the chance to learn and use a lot of SEO tools such as Google Analytics, Google Search Console, RankerX, RankMath, YoastSEO and etc",
      ],
    },
    {
      title: "Degree Student",
      company_name: "Sunway University",
      icon: sunway,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - Jan 2025",
      points: [
        "Enroll in the course of Bachelor in Software Engineering (BSE)",
        "Direct enrollment to Degree year 2 by transfering credit from the previous Diploma studies.",
        "Qualified for Jeffrey Cheah Entrance Scholarship"
        
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company_name: "Lintramax",
      icon: lintramax,
      iconBg: "#FFFFFF",
      date: "Jan 2024 - April 2024",
      points: [
        "Successfully completed my Degree internship at Lintramax Sdn Bhd as a full stack developer intern",
        "Main task is to fix bugs, add new features, upgrade features for QUARTO(cloud based web app of the company)",
        "Tech stack: HTML, CSS, Angular, JavaScript, C#, ASP.NET, Microsoft SQL",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Intelligent Course Consultation System",
      description:
        "An Intelligent Course Consultation System, a university website demo featuring an AI-powered chatbot. Using the Retrieval-Augmented Generation (RAG) technique, the system offers students up-to-date course information and personalized recommendations based on their interests and qualifications. This project simplifies course selection and enhances access to academic resources.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "LangChain",
          color: "pink-text-gradient",
        },
      ],
      image: fyp,
      source_code_link: "https://github.com/Karweiii/Jarvis",
      webp_link:""
    },
    {
      name: "Ruma",
      description:
        "Ruma is an innovative app that revolutionizes event hosting by leveraging blockchain technology. It allows users to host events directly on-chain, ensuring transparency and security. Attendees can mint unique NFTs as memorable keepsakes from the event, while NFT-based badges streamline authentication, providing a seamless and secure experience for both organizers and participants.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Shadcn/UI",
          color: "green-text-gradient",
        },
        {
          name: "Anchor",
          color: "green-text-gradient",
        },
        {
          name: "Solana",
          color: "pink-text-gradient",
        },
        {
          name: "Rust",
          color: "pink-text-gradient",
        },
      ],
      image: ruma,
      source_code_link: "https://github.com/Karweiii/ruma",
      webp_link:""
    },
    {
      name: "Voltio",
      description:
        "Voltio is a Web3 platform enabling users to invest in fractionalized solar energy projects through NFTs. By tokenizing renewable energy assets, Voltio democratizes access to sustainable investments, allowing users to own and trade shares in solar projects while promoting clean energy adoption.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
      ],
      image: voltio,
      source_code_link: "https://github.com/Karweiii/voltio",
      webp_link:"https://voltio.vercel.app/"
    },
    {
      name: "Jiraffe",
      description:
        "Jiraffe is a task management tool. It helps streamline project workflows, track tasks, and enhance collaboration among team members. By providing a centralized platform for managing software development activities, Jiraffe ensures efficient project execution and adherence to software process best practices.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
      ],
      image: jiraffe,
      source_code_link: "https://github.com/Karweiii/jiraffe",
      webp_link:"https://jiraffe.vercel.app/"
    },
    
    
  ];
  
  const socialMedia=[
    {
      id:'Instagram',
      icon:instagram,
      link:'https://www.instagram.com/kar_weiii'
    },
    {
      id:'LinkedIn',
      icon:linkedin,
      link:'https://www.linkedin.com/in/tkarwei'
    },{
      id:'Github',
      icon:gith,
      link:'https://github.com/Karweiii'
    },
  ]

  export { services, technologies, experiences, projects,socialMedia };