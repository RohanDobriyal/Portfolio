
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Backend Developer Intern",
        company_name: "Kmicro Tech",
        icon: "image.png", 
        iconBg: "#f9c2ff",
        date: "May 2024 - July 2024",
        points: [
            "Designed and optimized backend APIs for secure and scalable web applications, reducing response times by 15%.",
            "Built and automated data pipelines for integrating machine learning models into backend systems, enhancing decision-making by 10%.",
            "Collaborated with cross-functional teams to ensure seamless deployment of AI-driven features, reducing operational downtime by 5%.",
            "Conducted extensive performance testing to enhance reliability, ensuring 99.9% system uptime.",
        ],
    },
    {
        title: "Web Developer intern",
        company_name: "Amity Incubation",
        icon: "amity_icon", 
        iconBg: "#b7e4c7",
        date: "Feb 2022 - Mar 2023",
        points: [
            "Created and managed 5+ web applications using up-to-date frameworks like React and Angular, optimizing them for peak speed and scalability.",
            "Collaborated with both front-end and back-end developers to improve website performance, leading to a 10% reduction in load times.",
            "Performed code reviews for 10+ projects, ensuring adherence to web development best practices and reducing bugs by 10%.",
            "Developed and integrated 10+ RESTful APIs, enhancing functionality and interoperability of web applications, resulting in a 5% increase in user engagement.",
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/RohanDobriyal',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rohan-dobriyal-b73401239/',
    }
];

export const projects = [
    {
        iconUrl: "ecommerce_app_icon", // Replace with the actual icon or path
        theme: 'btn-back-red',
        name: 'E-Commerce Application',
        description: 'Created an e-commerce web application with features like user authentication, cart management, and payment gateway integration, improving user experience and engagement.',
        link: 'https://github.com/RohanDobriyal/E-commerce', // Replace with your actual GitHub link
    },
    {
        iconUrl: "social_app_icon", // Replace with the actual icon or path
        theme: 'btn-back-pink',
        name: 'Social Media Application',
        description: 'Built a full-stack social media app enabling users to connect, post updates, and interact through likes and comments. Integrated features like real-time notifications and messaging.',
        link: 'https://github.com/RohanDobriyal/Social_media', // Replace with your actual GitHub link
    },
];
