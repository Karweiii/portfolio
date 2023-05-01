import {
    web_dev,
    seo,
    ai,
    ma_dev,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    apu,
    bb,
    sunway,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    linkedin,
    instagram,
    gith,
    clinic,
    hoobank,
    javaprg,
    calc
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
      icon: web,
      bg:web_dev,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
      bg: ma_dev
    },
    {
      title: "SEO",
      icon: backend,
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
      name:"Python",
      icon:python
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
      date: "Jan 2023 - Present",
      points: [
        "Enroll in the course of Bachelor in Software Engineering (BSE)",
        "Direct enrollment to Degree year 2 by transfering credit from the previous Diploma studies.",
        "Qualified for Jeffrey Cheah Entrance Scholarship"
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Clinic Appointment Booking system",
      description:
        "Web-based platform that allows users to search, book, and manage doctor appointment details, providing a convenient and efficient way to mange appointment made by the patient.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: clinic,
      source_code_link: "",
      webp_link:""
    },
    {
      name: "Bank Branding Website",
      description:
        "React web application for me to learn about building responsive website using Tailwind CSS.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/Karweiii/webp1",
      webp_link:"https://karweiii.github.io/webp1/"
    },
    {
      name: "Java GUI hotel booking program",
      description:
        "A simple graphical user interface (GUI) Java program using Java Swing to create a hotel booking system to allow user book their ideal type of room. This systems require users to create their own account in order to book a hotel room based on their account information",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Java Swing",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: javaprg,
      source_code_link: "",
      webp_link:""
    },
    {
      name: "Python GUI Calculator",
      description:
        "Simple graphical user interface (GUI) python program using python Tkinter. A simple calculator program just to show simple understanding of algorithms and make it happen on a gui program.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
      ],
      image: calc,
      source_code_link: "",
      webp_link:""
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

  export { services, technologies, experiences, testimonials, projects,socialMedia };