export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
  id: "forestscape",
  title: "Forestscape",
  description: "A dynamic forest environment simulation with seasonal transitions and interactive camera controls built using custom shaders.",
  longDescription: "Forestscape is a 3D interactive environment that simulates a dynamic forest with realistic seasonal transitions. Developed using custom GLSL shaders, the scene includes textured trees, cliffs, dynamic lighting, animated clouds, and user-controlled camera navigation. Users can interact with the environment using keyboard and mouse, experiencing changes in light, leaf color, and textures. The project features perspective projection, environmental animations, and ambient sounds, creating an immersive natural experience. Built in a WebGL-compatible setup with Node.js, JavaScript, and texture designs from Photoshop.",
  technologies: ["Three.js", "GLSL", "WebGL", "Node.js", "3D Modeling"],
  achievements: [
    "Implemented custom GLSL shaders to enhance lighting realism and surface depth",
    "Built fully interactive 3D forest with seasonal animations and perspective camera movement",
    "Enabled real-time texture changes and lighting dynamics based on user interaction",
    "Designed animated clouds, ambient sound effects, and realistic shadows to increase environmental immersion"
  ],
  image: "/images/projects/Vrfusenet/forestscape.png",
  github: "https://github.com/shuvashisofficial/Forestscape",
  liveUrl: "", // Replace with actual live demo if available
  featured: true
},
{
  "id": "butterfly-optimization-heart-sound",
  "title": "Butterfly Optimization and Deep Learning to Classify Heart Sound Signal",
  "description": "An AI-based system using deep learning and Butterfly Optimization Algorithm to classify heart sound signals for early cardiovascular disease detection.",
  "longDescription": "This AI research project leverages advanced deep learning techniques combined with the Butterfly Optimization Algorithm to accurately classify heart sound signals (PCG recordings). The system extracts crucial audio features such as MFCC and WST, then applies models like CNN, Bi-LSTM, and Bi-RNN to differentiate normal and abnormal heart conditions. Optimization of model parameters via Butterfly Optimization significantly enhances classification accuracy, reaching 99.07%. This non-invasive diagnostic tool demonstrates how AI can improve early detection and monitoring of cardiovascular diseases with high efficiency and reliability.",
  "technologies": ["Python", "Artificial Intelligence", "Deep Learning"],
  "achievements": [
    "Developed AI models for accurate heart sound classification using deep learning",
    "Extracted and analyzed time-frequency features from PCG signals",
    "Applied Butterfly Optimization Algorithm for hyperparameter tuning",
    "Achieved a high classification accuracy of 99.07%, surpassing baseline methods",
    "Validated models through extensive experimentation with individual and combined features",
    "Demonstrated potential for non-invasive cardiovascular disease screening",
    "Prepared research for presentation at the ESCI 2025 international conference",
    "Documented all AI methodologies and experimental results",
    "Contributed to advancements in medical AI applications",
    "Enhanced understanding of AI’s role in healthcare diagnostics"
  ],
  "image": "/images/projects/Vrfusenet/butterfly.png",
  "github": "https://github.com/shuvashisofficial/Butterfly-Optimization-and-Deep-Learning-to-Classify-Heart-Sound-Signal",
  "liveUrl": "",
  "featured": true
},
{
  "id": "brain-tumor-classification-xai",
  "title": "Transfer Learning and Explainable AI for Brain Tumor Classification",
  "description": "An AI-based system using transfer learning and explainable AI techniques to classify brain tumors from MRI data, improving diagnostic accuracy in resource-limited settings.",
  "longDescription": "This research project develops an automated brain tumor classification system leveraging MRI data collected from hospitals in Bangladesh. Utilizing advanced deep learning models such as VGG16, VGG19, and ResNet50, the system classifies various brain tumors including glioma and meningioma with high accuracy. Explainable AI (XAI) methods, including Grad-CAM and Grad-CAM++, are incorporated to improve model interpretability by highlighting critical MRI regions influencing the classification. Achieving an accuracy of 99.17%, this approach enhances transparency and stability, making it suitable for clinical applications especially in resource-constrained environments. This study demonstrates the potential of combining transfer learning and explainable AI to improve brain tumor detection where advanced medical resources are limited.",
  "technologies": ["Python", "Deep Learning", "Transfer Learning"],
  "achievements": [
    "Collected and processed MRI brain tumor data from multiple Bangladeshi hospitals",
    "Implemented transfer learning models VGG16, VGG19, and ResNet50 for classification",
    "Achieved a high classification accuracy of 99.17% in tumor detection",
    "Applied explainable AI techniques Grad-CAM and Grad-CAM++ to enhance model transparency",
    "Highlighted key MRI regions critical to classification decisions",
    "Validated the system’s stability and suitability for clinical applications",
    "Addressed healthcare challenges in resource-limited settings through AI",
    "Published research accepted at the 2024 6th International Conference on Sustainable Technologies for Industry 5.0 (STI 2024)",
    "Demonstrated the effective integration of deep learning and explainability",
    "Contributed towards advancing AI-driven medical diagnostics in Bangladesh"
  ],
  "image": "/images/projects/Vrfusenet/brain.png", // Update as needed
  "github": "https://github.com/shuvashisofficial/Transfer-Learning-XAI-for-Brain-Tumor-Classification-A-Study-Using-MRI-Data-from-Bangladesh",
  "liveUrl": "",
  "featured": true
},
{
  "id": "covid19-detection-xai",
  "title": "A Comprehensive Analysis of COVID-19 Detection Using Bangladeshi Data and Explainable AI",
  "description": "An AI-powered system using machine learning, deep learning, and explainable AI techniques to detect COVID-19 from chest X-ray images with high accuracy.",
  "longDescription": "This research project addresses the urgent need for accurate COVID-19 detection from chest X-ray (CXR) images, focusing on Bangladeshi datasets. Utilizing a dataset of 4,350 images categorized into Normal, Lung-Opacity, COVID-19, and Viral Pneumonia classes, the study employs machine learning (ML), deep learning (DL), and transfer learning (TL) models, including VGG19, achieving an impressive 98% accuracy. Explainable AI (XAI) techniques like LIME are applied to interpret model predictions by highlighting critical regions influencing classification decisions. The study also incorporates SMOTE to address class imbalance issues. By providing insights into correct and incorrect classifications, the research emphasizes the importance of XAI in improving model transparency, reliability, and the overall effectiveness of COVID-19 detection in CXR images.",
  "technologies": ["Python", "Machine Learning", "Deep Learning", "Transfer Learning", "Explainable AI", "VGG19", "LIME", "SMOTE", "Chest X-Ray Image Processing"],
  "achievements": [
    "Utilized a large dataset of Bangladeshi chest X-ray images with four diagnostic classes",
    "Implemented machine learning, deep learning, and transfer learning models for classification",
    "Achieved 98% accuracy using the VGG19 deep learning model",
    "Applied LIME for explainable AI to interpret model decisions",
    "Used SMOTE to mitigate class imbalance in the dataset",
    "Provided insights into both correct and incorrect model predictions",
    "Enhanced model transparency and reliability through XAI techniques",
    "Addressed real-world challenges in COVID-19 detection with AI",
    "Published research accepted at the International Conference on Innovations in Science, Engineering and Technology (ICISET 2024)",
    "Advanced AI applications for medical image analysis in Bangladesh"
  ],
  "image": "/images/projects/Vrfusenet/covid.png", // Update path as needed
  "github": "https://github.com/shuvashisofficial/A-Comprehensive-Analysis-of-COVID-19-Detection-Using-Bangladeshi-Data-and-Explainable-AI",
  "liveUrl": "",
  "featured": true
},

    {
  id: "genetic-mosaic",
  title: "Unveiling the Genetic Mosaic: A Multi Model Exploration of Rice Varietal Diversity",
  description: "A pattern recognition project exploring Turkish rice grain diversity using CNNs and transfer learning with 99.9% accuracy.",
  longDescription: "This pattern recognition project explores genetic diversity in Turkish rice varieties by analyzing over 75,000 grain images. Supervised by Dr. Faisal Muhammad Shah, it integrates machine learning models like Random Forest, Decision Trees, and SVMs, alongside deep learning models including VGG16, InceptionV3, and MobileNetV2. Achieving up to 99.9% classification accuracy, the project demonstrates AI's capabilities in agriculture through a hybrid approach combining traditional ML with transfer learning.",
  technologies: ["Python", "TensorFlow", "Keras", "Transfer Learning"],
  achievements: [
    "Processed 75,000+ grain images to analyze genetic diversity in Turkish rice",
    "Achieved up to 99.9% classification accuracy with CNNs and transfer learning models",
    "Combined traditional ML (Random Forest, SVM, PCA) and deep learning for robust prediction",
    "Supervised under a research-oriented academic framework for real-world agricultural application"
  ],
  image: "/images/projects/Vrfusenet/rice.png", // You can replace this with your actual image path
  github: "https://github.com/shuvashisofficial/Unveiling-the-Genetic-Mosaic-A-Multi-Model-Exploration-of-Rice-Diversity",
  liveUrl: "", // Leave empty or insert a Colab/Streamlit demo link if available
  featured: true
},
{
  id: "urban-analytics",
  title: "Advanced Data Analytics and Time Series Forecasting for NYC Taxi and Dhaka Accident Dataset",
  description: "Time series forecasting and geospatial analysis on NYC taxi and Dhaka accident data for urban safety and traffic insights.",
  longDescription: "This data analytics project analyzes the 2013 New York City Taxi Trips dataset and the 2019 Bangladesh Road Accident dataset to extract insights into urban mobility and road safety. By using advanced techniques like SARIMA/SARIMAX time series models, clustering, and geospatial analysis, the project uncovers seasonal taxi demand patterns, identifies high-risk accident zones, and reveals traffic trends. It offers data-driven recommendations for city planners to enhance traffic management, reduce congestion, and improve road safety in large cities like NYC and Dhaka.",
  technologies: ["Python", "SARIMA", "SARIMAX", "Data Analytics"],
  achievements: [
    "Analyzed over 2 major urban datasets for NYC and Dhaka accidents and mobility trends",
    "Applied SARIMA/SARIMAX models for accurate time series forecasting of taxi demand",
    "Performed geospatial and clustering analysis to identify accident hotspots and high-demand zones",
    "Delivered actionable insights for traffic policy and urban safety improvements"
  ],
  image: "/images/projects/Vrfusenet/data.png", // Replace with actual path or generate
  github: "https://github.com/SapphireFang1998/Advanced-Data-Analytics-and-Time-Series-Forecasting",
  liveUrl: "", // Add if hosted or available via Colab/Streamlit
  featured: true
},
{
  "id": "ancholik-ner",
  "title": "ANCHOLIK-NER: A Benchmark Dataset for Bangla Regional Named Entity Recognition",
  "description": "A linguistically diverse NER dataset developed for Bangla regional dialects, covering Sylhet, Chittagong, and Barishal.",
  "longDescription": "ANCHOLIK-NER is a high-quality, linguistically rich dataset tailored for Named Entity Recognition (NER) tasks in Bangla regional dialects. Covering Sylheti, Chittagonian, and Barishali language variations, the dataset comprises 10,443 sentences, with 3,481 sentences per region. Data was collected from public datasets and online news sources, and annotated using the BIO tagging scheme by regional language experts. The dataset contains ten NER classes: Person, Location, Organization, Food, Animal, Colour, Role, Relation, Object, and Miscellaneous. Each annotation is provided in CSV format with structured subsets for each region. This dataset supports the development of dialect-aware NLP systems in Bangla and is suitable for machine translation, information retrieval, and conversational AI in low-resource language settings.",
  "technologies": ["Natural Language Processing", "Named Entity Recognition", "Bangla Dialects"],
  "achievements": [
    "Compiled a benchmark NER dataset for three major Bangla regional dialects",
    "Collected and cleaned over 10,000 sentences from various public and online sources",
    "Used the BIO tagging scheme for accurate and standardized entity labeling",
    "Engaged professional annotators proficient in regional language variations",
    "Created ten distinct named entity categories to reflect cultural and linguistic diversity",
    "Released the dataset in CSV format with regional subsets for structured use",
    "Enabled research in dialect-sensitive NLP and regional language processing",
    "Enhanced support for Bangla conversational AI and machine translation tasks",
    "Made data publicly available via Mendeley Data for reproducible research",
    "Contributed to low-resource language technology with a focus on South Asia"
  ],
  "image": "/images/projects/Vrfusenet/ner.png", // Optional placeholder, update as needed
  "github": "https://github.com/shuvashisofficial/ANCHOLIK-NER-A-Benchmark-Dataset-for-Bangla-Regional-Named-Entity-Recognition",
  "liveUrl": "",
  "featured": true
},
{
  id: "dental-care",
  title: "Dental Care Appointment System",
  description: "A group project creating a dental appointment system using PHP, CSS, and JavaScript.",
  longDescription: "This project is a web-based Dental Appointment System developed as part of a Semester 3.1 group assignment. It allows users to schedule dental appointments through an intuitive interface built with PHP for backend processing, styled using CSS, and enhanced with JavaScript for dynamic user interactions. The system manages appointment bookings, stores contact information securely using SQL, and provides a streamlined workflow for dental clinics to handle patient appointments efficiently.",
  technologies: ["PHP", "CSS", "JavaScript", "SQL", "HTML"],
  achievements: [
    "Developed a functional appointment scheduling system with backend support",
    "Implemented user-friendly interfaces with responsive CSS styling",
    "Integrated SQL database for secure storage of appointment and contact data",
    "Enabled dynamic client-side interactions through JavaScript",
    "Designed form validation for accurate and secure data entry",
    "Implemented session management for user authentication and security",
    "Optimized code for faster load times and better user experience",
    "Collaborated effectively as a team, following project management best practices",
    "Tested and debugged across multiple browsers to ensure compatibility",
    "Prepared documentation for system usage and future development"
  ],
  image: "/images/projects/Vrfusenet/Dental Care.png", // Replace with actual path or generate
  github: "https://github.com/SapphireFang1998/Dental-Care",
  liveUrl: "", // Add live URL if available
  featured: true
},
{
  "id": "pharmacy-management",
  "title": "Hyacinth: Pharmacy Management System",
  "description": "A Java Swing and MySQL-based system to manage pharmacy operations including inventory, sales, purchases, and expiry tracking.",
  "longDescription": "This project is a desktop Pharmacy Management System developed as part of a group semester project. Built using Java Swing for the user interface and MySQL for the backend database, it automates key pharmacy functions such as inventory management, sales recording, purchase tracking, expiry date monitoring, and invoice generation. The system aims to reduce manual work, minimize errors, and improve operational efficiency in pharmacies by providing a streamlined and user-friendly interface for daily tasks.",
  "technologies": ["Java Swing", "MySQL", "Java"],
  "achievements": [
    "Developed a complete pharmacy inventory management module",
    "Implemented sales and purchase tracking with database integration",
    "Added expiry date monitoring to reduce stock wastage",
    "Created automated invoice generation for sales transactions",
    "Reduced manual data entry errors through validation and automation",
    "Designed an intuitive Java Swing UI for ease of use",
    "Ensured data persistence and integrity with MySQL backend",
    "Collaborated as a team to deliver a functional semester project",
    "Tested the system for usability and error handling",
    "Documented the system design and usage instructions"
  ],
  "image": "/images/projects/Vrfusenet/Hyacinth.png",  // You can update this path as needed
  "github": "https://github.com/shuvashisofficial/Hyacinth",
  "liveUrl": "", 
  "featured": true
},
{
  "id": "death-stalker",
  "title": "Death Stalker",
  "description": "A 2D Metroidvania-style game developed using C/C++ and iGraphics library.",
  "longDescription": "This project is a group Semester 1.2 assignment focused on creating a 2D Metroidvania-style game called Death Stalker. Developed using C and C++ with the iGraphics library, the game involves navigating a mystical world filled with obstacles and enemies. Key game development concepts implemented include sprite animation, collision detection, enemy AI, and level progression mechanics, showcasing comprehensive game programming skills.",
  "technologies": ["C", "C++", "iGraphics", "OpenGL"],
  "achievements": [
    "Designed and implemented 2D sprite animations for characters and enemies",
    "Developed collision detection system for player, enemies, and environment",
    "Programmed enemy AI and obstacle behaviors to enhance gameplay challenge",
    "Created multiple game levels with progressive difficulty",
    "Utilized iGraphics library to render game graphics efficiently",
    "Collaborated in a team environment to deliver a functional game project",
    "Tested gameplay mechanics to ensure smooth player experience",
    "Applied game design principles to balance difficulty and engagement",
    "Documented game features and development process",
    "Explored OpenGL-based rendering through iGraphics integration"
  ],
  "image": "/images/projects/Vrfusenet/Death Stalker.png", // Update path if needed
  "github": "https://github.com/shuvashisofficial/Death-Stalker",
  "liveUrl": "",
  "featured": true
},
{
  "id": "brain-mri-imbalance-bd",
  "title": "Brain MRI Classification on the Context of Imbalanced Data of Bangladeshi Sample",
  "description": "A deep learning approach for classifying brain MRI data using CNN with SMOTE to handle class imbalance in Bangladeshi medical datasets.",
  "longDescription": "This project presents a deep learning pipeline for classifying brain MRI images, specifically focusing on the challenge of class imbalance in Bangladeshi clinical datasets. The approach combines a Convolutional Neural Network (CNN) for image classification with the Synthetic Minority Over-sampling Technique (SMOTE) to balance the dataset. The CNN model is trained to distinguish between different brain tumor types or normal cases, and the application of SMOTE enhances the generalization ability by oversampling underrepresented classes. This model can serve as a foundation for AI-driven diagnostic systems in resource-constrained medical environments, ensuring fair and accurate classification across diverse patient samples.",
  "technologies": ["Python", "Deep Learning"],
  "achievements": [
    "Developed a CNN model to classify brain MRI images from a Bangladeshi dataset",
    "Applied SMOTE to effectively address class imbalance in medical image data",
    "Improved classification accuracy on underrepresented tumor categories",
    "Used Jupyter Notebooks to modularize and demonstrate SMOTE and CNN workflows",
    "Enhanced the model’s robustness and generalization through data augmentation",
    "Promoted fairness in AI-based healthcare diagnostics for imbalanced datasets",
    "Demonstrated a low-resource medical AI application relevant to regional data",
    "Documented methodology and code for reproducibility and further research",
    "Enabled future integration into hospital-grade automated diagnostic systems"
  ],
  "image": "/images/projects/Vrfusenet/brain1.png",  // Replace or update this path
  "github": "https://github.com/shuvashisofficial/Brain-MRI-Classification-on-the-Context-of-Imbalanced-Data-of-Bangladeshi-Sample",
  "liveUrl": "",
  "featured": true
},
{
  "id": "brain-mri-classification-bd",
  "title": "Brain MRI Classification on the Context of Imbalanced Data of Bangladeshi Sample",
  "description": "CNN-based classification model addressing class imbalance in Bangladeshi brain MRI datasets using SMOTE.",
  "longDescription": "This project focuses on applying deep learning techniques to classify brain MRI images from Bangladeshi samples, addressing the critical issue of class imbalance. The approach combines a Convolutional Neural Network (CNN) with the Synthetic Minority Over-sampling Technique (SMOTE) to ensure balanced model training across underrepresented tumor classes. Implemented entirely in Jupyter Notebooks, this pipeline demonstrates how data augmentation and neural architectures can enhance diagnostic performance, especially when working with low-resource, skewed datasets. The solution aims to improve fairness and accuracy in automated medical imaging diagnostics and contributes toward equitable AI in healthcare.",
  "technologies": ["Python"],
  "achievements": [
    "Built a CNN classifier for brain MRI tumor categorization on Bangladeshi medical data",
    "Applied SMOTE to mitigate effects of class imbalance in minority tumor categories",
    "Improved classification accuracy across skewed datasets",
    "Used Jupyter Notebook for modular, reproducible machine learning pipeline",
    "Enabled more equitable diagnostic performance across patient classes",
    "Documented and released open-source code for further research in medical AI",
    "Demonstrated a practical use case for CNNs in low-resource healthcare settings",
    "Contributed to machine learning research focused on Bangladeshi medical imaging data"
  ],
  "image": "/images/projects/Vrfusenet/brain 2.png", // Update if needed
  "github": "https://github.com/shuvashisofficial/Brain-MRI-Classification-on-the-Context-of-Imbalanced-Data-of-Bangladeshi-Sample",
  "liveUrl": "",
  "featured": true
},

{
  "id": "diabetes-prediction-ml",
  "title": "Diabetes Prediction using Machine Learning",
  "description": "A machine learning model that predicts the likelihood of diabetes using health and lifestyle data.",
  "longDescription": "This project focuses on the prediction of diabetes using various supervised machine learning algorithms. Built in a Google Colab Jupyter Notebook environment, the model is trained on a dataset containing health metrics such as glucose levels, blood pressure, BMI, and more. The pipeline includes data preprocessing, training multiple classifiers (including Logistic Regression, Random Forest, SVM, KNN, GaussianNB, and XGBoost), and evaluating model performance using accuracy, F1-score, ROC AUC, and precision-recall metrics. The goal is to identify high-risk individuals and assist in early diagnosis through interpretable and accurate predictions.",
  "technologies": ["Python", "Machine Learning", "Pandas"],
  "achievements": [
    "Preprocessed health-related data and handled missing values",
    "Trained multiple ML models including Logistic Regression, SVM, Random Forest, and XGBoost",
    "Achieved high classification accuracy and ROC AUC on test datasets",
    "Used evaluation metrics like F1-score, confusion matrix, and precision-recall curves",
    "Visualized results using Matplotlib and confusion matrix display tools",
    "Implemented cross-validation and parameter tuning for model optimization",
    "Integrated data loading directly from Google Drive for ease of use",
    "Contributed to healthcare analytics with a predictive AI solution for diabetes risk"
  ],
  "image": "/images/projects/Vrfusenet/diabetis.png", // Optional placeholder path
  "github": "https://github.com/shuvashisofficial/Artificial-intelligence-LAB-PROJECT/blob/main/Diabetes_Predication.ipynb",
  "liveUrl": "",
  "featured": true
},
{
  "id": "heart-disease-nn",
  "title": "Heart Disease Prediction using Neural Networks",
  "description": "A neural network model built using Keras and TensorFlow to predict the presence of heart disease based on clinical data.",
  "longDescription": "This project leverages neural network-based deep learning models to predict heart disease using clinical data from the Cleveland Clinic dataset. Implemented in Python using TensorFlow and Keras, the notebook performs data loading, preprocessing, model building, training, and evaluation. Key features used for prediction include age, sex, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, and ECG results. The network is trained using multiple layers to optimize prediction accuracy and help in early detection of heart-related conditions. This AI application aims to support medical professionals by automating risk classification and contributing to preventive cardiology.",
  "technologies": ["Python", "TensorFlow", "Keras", "Pandas", "Machine Learning", "Deep Learning"],
  "achievements": [
    "Built a deep learning model using TensorFlow backend and Keras layers",
    "Used Cleveland Clinic heart disease dataset for training and validation",
    "Applied standard preprocessing techniques including normalization and label encoding",
    "Trained and evaluated model performance using accuracy and loss metrics",
    "Visualized model behavior using Matplotlib and performance curves",
    "Predicted heart disease likelihood using neural network classification",
    "Explored key health indicators such as cholesterol, ECG, and resting heart rate",
    "Demonstrated real-world clinical application of deep learning in cardiology"
  ],
  "image": "/images/projects/Vrfusenet/heart.png", // Optional placeholder
  "github": "https://github.com/shuvashisofficial/Artificial-intelligence-LAB-PROJECT/blob/main/Heart_Disease_Prediction_with_Neural_Networks.ipynb",
  "liveUrl": "",
  "featured": true
},
{
  "id": "lung-cancer-ml",
  "title": "Lung Cancer Prediction using Machine Learning",
  "description": "A machine learning pipeline for predicting lung cancer from clinical and lifestyle data using various classification models.",
  "longDescription": "This project implements a robust machine learning system to predict lung cancer based on lifestyle and medical indicators. It uses a dataset with 16 features such as smoking habits, anxiety, wheezing, alcohol consumption, and gender. After preprocessing and encoding the categorical data, the dataset is split into training and test sets. The models used include Logistic Regression, SVM, GaussianNB, K-Nearest Neighbors, Random Forest, and Decision Tree Classifier. Each model is evaluated using accuracy, F1-score, precision, recall, confusion matrix, and ROC curves. The notebook also includes data visualization for class distribution and gender patterns. This predictive tool can assist in early-stage screening and risk assessment for lung cancer.",
  "technologies": ["Python", "Machine Learning"],
  "achievements": [
    "Collected and loaded lung cancer dataset from Google Drive into Colab",
    "Performed data preprocessing, feature selection, and label encoding",
    "Used multiple ML models (Logistic Regression, SVM, RF, etc.) for prediction",
    "Evaluated models using confusion matrix, ROC curves, and performance scores",
    "Visualized class distribution and gender-based prediction trends",
    "Applied standard model evaluation metrics including accuracy and F1-score",
    "Showcased results with detailed performance plots for all classifiers",
    "Demonstrated feasibility of low-cost screening using lifestyle and symptom data"
  ],
  "image": "/images/projects/Vrfusenet/lung.png", // You may replace this
  "github": "https://github.com/shuvashisofficial/Artificial-intelligence-LAB-PROJECT/blob/main/LungCancerMLProject.ipynb",
  "liveUrl": "",
  "featured": true
},
{
  "id": "heart-disease-ml-colab",
  "title": "Heart Disease Prediction using Machine Learning",
  "description": "An AI-powered system for predicting heart disease from patient health indicators using various machine learning models.",
  "longDescription": "This project presents a comprehensive machine learning pipeline designed to predict heart disease using a dataset containing 735 training samples and 183 test records. The dataset includes key health features such as age, sex, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, ECG results, maximum heart rate, exercise-induced angina, ST depression, and ST slope. All categorical features were label encoded for numerical compatibility. Multiple classification models were trained and evaluated, including Logistic Regression, Support Vector Machine (SVM), Gaussian Naive Bayes, K-Nearest Neighbors, Random Forest, and Decision Tree. Models were assessed using accuracy, F1-score, precision, recall, and ROC curves, with the SVM and Random Forest classifiers achieving the highest performance. This AI model aims to assist in the early detection of cardiovascular risks, particularly in digital health tools or clinical decision support systems.",
  "technologies": [
    "Python", "Pandas", "Machine Learning", "Data Preprocessing"
  ],
  "achievements": [
    "Used a comprehensive dataset containing demographic and clinical features to train ML models",
    "Preprocessed data by encoding categorical variables and splitting into train/test sets",
    "Built and evaluated six classifiers including Logistic Regression, SVM, and Random Forest",
    "Achieved highest accuracy of ~89.6% using Random Forest and SVM models",
    "Plotted ROC curves and confusion matrices for all models",
    "Visualized gender and class distribution to detect imbalance",
    "Addressed convergence issues in Logistic Regression by tuning hyperparameters",
    "Integrated Google Drive for seamless dataset access within Colab"
  ],
  "image": "/images/projects/Vrfusenet/heart1.png",  // You can replace with the generated image
  "github": "https://github.com/shuvashisofficial/Artificial-intelligence-LAB-PROJECT/blob/main/Heart_Prediction_Final.ipynb",  // update this if needed
  "liveUrl": "",
  "featured": true
},
{
  "id": "stroke-prediction-ml-colab",
  "title": "Stroke Prediction using Machine Learning",
  "description": "A machine learning project that predicts stroke from patient records using various classification models, with performance comparison before and after handling class imbalance.",
  "longDescription": "This project analyzes stroke prediction using the 'Healthcare-Dataset-Stroke-Data.csv' dataset in Google Colab. It begins with exploratory data analysis and visualization to understand correlations between features like age, BMI, glucose levels, and stroke incidence. After handling missing BMI values and encoding categorical data, several machine learning models were trained—including Logistic Regression, SVM, Naive Bayes, KNN, Random Forest, and Decision Tree—on the original imbalanced dataset. Metrics like accuracy, F1-score, precision, recall, confusion matrix, and ROC curves were used for evaluation. To address the severe imbalance in stroke cases, Random Over Sampling was applied, and the models were retrained. A comparative analysis before and after balancing showcases the impact of data imbalance on prediction accuracy and recall, especially for minority classes.",
  "technologies": [
    "Python", "Pandas", "Machine Learning"
  ],
  "achievements": [
    "Explored healthcare dataset with 5,110 entries across 11 health-related features",
    "Performed EDA with bar plots, countplots, and correlation heatmaps to understand class and feature distributions",
    "Encoded categorical variables and handled missing BMI values",
    "Trained 6 machine learning models: Logistic Regression, SVM, Naive Bayes, KNN, Random Forest, Decision Tree",
    "Evaluated model performance using F1-score, precision, recall, accuracy, and ROC curves",
    "Observed very low recall on stroke-positive class due to heavy class imbalance",
    "Applied RandomOverSampler from imbalanced-learn to balance stroke cases 1:1",
    "Improved recall and F1 scores on positive class after balancing the dataset",
    "Integrated Google Drive for dataset access in Colab"
  ],
  "image": "/images/projects/Vrfusenet/stroke.png",  // Replace with actual path to generated stroke image
  "github": "https://github.com/shuvashisofficial/Artificial-intelligence-LAB-PROJECT/blob/main/Stroke%20Prediction.ipynb",
  "liveUrl": "",
  "featured": true
}





];