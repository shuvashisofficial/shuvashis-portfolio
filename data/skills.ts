// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Frameworks/Libraries' 
  | 'Machine Learning & Deep Learning' 
  | 'Concepts';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Can be Lucide key or image path
}


export const skills: Record<SkillCategory, Skill[]> = {
  // 'Languages': [
  //   { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
  //   { name: 'Java', category: 'Languages', logoKey: 'java' },
  //   { name: 'Python', category: 'Languages', logoKey: 'python' },
  //   { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
  //   { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
  //   { name: 'Dart', category: 'Languages', logoKey: 'dart' },
  //   { name: 'Kotlin', category: 'Languages', logoKey: 'kotlin' },
  //   { name: 'Solidity', category: 'Languages', logoKey: 'solidity' },
  //   { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
  //   { name: 'Rust', category: 'Languages', logoKey: 'rust' },
  //   { name: 'Go', category: 'Languages', logoKey: 'go' },
  //   { name: 'Ruby', category: 'Languages', logoKey: 'ruby' },
  //   { name: 'Swift', category: 'Languages', logoKey: 'swift' },
  // ],
  // 'Frameworks/Libraries': [
  //   { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
  //   { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
  //   { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
  //   { name: 'Flask', category: 'Frameworks/Libraries', logoKey: 'flask' },
  //   { name: 'Express.js', category: 'Frameworks/Libraries', logoKey: 'express' },
  //   { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
  //   { name: 'Android SDK', category: 'Frameworks/Libraries', logoKey: 'android' },
  //   { name: 'Three.js', category: 'Frameworks/Libraries', logoKey: 'threejs' },
  //   { name: 'Vue.js', category: 'Frameworks/Libraries', logoKey: 'vuejs' },
  //   { name: 'Angular', category: 'Frameworks/Libraries', logoKey: 'angularjs' },
  //   { name: 'Svelte', category: 'Frameworks/Libraries', logoKey: 'svelte' },
  //   { name: 'Django', category: 'Frameworks/Libraries', logoKey: 'django' },
  //   { name: 'Spring Boot', category: 'Frameworks/Libraries', logoKey: 'spring' },
  //   { name: 'Flutter', category: 'Frameworks/Libraries', logoKey: 'flutter' },
  //   { name: 'React Native', category: 'Frameworks/Libraries', logoKey: 'react' },
  // ],
'Machine Learning & Deep Learning': [
  { name: 'TensorFlow', category: 'Machine Learning & Deep Learning', logoKey: 'tensorflow' },
  { name: 'Keras', category: 'Machine Learning & Deep Learning', logoKey: 'keras' },
  { name: 'PyTorch', category: 'Machine Learning & Deep Learning', logoKey: 'pytorch' },
  { name: 'Scikit-learn', category: 'Machine Learning & Deep Learning', logoKey: '/logos/1.png' },
  { name: 'Pandas', category: 'Machine Learning & Deep Learning', logoKey: 'pandas' },
  { name: 'NumPy', category: 'Machine Learning & Deep Learning', logoKey: 'numpy' },
  { name: 'Matplotlib', category: 'Machine Learning & Deep Learning', logoKey: 'matplotlib' },
  { name: 'Seaborn', category: 'Machine Learning & Deep Learning', logoKey: '/logos/2.png' },
  { name: 'OpenCV', category: 'Machine Learning & Deep Learning', logoKey: 'opencv' },
  { name: 'Explainable AI', category: 'Machine Learning & Deep Learning', logoKey: '/logos/3.png' },
  { name: 'Hugging Face Transformers', category: 'Machine Learning & Deep Learning', logoKey: '/logos/5.png' },
  { name: 'Transfer Learning', category: 'Machine Learning & Deep Learning', logoKey: '/logos/10321704.png' },
  { name: 'CNN', category: 'Machine Learning & Deep Learning', logoKey: '/logos/4.png' },
  { name: 'Vision Transformers (ViT)', category: 'Machine Learning & Deep Learning', logoKey: '/logos/6.png' },
  { name: 'Statsmodels', category: 'Machine Learning & Deep Learning', logoKey: '/logos/7.svg' },
  { name: 'SARIMA / ARIMA', category: 'Machine Learning & Deep Learning', logoKey: '/logos/8.png' },
  { name: 'YOLO', category: 'Machine Learning & Deep Learning', logoKey: '/logos/9.png' }
],
'Languages': [
  { name: 'C', category: 'Languages', logoKey: 'c' },
  { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
  { name: 'C#', category: 'Languages', logoKey: 'csharp' },
  { name: 'Java', category: 'Languages', logoKey: 'java' },
  { name: 'Kotlin', category: 'Languages', logoKey: 'kotlin' },
  { name: 'Python', category: 'Languages', logoKey: 'python' },
  { name: 'PHP', category: 'Languages', logoKey: 'php' },
  { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
  { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
  { name: 'HTML', category: 'Languages', logoKey: '/logos/11.png' },
  { name: 'CSS', category: 'Languages', logoKey: '/logos/12.png' },
  { name: 'Bootstrap', category: 'Languages', logoKey: 'bootstrap' },
  { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
  { name: 'MySQL', category: 'Languages', logoKey: 'mysql' },
  { name: 'LaTeX', category: 'Languages', logoKey: '/logos/latex.png' },
],

'Frameworks/Libraries': [
  { name: 'Keras', category: 'Frameworks/Libraries', logoKey: 'keras' },
  { name: 'TensorFlow', category: 'Frameworks/Libraries', logoKey: 'tensorflow' },
  { name: 'PyTorch', category: 'Frameworks/Libraries', logoKey: 'pytorch' },
  { name: 'Scikit-learn', category: 'Frameworks/Libraries', logoKey: '/logos/1.png' },
  { name: 'OpenCV', category: 'Frameworks/Libraries', logoKey: 'opencv' },
  { name: 'Android SDK', category: 'Frameworks/Libraries', logoKey: 'android' },
  { name: 'JavaFX', category: 'Frameworks/Libraries', logoKey: '/logos/13.png' },
  { name: 'iGraphics', category: 'Frameworks/Libraries', logoKey: '/logos/14.png' },
  { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: '/logos/15.png' },
  { name: 'Bootstrap', category: 'Frameworks/Libraries', logoKey: 'bootstrap' },
  { name: 'Flask', category: 'Frameworks/Libraries', logoKey: 'flask' },
  { name: 'FastAPI', category: 'Frameworks/Libraries', logoKey: 'fastapi' },
],

'Concepts': [
  { name: 'Algorithms', category: 'Concepts', logoKey: '/logos/16.png' },
  { name: 'Digital Logic Design', category: 'Concepts', logoKey: '/logos/28.png' },
   { name: 'Research Methodology', category: 'Concepts', logoKey: '/logos/17.png' },
  { name: 'System Design', category: 'Concepts', logoKey: '/logos/18.png'},
  { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },
  { name: 'Machine Learning Concepts', category: 'Concepts', logoKey: '/logos/19.png' },
  { name: 'Deep Learning Concepts', category: 'Concepts', logoKey: '/logos/20.png' },
  { name: 'Explainable AI (XAI)', category: 'Concepts', logoKey: '/logos/21.png' },
  { name: 'Transfer Learning', category: 'Concepts', logoKey: '/logos/10321704.png' },
  { name: 'Computer Vision', category: 'Concepts', logoKey: '/logos/22.png' },
  { name: 'Natural Language Processing', category: 'Concepts', logoKey: '/logos/23.png' },
  { name: 'Signal Processing', category: 'Concepts', logoKey: '/logos/24.png' },
  { name: 'Distributed Systems', category: 'Concepts', logoKey: '/logos/25.png' },
  { name: 'Microservices', category: 'Concepts', logoKey: 'docker' },
  { name: 'Healthcare AI Applications', category: 'Concepts', logoKey: '/logos/27.png' }
]

};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};