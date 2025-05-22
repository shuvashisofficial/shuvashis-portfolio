export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
export const education: Education[] = [
  // {
  //   id: "rmit",
  //   degree: "Master's in Artificial Intelligence",
  //   institution: "Royal Melbourne Institute of Technology (RMIT)",
  //   location: "Melbourne, Australia",
  //   startDate: "2026",
  //   endDate: "Ongoing"
  // },
  {
    id: "aust",
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Ahsanullah University of Science and Technology (AUST)",
    location: "Dhaka, Bangladesh",
    startDate: "2020",
    endDate: "2025",
    gpa: "3.522/4.00"
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka Residential Model College",
    location: "Dhaka, Bangladesh",
    startDate: "2017",
    endDate: "2019",
    gpa: "5.00/5.00"
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Dhaka Residential Model College",
    location: "Dhaka, Bangladesh",
    startDate: "2015",
    endDate: "2017",
    gpa: "5.00/5.00"
  }
];
