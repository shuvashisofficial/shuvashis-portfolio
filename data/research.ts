export interface Author {
  name: string;
  affiliation: string;
  email: string;
}

export interface Research {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  authors?: Author[];      // ✅ Add this
  publishDate?: string;    // ✅ Add this
  scholar?: string;
  researchgate?: string;
  github?: string;
  livepdf?: string;
  arXiv?: string;
  IEEE?: string;
  ACM?: string;
  featured: boolean;
}
export const research: Research[] = [
 {
  id: "vrfusenet",
  title: "VR-FUSENET: A FUSION OF HETEROGENEOUS FUNDUS DATA AND EXPLAINABLE DEEP NETWORK FOR DIABETIC RETINOPATHY CLASSIFICATION",
  description: "This paper proposes VR-FuseNet, a hybrid deep learning model combining VGG19 and ResNet50V2 with explainable AI techniques for accurate and interpretable diabetic retinopathy detection.",
  longDescription: "Diabetic retinopathy is a severe eye condition caused by diabetes where the retinal blood vessels get damaged and can lead to vision loss and blindness if not treated. Early and accurate detection is key to intervention and stopping the disease progressing. For addressing this disease properly, this paper presents a comprehensive approach for automated diabetic retinopathy detection by proposing a new hybrid deep learning model called VR-FuseNet. Diabetic retinopathy is a major eye disease and leading cause of blindness especially among diabetic patients, so accurate and efficient automated detection methods are required. To address the limitations of existing methods including dataset imbalance, diversity, and generalization issues, this paper presents a hybrid dataset created from five publicly available diabetic retinopathy datasets. Essential preprocessing techniques such as SMOTE for class balancing and CLAHE for image enhancement are applied systematically to the dataset to improve robustness and generalizability. The proposed VR-FuseNet model combines the strengths of two state-of-the-art convolutional neural networks: VGG19, which captures fine-grained spatial features, and ResNet50V2, known for its deep hierarchical feature extraction. This fusion improves diagnostic performance and achieves an accuracy of 91.824%. The model outperforms individual architectures on all performance metrics, demonstrating the effectiveness of hybrid feature extraction in diabetic retinopathy classification tasks. To make the proposed model more clinically useful and interpretable, this paper incorporates multiple XAI techniques. These techniques generate visual explanations that clearly indicate the retinal features affecting the model's prediction, such as microaneurysms, hemorrhages, and exudates, so that clinicians can interpret and validate the results.",
  technologies: [
  "Computer Vision",
  "Deep Learning",
  "Transfer Learning",
  "Explainable Artificial Intelligence (XAI)",
  "Medical Data Analysis",
  "Hybrid Datasets"
],
  achievements: [
    "Hybrid dataset integration from five public sources",
    "Effective handling of dataset imbalance using SMOTE",
    "Enhanced image quality using CLAHE",
    "Development of VR-FuseNet hybrid deep learning model",
    "Fusion of VGG19 and ResNet50V2 for superior feature extraction",
    "Achievement of 91.824% classification accuracy",
    "Outperformance of individual CNN models on all metrics",
    "Improved robustness and generalization of the model",
    "Integration of explainable AI for clinical interpretability",
    "Generation of visual explanations highlighting retinal abnormalities",
    "Support for clinical validation of model predictions",
    "Detection of microaneurysms, hemorrhages, and exudates",
    "Demonstration of hybrid model superiority in medical image classification",
    "Contribution to early and accurate diabetic retinopathy diagnosis",
    "Development of a clinically useful automated screening tool",
    "Addressing limitations of existing methods through hybrid feature learning",
    "Improved trust and acceptance among healthcare professionals",
    "Enhanced reliability of AI-assisted medical diagnosis",
    "Facilitation of large-scale diabetic retinopathy screening",
    "Support for reducing preventable vision loss through early detection"
  ],
  image: "/images/projects/Vrfusenet/1.png",
  authors: [
    {
      name: "Shamim Rahim Refat",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "n.a.refat2000@gmail.com"
    },
    {
      name: "Ziyan Shirin Raha",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "ziyanraha@gmail.com"
    },
    {
      name: "Shuvashis Sarker",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shuvashisofficial@gmail.com"
    },
    {
      name: "Faika Fairuj Preotee",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "faikafairuj2001@gmail.com"
    },
    {
      name: "MD. Musfikur Rahman",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "mush9031@gmail.com"
    },
    {
      name: "Tashreef Muhammad",
      affiliation: "Lecturer and Coordinator, Department of Computer Science and Engineering, Southeast University, Dhaka, Bangladesh",
      email: "tashreef.muhammad@seu.edu.bd"
    },
    {
      name: "Mohammad Shafiul Alam",
      affiliation: "Professor, Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shafiul.cse@aust.edu"
    }
  ],
  publishDate: "May 1, 2025",
  scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1Rl7QUIAAAAJ&authuser=3&citation_for_view=1Rl7QUIAAAAJ:2osOgNQ5qMEC",
  researchgate: "https://www.researchgate.net/publication/391329596_VR-FuseNet_A_Fusion_of_Heterogeneous_Fundus_Data_and_Explainable_Deep_Network_for_Diabetic_Retinopathy_Classification",
  arXiv: "https://arxiv.org/abs/2504.21464",
  livepdf: "https://arxiv.org/pdf/2504.21464",
  featured: true
},

{
  id: "butterfly",
  title: "Butterfly Optimization and Deep Learning to Classify Heart Sound Signal",
  description: "This paper proposes a non-invasive PCG signal-based classification method using deep learning models optimized with the Butterfly Optimization Algorithm, achieving 99.07% accuracy in cardiovascular disease detection.",
  longDescription: "Heart sound signals (PCG recordings) provide a valuable non-invasive alternative to traditional diagnostic methods like CXR and blood tests for detecting cardiovascular disease. In this study, PCG data are collected, and features such as Mel-Frequency Cepstral Coefficients (MFCC) and Wavelet Scattering Transform (WST) are extracted to capture both time and frequency information. These features are used to classify the signals into normal and abnormal categories using deep learning models, including CNN, Bi-LSTM, and Bi-RNN. Extensive experiments show that combining features enhances classification accuracy. The proposed CNN model, optimized with the Butterfly Optimization Algorithm, achieves an impressive 99.07% classification accuracy, outperforming other models. This study highlights the effectiveness of PCG signal analysis and deep learning techniques for accurate cardiovascular disease detection, offering a non-invasive, efficient alternative for early diagnosis.",
  technologies: [
    "Signal Processing",
    "Deep Learning",
    "Biomedical Signal Analysis",
    "Medical Data Analysis"
  ],
  achievements: [
    "Non-invasive PCG signal-based classification method",
    "Feature extraction using MFCC and WST",
    "Evaluation of CNN, Bi-LSTM, and Bi-RNN models",
    "Improved performance through feature combination",
    "Butterfly Optimization Algorithm applied for model optimization",
    "Achieved 99.07% classification accuracy",
    "Outperformed baseline deep learning models",
    "Demonstrated effectiveness in cardiovascular disease detection",
    "Contributed to non-invasive early diagnosis solutions"
  ],
  image: "/images/projects/Vrfusenet/2.png",
  authors: [
    {
      name: "Faika Fairuj Preotee",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "faikafairuj2001@gmail.com"
    },
    {
      name: "Md Sabbir Hossain",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "mdsabbir120834@gmail.com"
    },
    {
      name: "Shuvashis Sarker",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shuvashisofficial@gmail.com"
    },
    {
      name: "Farliha Binte Faisal",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "farliha1722@gmail.com"
    },
    {
      name: "Nawrin Tabassum",
      affiliation: "Lecturer, Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "nawrintabassum14@gmail.com"
    },
    {
      name: "Prof. Dr. Shamim Akhter",
      affiliation: "Professor & Head, Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shamimakhter@gmail.com"
    }
  ],
  publishDate: "May 9, 2025",
  scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1Rl7QUIAAAAJ&authuser=3&citation_for_view=1Rl7QUIAAAAJ:qjMakFHDy7sC",
  researchgate: "",
  IEEE: "https://ieeexplore.ieee.org/abstract/document/10987967",
  livepdf: "https://drive.google.com/file/d/19oz5pDUxV03-lrtF6NYkJeF6zKTDopFN/view?usp=sharing",
  featured: true
},
{
  id: "ancholik-ner",
  title: "ANCHOLIK-NER: A Benchmark Dataset for Bangla Regional Named Entity Recognition",
  description: "ANCHOLIK-NER introduces a linguistically diverse dataset capturing Bangla regional dialects across various regions for advancing Named Entity Recognition (NER) research.",
  longDescription: "ANCHOLIK-NER is a linguistically diverse dataset for Named Entity Recognition (NER) in Bangla regional dialects, capturing variations across Sylhet, Chittagong, Barishal, Noakhali, and Mymensingh. The dataset has around 17,405 sentences, 3,481 sentences per region, sourced from publicly available datasets and web scraping from news articles. Using the BIO tagging scheme and professional annotations, the dataset is structured into separate CSV subsets for each region. It contains labeled named entities categorized into ten classes: Person, Location, Organization, Food, Animal, Colour, Role, Relation, Object, and Miscellaneous. This dataset serves as a valuable resource for training and evaluating NER models for Bangla dialects, contributing to regional language processing and low-resource NLP applications. It supports applications in machine translation, information retrieval, and conversational AI.",
  technologies: [
    "Natural Language Processing (NLP)",
    "Named Entity Recognition (NER)",
    "Bangla Language Processing",
    "Low-Resource Language Processing",
    "Regional Dialect Analysis"
  ],
  achievements: [
    "Creation of the first large-scale Bangla regional dialect NER dataset",
    "17,405 manually annotated sentences across five regions",
    "Structured entity labeling using BIO tagging",
    "Identification of ten entity classes for diverse NER tasks",
    "Supports low-resource NLP applications in Bangla",
    "Advances research in regional language processing",
    "Provides CSV-formatted data for easy model training and evaluation",
    "Enables improvements in Bangla conversational AI and machine translation",
    "Cited as a benchmark for Bangla NER research"
  ],
  image: "/images/projects/Vrfusenet/3.png",
  authors: [
    { name: "Bidyarthi Paul", affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh", email: "bidyarthipaul01@gmail.com" },
    { name: "Faika Fairuj Preotee", affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh", email: "faikafairuj2001@gmail.com" },
    { name: "Shuvashis Sarker", affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh", email: "shuvashisofficial@gmail.com" },
    { name: "Shamim Rahim Refat", affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh", email: "n.a.refat2000@gmail.com" },
    { name: "Shifat Islam", affiliation: "Bangladesh University of Engineering and Technology, Dhaka, Bangladesh", email: "shifat.islam.buet@gmail.com" },
    { name: "Tashreef Muhammad", affiliation: "Lecturer and Coordinator, Department of Computer Science and Engineering, Southeast University, Dhaka, Bangladesh", email: "tashreef.muhammad@seu.edu.bd" },
    { name: "Mohammad Ashraful Hoque", affiliation: "Assistant Professor and Coordinator, Department of Computer Science and Engineering, Southeast University, Dhaka, Bangladesh", email: "ashraful@seu.edu.bd" },
    { name: "Shahriar Manzoor", affiliation: "Associate & Head, Department of Computer Science and Engineering, Southeast University, Dhaka, Bangladesh", email: "smanzoor@seu.edu.bd" }
  ],
  publishDate: "March 14, 2025",
  scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1Rl7QUIAAAAJ&authuser=3&citation_for_view=1Rl7QUIAAAAJ:u-x6o8ySG0sC",
  researchgate: "https://www.researchgate.net/publication/389624640_ANCHOLIK-NER_A_Benchmark_Dataset_for_Bangla_Regional_Named_Entity_Recognition",
  arXiv: "https://arxiv.org/abs/2502.11198",
  livepdf: "https://arxiv.org/pdf/2502.11198.pdf",
  featured: true
},
{
  id: "brain-tumor-xai",
  title: "Transfer Learning and Explainable AI for Brain Tumor Classification: A Study Using MRI Data from Bangladesh",
  description: "This study presents an automated brain tumor classification system using MRI data from Bangladesh, leveraging transfer learning and explainable AI to achieve 99.17% accuracy in detecting glioma, meningioma, and other brain cancers.",
  longDescription: "Brain tumors, whether benign or malignant, pose significant health risks. Malignant tumors are particularly dangerous due to their rapid proliferation. Timely identification is crucial, especially in nations like Bangladesh with limited healthcare resources. This research addresses these challenges by developing an automated brain tumor classification system using MRI data collected from multiple hospitals in Bangladesh. Deep learning models such as VGG16, VGG19, and ResNet50 were employed to classify different brain tumor types, including glioma and meningioma. Explainable AI (XAI) techniques like Grad-CAM and Grad-CAM++ were used to improve model interpretability by highlighting critical MRI regions influencing predictions. VGG16 achieved the highest accuracy of 99.17%. The integration of XAI enhanced model transparency and clinical relevance, making the system more suitable for resource-limited environments. This study demonstrates how combining deep learning with explainable AI can improve brain tumor detection and diagnosis in regions with limited access to advanced medical technologies.",
  technologies: [
    "Medical Data Analysis",
    "Deep Learning",
    "Transfer Learning",
    "Explainable Artificial Intelligence (XAI)",
  ],
  achievements: [
    "Developed an automated MRI-based brain tumor classification system",
    "Utilized VGG16, VGG19, and ResNet50 models for tumor classification",
    "Achieved 99.17% classification accuracy with VGG16",
    "Applied Grad-CAM and Grad-CAM++ for model explainability",
    "Enhanced transparency and stability for clinical adoption",
    "Addressed medical challenges in resource-limited environments",
    "Contributed to improved brain tumor detection in Bangladesh",
    "Demonstrated the clinical value of explainable deep learning models"
  ],
  image: "/images/projects/Vrfusenet/4.png",
  authors: [
    {
      name: "Shuvashis Sarker",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shuvashisofficial@gmail.com"
    }
  ],
  publishDate: "April 11, 2025",
  scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1Rl7QUIAAAAJ&authuser=3&citation_for_view=1Rl7QUIAAAAJ:9yKSN-GCB0IC",
  researchgate: "https://www.researchgate.net/publication/390707293_Transfer_Learning_and_Explainable_AI_for_Brain_Tumor_Classification_A_Study_Using_MRI_Data_from_Bangladesh",
  IEEE: "https://ieeexplore.ieee.org/abstract/document/10951092",  // Please update with the actual IEEE link if different
  livepdf: "https://drive.google.com/file/d/1eiw4zVU6-VRlbAGy378R5zmXzmJQJcy8/view?usp=sharing",
  featured: true
},
{
  id: "covid19-xai-bd",
  title: "A Comprehensive Analysis of COVID-19 Detection Using Bangladeshi Data and Explainable AI",
  description: "This paper proposes an explainable deep learning approach for detecting COVID-19 from chest X-rays using a Bangladeshi dataset, emphasizing transparency, class balancing, and clinical interpretability.",
  longDescription: "COVID-19, a highly infectious virus, has significantly impacted global health and particularly devastated Bangladesh with over 29,000 deaths and 2 million cases by April 2024. This paper proposes a novel approach to COVID-19 detection using chest X-ray (CXR) images collected from Bangladesh, categorized into four classes: Normal, Lung-Opacity, COVID-19, and Viral-Pneumonia. Using a dataset of 4,350 CXR images, the study applies machine learning (ML), deep learning (DL), and transfer learning (TL) methods for classification. The VGG19 model achieves 98% accuracy in COVID-19 detection. LIME is used to enhance model interpretability by visualizing regions influencing predictions. SMOTE addresses dataset imbalance by oversampling minority classes. The integration of Explainable AI (XAI) improves the transparency and trustworthiness of the model, especially important in developing countries with limited testing resources. This study highlights how combining DL, TL, and XAI can lead to more reliable automated COVID-19 screening in resource-constrained environments.",
  technologies: [
    "Medical Data Analysis",
    "Deep Learning",
    "Transfer Learning",
    "Explainable Artificial Intelligence (XAI)"
  ],
  achievements: [
    "Utilized a Bangladeshi dataset of 4,350 CXR images",
    "Classified images into four categories: Normal, Lung-Opacity, COVID-19, and Viral-Pneumonia",
    "Achieved 98% accuracy using VGG19 for COVID-19 detection",
    "Applied LIME for visual explanation of predictions",
    "Used SMOTE to handle class imbalance effectively",
    "Demonstrated superior performance of TL and DL models",
    "Enhanced clinical transparency through XAI techniques",
    "Supported scalable COVID-19 screening in developing nations"
  ],
  image: "/images/projects/Vrfusenet/5.png",
  authors: [
    {
      name: "Shuvashis Sarker",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shuvashisofficial@gmail.com"
    }
  ],
  publishDate: "October 26, 2024",
  scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1Rl7QUIAAAAJ&authuser=3&citation_for_view=1Rl7QUIAAAAJ:d1gkVwhDpl0C",  // Provide link if available
  researchgate: "https://www.researchgate.net/publication/390415289_A_Comprehensive_Analysis_of_COVID-19_Detection_Using_Bangladeshi_Data_and_Explainable_AI?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InByb2ZpbGUiLCJwcmV2aW91c1BhZ2UiOiJwdWJsaWNhdGlvbiJ9fQ",  // Provide link if available
  IEEE: "https://ieeexplore.ieee.org/abstract/document/10941254",
  livepdf: "https://drive.google.com/file/d/1qWcFLcAXvhn6_8Jl_JgsBQbqdBp-pVEF/view?usp=sharing",  // Provide PDF link if you want to link externally
  featured: true
},
{
  id: "bangla-dialect-bert-xai",
  title: "Improving Bangla Regional Dialect Detection Using BERT, LLMs, and XAI",
  description: "This paper presents a novel approach for identifying and categorizing Bangla regional dialects using transformer-based models like Bangla BERT and GPT-3.5, combined with explainable AI techniques.",
  longDescription: "This research addresses the challenge of identifying and categorizing Bangla regional dialects using advanced natural language processing (NLP) methods. The study leverages transformer-based models such as Bangla BERT, GPT-3.5 Turbo, and Gemini 1.5 Pro to classify regional dialects from a dataset of Bangla speech samples collected from various regions including Mymensingh, Chittagong, Barishal, Noakhali, and Sylhet. Few-shot learning was used to evaluate performance on limited data. Bangla BERT outperformed other models with an accuracy of 88.74%, while GPT-3.5 Turbo achieved 64%. To enhance model interpretability and trust, Local Interpretable Model-Agnostic Explanations (LIME) was employed. The paper emphasizes the value of Explainable AI (XAI) in understanding linguistic subtleties, improving user satisfaction, and making automated dialect detection systems more accessible, especially for use in speech recognition and communication technologies in Bangladesh.",
  technologies: [
    "Natural Language Processing (NLP)",
    "Bangla Language Processing",
    "Low-Resource Language Processing",
    "Regional Dialect Analysis"
  ],
  achievements: [
    "Collected a diverse dataset of Bangla regional speech samples",
    "Applied Bangla BERT for dialect classification with 88.74% accuracy",
    "Tested GPT-3.5 Turbo with few-shot learning for dialect recognition",
    "Implemented LIME for enhancing explainability of predictions",
    "Improved interpretability of AI decisions in NLP tasks",
    "Contributed to speech recognition systems tailored for Bangla",
    "Enabled dialect-aware NLP in resource-limited contexts",
    "Addressed challenges in communication across Bangladeshi dialects"
  ],
  image: "/images/projects/Vrfusenet/6.png",
  authors: [
    {
      name: "Bidyarthi Paul",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka - 1208, Bangladesh",
      email: "bidyarthipaul01@gmail.com"
    },
    {
      name: "Faika Fairuj Preotee",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka - 1208, Bangladesh",
      email: "faikafairuj2001@gmail.com"
    },
    {
      name: "Shuvashis Sarker",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka - 1208, Bangladesh",
      email: "shuvashisofficial@gmail.com"
    },
    {
      name: "Tashreef Muhammad",
      affiliation: "Lecturer and Coordinator, Department of Computer Science and Engineering, Southeast University, Dhaka, Bangladesh",
      email: "tashreef.muhammad@seu.edu.bd"
    }
  ],
  publishDate: "September 25, 2024",
  scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1Rl7QUIAAAAJ&authuser=3&citation_for_view=1Rl7QUIAAAAJ:u5HHmVD_uO8C",  // Add if available
  researchgate: "https://www.researchgate.net/publication/387256847_Improving_Bangla_Regional_Dialect_Detection_Using_BERT_LLMs_and_XAI",  // Add if available
  IEEE: "https://ieeexplore.ieee.org/abstract/document/10796843",
  livepdf: "https://drive.google.com/file/d/1dhSxo3IyOflwGAjqRdiTsCRP6OvcqKcy/view?usp=sharing",  // Optional: Add link to full paper PDF
  featured: true
},
{
  id: "leaf-disease-tl-xai",
  title: "An Approach Towards Identifying Bangladeshi Leaf Diseases through Transfer Learning and XAI",
  description: "This study proposes an accessible deep learning solution to classify 21 distinct leaf diseases across six plant species in Bangladesh using CNN, transfer learning, and explainable AI techniques.",
  longDescription: "Leaf diseases are a major threat to agricultural productivity and food security in Bangladesh. This research provides a practical solution for identifying 21 types of leaf diseases across six plants using deep learning models, including CNN and transfer learning (TL) techniques. Pre-trained models like VGG16, VGG19, MobileNetV2, InceptionV3, ResNet50V2, and Xception were fine-tuned to detect diseases with high accuracy. VGG19 and Xception performed best, achieving 98.90% and 98.66% accuracy, respectively. To ensure transparency and trust in model predictions, various Explainable AI (XAI) techniques—such as GradCAM, GradCAM++, LayerCAM, and ScoreCAM—were used to highlight important regions influencing decisions. This approach not only automates disease detection but also supports farmers in rural or remote areas with limited technical resources by enabling better decision-making. The methodology contributes to the growing field of interpretable AI in agriculture and demonstrates the effectiveness of multi-species plant disease detection using TL and XAI.",
  technologies: [
    "Agricultural AI",
    "Deep Learning",
    "Transfer Learning",
    "Explainable Artificial Intelligence (XAI)",
  ],
  achievements: [
    "Classified 21 leaf diseases across six plant types",
    "Used fine-tuned deep learning models like VGG19, MobileNetV2, and ResNet50V2",
    "Achieved 98.90% accuracy with VGG19 and 98.66% with Xception",
    "Applied multiple XAI techniques for model transparency",
    "Enabled visual interpretation using GradCAM, ScoreCAM, etc.",
    "Developed a farmer-friendly, automated disease diagnosis system",
    "Addressed practical agricultural challenges in rural Bangladesh",
    "Contributed to food security and precision agriculture in South Asia"
  ],
  image: "/images/projects/Vrfusenet/7.png",
  authors: [
    {
      name: "Faika Fairuj Preotee",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "faikafairuj2001@gmail.com"
    },
    {
      name: "Shuvashis Sarker",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shuvashisofficial@gmail.com"
    },
    {
      name: "Shamim Rahim Refat",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "n.a.refat2000@gmail.com"
    },
    {
      name: "Tashreef Muhammad",
      affiliation: "Lecturer and Coordinator, Department of Computer Science and Engineering, Southeast University, Dhaka, Bangladesh",
      email: "tashreef.muhammad@seu.edu.bd"
    },
    {
      name: "Shifat Islam",
      affiliation: "Department of Computer Science and Engineering, Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      email: "shifat.islam.buet@gmail.com"
    }
  ],
  publishDate: "December 20, 2024",
  scholar: "",  // Add if available
  researchgate: "",  // Add if available
  IEEE: "",
  // livepdf: "https://drive.google.com/file/d/1U8tRRRoWoetj-x05RNqUiwNNn4LZ3JqC/view?usp=sharing",  // Optional: add Drive or direct PDF link
  featured: true
},
{
  id: "brain-disease-vit-tl-xai",
  title: "An Exploratory Approach Towards Investigating and Explaining Vision Transformer and Transfer Learning for Brain Disease Detection",
  description: "This study presents a comparative analysis of Vision Transformers (ViT) and Transfer Learning (TL) models for classifying brain diseases from MRI scans in Bangladesh, enhanced by Explainable AI techniques.",
  longDescription: "Brain disorders such as tumors and degenerative diseases require accurate and early diagnosis, which can be challenging due to the complexity of MRI data. This research explores the use of Vision Transformers (ViT) and Transfer Learning (TL) models—including VGG16, VGG19, ResNet50V2, MobileNetV2—for brain disease classification using MRI data collected from Bangladesh. ViT demonstrated superior performance in capturing global relationships within images, achieving an accuracy of 94.37%. TL helped address data scarcity by fine-tuning pre-trained models for improved results. The study also employed Explainable AI (XAI) methods such as GradCAM, GradCAM++, LayerCAM, ScoreCAM, and Faster-ScoreCAM to provide visual explanations of model predictions. These techniques enhanced interpretability and transparency, helping clinicians trust and understand the AI's decision-making. The findings contribute to advancing brain disease diagnosis in data-constrained environments by combining state-of-the-art deep learning and explainability.",
  technologies: [
    "Vision Transformer (ViT)",
    "Transfer Learning",
    "Medical Data Analysis",
    "Deep Learning",
    "Transfer Learning",
    "Explainable Artificial Intelligence (XAI)"
  ],
  achievements: [
    "Conducted comparative analysis between ViT and TL models for MRI-based brain disease detection",
    "Used Bangladeshi MRI dataset to train and evaluate model performance",
    "ViT achieved highest classification accuracy of 94.37%",
    "Fine-tuned models like VGG16, VGG19, and ResNet50V2 for better performance in data-scarce conditions",
    "Employed five XAI techniques for visualizing critical features in MRI scans",
    "Enhanced model transparency and clinical interpretability",
    "Addressed limited medical data availability through Transfer Learning",
    "Contributed to practical AI-based diagnostic tools for brain health in low-resource settings"
  ],
  image: "/images/projects/Vrfusenet/8.png",
  authors: [
    {
      name: "Shuvashis Sarker",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shuvashisofficial@gmail.com"
    },
    {
      name: "Shamim Rahim Refat",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "n.a.refat2000@gmail.com"
    },
    {
      name: "Faika Fairuj Preotee",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "faikafairuj2001@gmail.com"
    },
    {
      name: "Shifat Islam",
      affiliation: "Department of Computer Science and Engineering, Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      email: "shifat.islam.buet@gmail.com"
    },
    {
      name: "Tashreef Muhammad",
      affiliation: "Lecturer and Coordinator, Department of Computer Science and Engineering, Southeast University, Dhaka, Bangladesh",
      email: "tashreef.muhammad@seu.edu.bd"
    },
    {
      name: "Mohammad Ashraful Hoque",
      affiliation: "Assistant Professor and Coordinator, Department of Computer Science and Engineering, Southeast University, Dhaka, Bangladesh",
      email: "ashraful@seu.edu.bd"
    }
  ],
  publishDate: "December 22, 2024",
  scholar: "",  // Add if available
  researchgate: "",  // Add if available
  IEEE: "",  // Add DOI link if available
  // livepdf: "https://drive.google.com/file/d/15mnYXI2H95U7OEc6zDgsY5czwAJs-NVY/view?usp=sharing",  // Add if externally hosted
  featured: true
},
{
  id: "lung-disease-hybrid-xai",
  title: "Comprehensive Lung Disease Detection Using Deep Learning Models and Hybrid Chest X-ray Data with Explainable AI",
  description: "This study evaluates deep learning and transfer learning models for lung disease detection using hybrid chest X-ray datasets and employs Explainable AI to enhance interpretability and clinical trust.",
  longDescription: "Advanced diagnostic tools are critical for detecting and treating lung diseases, which affect millions globally. This study investigates deep learning and transfer learning models using a hybrid chest X-ray dataset compiled from four different sources, including two from Bangladesh. The merged dataset enhances model robustness and generalizability across diverse lung conditions such as COVID-19, pneumonia, lung opacity, and normal cases. The research applies CNN and TL architectures including VGG16, VGG19, InceptionV3, Xception, ResNet50V2, InceptionResNetV2, MobileNetV2, and DenseNet121. Among these, VGG16, Xception, ResNet50V2, and DenseNet121 achieve 99% accuracy, precision, recall, and F1-score on the hybrid dataset. Explainable AI techniques like GradCAM, GradCAM++, LayerCAM, ScoreCAM, and Faster-ScoreCAM are used to visualize key features influencing model predictions, improving transparency and trust. This work contributes to scalable, reliable, and interpretable lung disease detection in data-diverse environments, particularly for developing regions like Bangladesh.",
  technologies: [
    "Medical Data Analysis",
    "Hybrid Datasets",
    "Deep Learning",
    "Transfer Learning",
  ],
  achievements: [
    "Merged four chest X-ray datasets including two from Bangladesh",
    "Created a hybrid dataset for more generalizable training",
    "Tested CNN and TL models across multiple lung disease categories",
    "VGG16, Xception, ResNet50V2, DenseNet121 achieved 99% accuracy",
    "Used multiple XAI methods to visualize model decision regions",
    "Improved model explainability and clinical acceptance",
    "Contributed to scalable lung disease detection for developing countries",
    "Addressed regional diversity and dataset limitations in pulmonary diagnosis"
  ],
  image: "/images/projects/Vrfusenet/9.png",  // Update with actual image path if different
  authors: [
    {
      name: "Shuvashis Sarker",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shuvashisofficial@gmail.com"
    },
    {
      name: "Shamim Rahim Refat",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "n.a.refat2000@gmail.com"
    },
    {
      name: "Faika Fairuj Preotee",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "faikafairuj2001@gmail.com"
    },
    {
      name: "Tanvir Rouf Shawon",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "shawontanvir95@gmail.com"
    },
    {
      name: "Raihan Tanvir",
      affiliation: "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      email: "raihantanvir.cse@aust.edu"
    }
  ],
  publishDate: "December 22, 2024",
  scholar: "",  // Add if available
  researchgate: "",  // Add if available
  IEEE: "",  // Add DOI link if available
  // livepdf: "https://drive.google.com/file/d/13Xbg7C3Q0KJahS0c6veZXJWliwVrwIuJ/view?usp=sharing",  // Add if externally hosted
  featured: true
},
{
  "id": "eye-disease-fuzzy-xai",
  "title": "Fuzzy Rank-Based Ensemble Learning for Eye Disease Classification Using Retinal Images: A Bangladeshi-Specific Dataset with Explainable AI Integration",
  "description": "This paper presents a fuzzy rank-based ensemble approach for retinal disease classification using Bangladeshi datasets, integrating Explainable AI to enhance model interpretability and medical trust.",
  "longDescription": "This study addresses the critical challenge of detecting ocular diseases that affect the retina, optic nerve, and blood vessels—conditions that can lead to blindness if untreated. In regions like Bangladesh, where healthcare access is limited, early and accurate diagnosis is essential. The research employs a transfer learning strategy using Bangladeshi retinal image datasets collected from local health facilities. Multiple pre-trained models, including DenseNet, EfficientNet, GoogleNet, MobileNet, ResNet50, VGG16, VGG19, and ShuffleNet, are evaluated. These predictions are then aggregated using a fuzzy rank-based ensemble method powered by the Gompertz function, which adaptively weights model outputs to boost classification accuracy. The ensemble approach achieves an overall accuracy of 96.16%, with Diabetic Retinopathy and Disc Oedema reaching over 99% precision. Explainable AI techniques like LIME are employed to visualize the decision-making process, aiding interpretability and trust. This research offers a scalable, accurate, and transparent solution for eye disease screening in under-resourced settings.",
  "technologies": [
    "Fuzzy Ensemble Learning",
    "Medical Data Analysis",
    "Hybrid Datasets",
    "Deep Learning",
    "Transfer Learning",
  ],
  "achievements": [
    "Collected region-specific retinal images from Bangladeshi health facilities",
    "Evaluated multiple DL and TL models for eye disease classification",
    "Introduced a fuzzy rank-based ensemble framework",
    "Achieved 96.16% overall classification accuracy",
    "Attained 99.62% precision in Diabetic Retinopathy and 99.63% in Disc Oedema",
    "Used LIME for visual interpretability of predictions",
    "Enhanced model trust and transparency for clinical settings",
    "Provided a resource-efficient solution for rural and low-resource diagnosis"
  ],
  "image": "/images/projects/Vrfusenet/0.png",  // Update with actual image path
  "authors": [
    {
      "name": "Shuvashis Sarker",
      "affiliation": "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      "email": "shuvashisofficial@gmail.com"
    }
  ],
  "publishDate": "December 22, 2024",
  "scholar": "",
  "researchgate": "",
  "IEEE": "",  // Add DOI if available
  // "livepdf": "https://drive.google.com/file/d/1hG3x5tFb_GK1kgyJilo9MeNuMA1NfvQK/view?usp=sharing",
  "featured": true
},
{
  "id": "cnn-xai-brain-mri",
  "title": "Advanced CNN and Explainable AI Based Architecture for Interpretable Brain MRI Analysis",
  "description": "This paper proposes an interpretable CNN-based architecture for brain MRI analysis, integrating Explainable AI (XAI) techniques like LIME to improve model transparency and aid clinical decision-making.",
  "longDescription": "This study investigates the use of Convolutional Neural Networks (CNNs) and Explainable AI (XAI) techniques to enhance interpretability in brain MRI analysis. A dataset of 5,285 brain MRI images was used, achieving a classification accuracy of 86%. The LIME framework was applied to generate localized explanations, enhancing the model's transparency and helping clinicians understand model predictions. This framework promotes accurate diagnosis and supports decision-making in medical imaging systems. The study highlights how the synergy of CNNs and XAI can result in more reliable and clinically relevant diagnostic tools, especially valuable in resource-constrained healthcare environments.",
  "technologies": [
    "Medical Data Analysis",
    "Deep Learning",
    "Transfer Learning",
    "Explainable Artificial Intelligence (XAI)"
  ],
  "achievements": [
    "Used a dataset of 5,285 brain MRI images",
    "Achieved classification accuracy of 86%",
    "Incorporated LIME for localized and interpretable visual explanations",
    "Enhanced model transparency and clinical decision support",
    "Developed a CNN-XAI hybrid architecture for brain disease detection"
  ],
  "image": "/images/projects/Vrfusenet/10.png",
  "authors": [
    {
      "name": "Shuvashis Sarker",
      "affiliation": "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      "email": "shuvashisofficial@gmail.com"
    },
    {
      "name": "Faika Fairuj Preotee",
      "affiliation": "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      "email": "faikafairuj2001@gmail.com"
    },
    {
      "name": "Shamim Rahim Refat",
      "affiliation": "Department of Computer Science and Engineering, Ahsanullah University of Science and Technology, Dhaka, Bangladesh",
      "email": "n.a.refat2000@gmail.com"
    },
    {
      "name": "Tashreef Muhammad",
      "affiliation": "Department of Computer Science and Engineering, Southeast University, Dhaka, Bangladesh",
      "email": "tashreef.muhammad@seu.edu.bd"
    }
  ],
  "publishDate": "October 18, 2024",
  "scholar": "",
  "researchgate": "",
  "IEEE": "",
  "ACM": "https://doi.org/10.1145/3723178.3723220",
  "livepdf": "",
  "featured": true
}






];