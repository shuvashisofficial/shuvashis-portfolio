export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  description: string;
  issueDate?: string;
  image: string;
  credentialUrl?: string;
  technologies: string[];
  featured?: boolean;
}

export const achievements: Achievement[] = [
{
  id: "iccit-2024-best-paper",
  title: "2024 ICCIT Best Technical Presentation of the Session - 12 AVM",
  issuer: "IEEE Bangladesh Section / ICCIT 2024",
  description: "Received Best Technical Presentation for the paper 'Comprehensive Lung Disease Detection Using Deep Learning Models and Hybrid Chest X-ray Data with Explainable AI' at ICCIT 2024.",
  issueDate: "2024-12",
  image: "/images/projects/Vrfusenet/bestpresenter.png", // Replace with correct path
  credentialUrl: "https://drive.google.com/file/d/11meEbUsqzsMeSge1RkoCu4hwwJxH0FGD/view?usp=sharing",
  technologies: ["IEEE", "ICCIT"],
  featured: true
},
{
  id: "esci-2025-heart-sound-paper",
  title: "Certificate of Participation – IEEE ESCI 2025",
  issuer: "IEEE Signal Processing Society / AISSMS Institute of Information Technology",
  description: "Presented the paper 'Butterfly Optimization and Deep Learning to Classify Heart Sound Signal' at IEEE ESCI-2025 in Pune, India.",
  issueDate: "2025-03",
  image: "/images/projects/Vrfusenet/esci.png", // Replace with the actual image path
  credentialUrl: "https://drive.google.com/file/d/197bwZKxXn6x8Dy50bffsFHzLQJ0phJX1/view?usp=sharing", // Optional: Add a credential link if available
  technologies: ["IEEE", "ESCI", "INDIA"],
  featured: true
},
{
  id: "iccit-2024-vision-transformer",
  title: "Certificate of Appreciation – ICCIT 2024",
  issuer: "IEEE Bangladesh Section / ICCIT 2024",
  description: "Presented the paper 'An Exploratory Approach Towards Investigating and Explaining Vision Transformer and Transfer Learning for Brain Disease Detection' at the 27th ICCIT 2024 in Cox's Bazar.",
  issueDate: "2024-12",
  image: "/images/projects/Vrfusenet/1238.png", // Replace with actual path
  credentialUrl: "https://drive.google.com/file/d/1tzeO9Iy-nuDSXgisGzgDFWYIVHEsl1q9/view?usp=sharing", // Optional
  technologies: ["IEEE", "ICCIT"],
  featured: true
},
{
  id: "iccit-2024-certificate-of-appreciation",
  title: "Certificate of Appreciation – ICCIT 2024",
  issuer: "IEEE Bangladesh Section / ICCIT 2024",
  description: "Presented the paper 'Comprehensive Lung Disease Detection Using Deep Learning Models and Hybrid Chest X-ray Data with Explainable AI' at ICCIT 2024.",
  issueDate: "2024-12",
  image: "/images/projects/Vrfusenet/922.png",
  credentialUrl: "https://drive.google.com/file/d/1fk_6nuCj5vJatLflZbW-spSyK7yGukdF/view?usp=sharing",
  technologies: ["IEEE","ICCIT"],
  featured: true
},
{
  id: "iccit-2024-leaf-disease-paper",
  title: "Certificate of Appreciation – ICCIT 2024",
  issuer: "IEEE Bangladesh Section / ICCIT 2024",
  description: "Presented the paper 'An Approach Towards Identifying Bangladeshi Leaf Diseases through Transfer Learning and XAI' at ICCIT 2024.",
  issueDate: "2024-12",
  image: "/images/projects/Vrfusenet/710.png", // replace with actual path
  credentialUrl: "https://drive.google.com/file/d/1f8iEGRF0tkf5X4okMOvVp-QY-jfeHurA/view?usp=sharing", // optional: provide if hosted online
  technologies: ["IEEE","ICCIT"],
  featured: true
},
{
  id: "icece-2024-retinal-disease-paper",
  title: "Certificate of Participation – ICECE 2024",
  issuer: "Department of EEE, BUET / IEEE Bangladesh Section",
  description: "Presented the paper 'Fuzzy Rank-Based Ensemble Learning for Eye Disease Classification Using Retinal Images' at ICECE 2024.",
  issueDate: "2024-12",
  image: "/images/projects/Vrfusenet/buet.png", // Replace with your actual image path
  credentialUrl: "https://drive.google.com/file/d/1zEYmeUXYOZi-MYijcKDOVThlvO9GejCA/view?usp=sharing", // Optional: add if hosted
  technologies: ["IEEE","ICECE","BUET"],
  featured: true
},
{
  id: "sti-2024-brain-tumor-paper",
  title: "Certificate of Appreciation – STI 2024",
  issuer: "Green University of Bangladesh / IEEE Computer Society",
  description: "Recognized for presenting the paper 'Transfer Learning and Explainable AI for Brain Tumor Classification' at STI 2024, highlighting the use of MRI data in AI-driven medical diagnostics.",
  issueDate: "2024-12",
  image: "/images/projects/Vrfusenet/sti.png", // Replace with actual path
  credentialUrl: "https://drive.google.com/file/d/12cIrNDH3MBDOobBqdMZWpHe2P56Tz7Oe/view?usp=sharing", // Optional: Add if publicly available
  technologies: ["IEEE", "STI"],
  featured: true
},
{
  id: "icca-2024-brain-mri",
  title: "Certificate of Appreciation – ICCA 2024",
  issuer: "American International University-Bangladesh",
  description: "Presented the paper 'Advanced CNN and Explainable AI Based Architecture for Interpretable Brain MRI Analysis' at ICCA 2024, held at AIUB.",
  issueDate: "2024-10",
  image: "/images/projects/Vrfusenet/icca.png", // Update path as per your project structure
  credentialUrl: "https://drive.google.com/file/d/1sC8yyQKH0AiFQhyFQ9gj3fGw4evbVIsq/view?usp=sharing", // Optional: add if you have a link
  technologies: ["ACM","ICCA"],
  featured: true
},

{
  id: "iciset-2024-covid-detection",
  title: "Certificate of Appreciation – ICISET 2024",
  issuer: "International Conference on Innovations in Science, Engineering and Technology (ICISET) 2024",
  description: "Presented the paper 'A Comprehensive Analysis of COVID-19 Detection Using Bangladeshi Data and Explainable AI' at ICISET 2024, organized by IIUC.",
  issueDate: "2024-10",
  image: "/images/projects/Vrfusenet/iciset.png", // Replace with your actual file path
  credentialUrl: "https://drive.google.com/file/d/1LgXMeWyxwWHH6AFpKG3T8Kk1MaiCM1N4/view?usp=sharing", // Add link if available
  technologies: ["IEEE", "ICISET"],
  featured: true
},
{
  id: "compas-2024-bangla-dialect",
  title: "Certificate of Presentation – COMPAS 2024",
  issuer: "IEEE Computer Society Bangladesh Chapter",
  description: "Presented the paper 'Improving Bangla Regional Dialect Detection Using BERT, LLMs, and XAI' at the IEEE COMPAS 2024, held at CUET, Chattogram.",
  issueDate: "2024-09",
  image: "/images/projects/Vrfusenet/270.png", // Replace with actual path
  credentialUrl: "https://drive.google.com/file/d/1AkR_1_fiBVfHDOFlAW7TjdiRzh-2gYDC/view?usp=sharing", // Optional: Add if hosted online
  technologies: ["IEEE", "COMPAS"],
  featured: true
}


];
