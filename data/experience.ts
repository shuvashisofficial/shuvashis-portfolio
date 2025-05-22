// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    logoUrl?: string;
    achievements: string[];
    type?: 'work' | 'research' | 'education' | 'leadership';
  }
  
  export const experiences: Experience[] = [
    // Regular job positions
    {
  id: "adjunct-lecturer-seu",
  logoUrl: "/logos/seu.png", // Ensure the image exists at /public/logos/seu-logo.png
  title: "Adjunct Lecturer",
  company: "Southeast University",
  location: "Dhaka, Bangladesh",
  startDate: "February 2025",
  endDate: "Present",
  description: "Teaching Digital Logic Design (DLD) theory and Algorithm Laboratory courses to undergraduate Computer Science students.",
  achievements: [
    "Delivering undergraduate courses including Digital Logic Design and Algorithm, with a focus on applied learning.",
    "Guiding students through assignments and conceptual problem solving while contributing to course design.",
    "Designed interactive lab sessions for algorithm implementation and complexity analysis.",
    "Delivered theoretical and practical lessons on combinational and sequential circuits in DLD.",
    "Mentored students in problem-solving, coding best practices, and optimization techniques.",
    "Received positive student feedback for bridging theoretical concepts with practical applications."
  ],
  type: "work"
},

    // {
    //   id: "tech-intern",
    //   title: "Technical Intern",
    //   company: "SRM University - AP",
    //   location: "Vijayawada, India",
    //   startDate: "October 2023",
    //   endDate: "June 2024",
    //   description: "Directed technical operations for university events, encompassing website development and promotional materials.",
    //   achievements: [
    //     "Orchestrated technical operations for 30+ university events, designing and deploying websites with integrated payment gateways",
    //     "Increased event participation by 25% through effective technical solutions",
    //     "Engineered dashboards and automated flows, increasing user satisfaction by 75% and cutting coordination time by 60%",
    //     "Ensured smooth execution through cross-functional collaboration, achieving 95% client satisfaction"
    //   ],
    //   type: 'work'
    // },
    // Research positions
    {
  id: "arise-lab-ra",
  title: "Research Assistant",
  logoUrl: "/logos/87.png", 
  company: "Articulated Research Institute for Scientific Excellence (A.R.I.S.E.)",
  location: "Dhaka, Bangladesh",
  startDate: "April 2024",
  endDate: "Present",
  description: "Research assistant role at ARISE Lab focusing on Artificial Intelligence, Computer Vision, and Natural Language Processing projects.",
  achievements: [
    "Published 6 research papers in peer-reviewed international conferences on AI, healthcare, and security domains.",
    "Conducting research in deep learning, natural language processing, and chat models.",
    "Developed explainable AI solutions for healthcare applications, improving model transparency and interpretability.",
    "Contributed to research on vision transformers (ViT) for medical image analysis tasks.",
    "Built deep learning pipelines for disease classification using lung X-ray datasets with explainability features.",
    "Collaborated with multidisciplinary teams to align research outcomes with clinical and industrial needs.",
    "Presented research outcomes in lab symposiums, improving academic communication and presentation skills."
  ],
  type: 'research'
},
{
  id: "aisip-lab-ra",
  title: "Research Assistant",
  logoUrl: "/logos/aisip.png", 
  company: "Applied Intelligent Systems and Information Processing (AISIP) Lab",
  location: "Dhaka, Bangladesh",
  startDate: "July 2023",
  endDate: "December 2024",
  description: "Contributed to research on health signal classification and optimization algorithms under the supervision of Prof. Dr. Shamim Akhter, Professor and Head of the Department of Computer Science and Engineering, Ahsanullah University of Science and Technology (AUST)",
  achievements: [
    "Published 6 research papers in peer-reviewed international conferences on AI, healthcare, and security domains.",
    "Conducting research in deep learning, natural language processing, and chat models.",
    "Developed explainable AI solutions for healthcare applications, improving model transparency and interpretability.",
    "Contributed to research on vision transformers (ViT) for medical image analysis tasks.",
    "Built deep learning pipelines for disease classification using lung X-ray datasets with explainability features.",
    "Collaborated with multidisciplinary teams to align research outcomes with clinical and industrial needs.",
    "Presented research outcomes in lab symposiums, improving academic communication and presentation skills."
  ],
  type: 'research'
},
{
  id: "aust-pic-executive",
  title: "Organizing Secretary & Executive Committee Member",
  logoUrl: "/logos/aust pic.jpg", 
  company: "AUST Programming and Informatics Club",
  location: "Dhaka, Bangladesh",
  startDate: "January 2022",
  endDate: "December 2024",
  description: "Led strategic planning, event management, and community engagement initiatives to promote programming and informatics at Ahsanullah University of Science and Technology.",
  achievements: [
    "Planned and executed Inter-University Programming Contests, attracting nationwide participants.",
    "Coordinated with academic departments and industry sponsors to secure resources and funding.",
    "Led a volunteer team to manage contest logistics, including technical operations and event scheduling.",
    "Organized workshops, hackathons, and knowledge-sharing sessions to foster student engagement in programming.",
    "Contributed to the club's long-term strategic growth by enhancing outreach and technical capacity.",
    "Strengthened industry-academic collaboration to promote informatics and competitive programming on campus."
  ],
  type: "leadership"
},

{
  id: "drmc-science-club-treasurer",
  title: "Treasurer",
  company: "DRMC Science Club",
  logoUrl: "/logos/drmc sc.jpg",
  location: "Dhaka, Bangladesh",
  startDate: "January 2017",
  endDate: "December 2019",
  description: "Led the financial management and operational coordination of large-scale science events as part of the Dhaka Residential Model College (DRMC) Science Club’s executive committee.",
  achievements: [
    "Managed budgeting, expense tracking, and fundraising activities to support club operations.",
    "Successfully organized 4 National Science Carnivals, overseeing logistics and sponsorship management.",
    "Led sponsorship acquisition efforts, securing funds and partnerships from industry and academia.",
    "Coordinated event logistics, including venue management, participant registration, and technical setups.",
    "Fostered collaboration among 100+ volunteer members to ensure smooth event execution.",
    "Contributed to the club's long-term impact by promoting science education and student engagement at scale."
  ],
  type: "leadership"
}

  ];