export interface Education {
    school: string;
    degree: string;
    date: string;
    gpa: string;
}

export interface Skills {
    languages_and_tools: string[];
    machineLearningAndDataScience: string[];
    backendAndWebFrameworks: string[];
}

export interface Leadership {
    position: string;
    description: string;
    date: string;
    organization: string;
    impact: string;
}

export interface Project {
    name: string;
    description: string;
    date: string;
    id: number;
    link?: string;
}

export interface ResumeData {
    name: string;
    email: string;
    objective: string[];
    education: Education[];
    skills: Skills;
    leadership: Leadership[];
    projects: Project[];
}

export const selfEducation: Education[] = [
    {
        school: "Indiana University Bloomington",
        degree: "Bachelor of Science in Computer Science and Mathematics with a specialization in Artificial Intelligence",
        date: "2024-2028",
        gpa: "3.763 / 4.000",
    }
];

export const selfSkills: Skills = {
    languages_and_tools: ["Python", "TypeScript", "JavaScript", "C", "HTML", "CSS", "Git", "Vim", "Visual Studio Code", "Cursor"],
    machineLearningAndDataScience: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
    backendAndWebFrameworks: ["React", "Next.js", "FastAPI", "Flask", "SQLAlchemy", "SQLite", "Convex"],
};

export const selfLeadership: Leadership[] = [{
    position: "Member",
    description: "I am a member of ColorStack, a club  that helps African American/Latinx students in STEM field",
    date: "2025",
    organization: "ColorStack",
    impact: "I participated in weekly workshops and events that helped me learn about the latest technologies and trends in the industry.",
}, {
    position: "Member",
    description: "I am a member of Math Club, a club that strengthened analytical problem-solving skills by engaging in weekly advanced theoretical discussions and collaborating with faculty to deconstruct complex mathematical proofs.",
    date: "2025",
    organization: "Math Club",
    impact: "I strengthened my analytical problem-solving skills by engaging in weekly advanced theoretical discussions and collaborating with faculty to deconstruct complex mathematical proofs.",
}, {
    position: "Captian",
    description: "I was the captian of an intramural volleyball team.",
    date: "2025",
    organization: "Indiana University Intramural Sports",
    impact: "I organized and led our team in competition against other intramural teams."
}, {
    position: "Member",
    description: "I was a member of Association of Computing Machinery, a club that helps students learn about the latest technologies and trends in the industry.",
    date: "2024",
    organization: "Association of Computing Machinery",
    impact: "I was able to attend weekly workshops and events that helped me learn about the latest technologies and trends in the industry.",
}, {
    position: "Captian",
    description: "I was the captian of an intramural basketball team.",
    date: "2024",
    organization: "University of Southern Indiana Intramural Sports",
    impact: "I organized and led our team in competition against other intramural teams."
}, {
    position: "Captian",
    description: "I was the captian of an intramural basketball team in the form of 3v3 tournament.",
    date: "2024",
    organization: "University of Southern Indiana Intramural Sports",
    impact: "I organized and led our team in competition against other intramural teams."
}];

export const selfProjects: Project[] = [{
    name: "Surge Multiplier Prediction",
    description: `
        Enabled proactive fleet allocation strategies by achieving a 15-minute predictive horizon for demand surges through the
    engineering of a Spatio-Temporal Regression model that utilizes GeoPandas to correlate complex urban mobility patterns
    with specific geographic zones to predict the imbalance between ride-sharing supply and demand before it happens.
    `,
    date: "December 2025",
    id: 1,
    link: "https://github.com/gabegaines1024/Surge-Prediction-Multiplier"
}, {
    name: "Ghost Writer",
    description: `
        Architected a real-time collaborative screenplay editor using Next.js 15 and Convex, engineering a custom TipTap-based editor that automates industry-standard formatting (INT/EXT, Dialogue) through semantic block-level data structures.
    `,
    date: "December 2025",
    id: 2,
    link: "https://github.com/gabegaines1024/GhostWritter"
}, {
    name: "GG Trading",
    description: `
        Optimized data retrieval performance for high-frequency trading dashboards, achieving a 40% reduction in query
    latency, by architecting a RESTful FastAPI backend that utilizes SQLAlchemy for normalized schema design and
    implements server-side caching strategies to handle complex portfolio aggregations.
    `,
    date: "October 2025",
    id: 3,
    link: "https://github.com/gabegaines1024/Stock-Database"
}];

export const selfResumeData: ResumeData = {
    name: "Gabe Gaines",
    email: "gabegaines1024@gmail.com",
    objective: [
        "I am a Computer Science and Mathematics major at Indiana University Bloomington with a specialization in Artificial Intelligence. My passion lies at the intersection of scalable backend engineering and predictive modeling.",
        "Currently, I am building high-performance APIs and data pipelines using FastAPI, SQLAlchemy, and Scikit-Learn. My recent work includes engineering a real-time Stock Portfolio API and developing statistical prediction models for NBA data.",
        "Beyond the code, I am the founder of Code.With.Gabe, a platform where I break down complex Data Structures and Algorithms concepts for a broad audience. I am also an active member of ColorStack, advocating for diversity in tech, as well as math club where I strengthen analytical problem-solving skills by engaging in weekly advanced theoretical discussions and collaborating with faculty to deconstruct complex mathematical proofs.",
    ],
    education: selfEducation,
    skills: selfSkills,
    leadership: selfLeadership,
    projects: selfProjects,
}