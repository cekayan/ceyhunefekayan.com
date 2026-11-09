// All site content lives in this file. Edit here; pages pick it up automatically.

export const site = {
  name: 'Ceyhun Efe Kayan',
  // Canonical domain. The other domain should redirect here at the DNS/host level.
  url: 'https://cekayan.com',
  description:
    'Ceyhun Efe Kayan is a Ph.D. student at Drexel University working on mechanistic interpretability of large language models.',
  role: 'Ph.D. Student, Computer Science',
  affiliation: 'Drexel University',
  cvPdf: '/Ceyhun_Efe_Kayan_CV.pdf',
};

export const links = {
  email: 'cek99@drexel.edu',
  scholar: 'https://scholar.google.com/citations?user=dT5jOoUAAAAJ&hl=en',
  github: 'https://github.com/cekayan',
  linkedin: 'https://www.linkedin.com/in/cekayan',
  x: 'https://x.com/cekayan',
};

export const advisor = {
  name: 'Li "Harry" Zhang',
  url: 'https://zharry29.github.io/',
};

// Newest first. Keep entries to one line.
export type NewsItem = { date: string; text: string };
export const news: NewsItem[] = [
  {
    date: 'Sep 2026',
    text: '<em>Prototype-Based Dynamic Steering for Large Language Models</em> accepted to the EMNLP 2026 Main Conference.',
  },
  {
    date: 'Aug 2026',
    text: '<em>A Reality Check of Language Models as Formalizers on Constraint Satisfaction Problems</em> selected as a spotlight at the COLM 2026 Workshop on Efficient Reasoning.',
  },
  {
    date: 'Jun 2026',
    text: 'Started a Research Scientist Internship at IBM Silicon Valley Lab, San Jose.',
  },
  {
    date: 'Sep 2025',
    text: 'Started my Ph.D. in Computer Science at Drexel University.',
  },
];

// Your name is bolded automatically. Mark equal contribution with a trailing *.
export type Publication = {
  title: string;
  authors: string[];
  venue?: string;
  year: number;
  note?: string; // e.g. "Spotlight"
  selected?: boolean; // shown on the home page
  links: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    title: 'Prototype-Based Dynamic Steering for Large Language Models',
    authors: ['Ceyhun Efe Kayan', 'Li Zhang'],
    venue: 'EMNLP 2026 (Main Conference)',
    year: 2026,
    selected: true,
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2510.05498' }],
  },
  {
    title:
      'A Reality Check of Language Models as Formalizers on Constraint Satisfaction Problems',
    authors: [
      'Rikhil Amonkar*',
      'Ceyhun Efe Kayan*',
      'Qimei Lai',
      'Ronan Le Bras',
      'Li Zhang',
    ],
    venue: 'COLM 2026 Workshop on Efficient Reasoning',
    year: 2026,
    note: 'Spotlight',
    selected: true,
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2505.13252' }],
  },
  {
    title:
      'GPU-Accelerated Simulated Oscillator Ising/Potts Machine Solving Combinatorial Optimization Problems',
    authors: [
      'Yilmaz Ege Gonul',
      'Ceyhun Efe Kayan',
      'Ilknur Mustafazade',
      'Nagarajan Kandasamy',
      'Baris Taskin',
    ],
    venue: 'Great Lakes Symposium on VLSI (GLSVLSI)',
    year: 2025,
    links: [{ label: 'DOI', url: 'https://doi.org/10.1145/3716368.3735247' }],
  },
  {
    title:
      'Intensity and Phase Stacked Analysis of a Φ-OTDR System Using Deep Transfer Learning and Recurrent Neural Networks',
    authors: ['Ceyhun Efe Kayan', 'Kivilcim Yuksel Aldogan', 'Abdurrahman Gumus'],
    venue: 'Applied Optics 62(7)',
    year: 2023,
    selected: true,
    links: [
      { label: 'Paper', url: 'https://opg.optica.org/ao/abstract.cfm?URI=ao-62-7-1753' },
      { label: 'DOI', url: 'https://doi.org/10.1364/AO.481757' },
    ],
  },
  {
    title:
      'Energy and Temperature Analysis of AI/Machine Learning Algorithms on Different Hardware Systems',
    authors: [
      'Vedant Karia',
      'Murat Isik',
      'A. Daram',
      'Ceyhun Efe Kayan',
      'Baris Taskin',
      'Dhireesha Kudithipudi',
      'Sadasivan Shankar',
    ],
    year: 2023,
    links: [],
  },
  {
    title:
      'Adaptive Resizer-Based Transfer Learning Framework for the Diagnosis of Breast Cancer Using Histopathology Images',
    authors: ['Okan Duzyel', 'Mehmet Sergen Catal', 'Ceyhun Efe Kayan', 'Arda Sevinc', 'Abdurrahman Gumus'],
    venue: 'Signal, Image and Video Processing 17(8)',
    year: 2023,
    links: [
      { label: 'Paper', url: 'https://link.springer.com/article/10.1007/s11760-023-02692-y' },
    ],
  },
  {
    title:
      'Deep Reproductive Feature Generation Framework for the Diagnosis of COVID-19 and Viral Pneumonia Using Chest X-ray Images',
    authors: ['Ceyhun Efe Kayan', 'Talha Enes Koksal', 'Arda Sevinc', 'Abdurrahman Gumus'],
    venue: 'arXiv preprint',
    year: 2023,
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2304.10677' }],
  },
];

export type CvEntry = {
  dates: string;
  title: string;
  org: string;
  details?: string[];
};

export const education: CvEntry[] = [
  {
    dates: '2025 – present',
    title: 'Ph.D. in Computer Science',
    org: 'Drexel University, Philadelphia, PA',
    details: ['Focus: mechanistic interpretability of LLM planners and formalizers.'],
  },
  {
    dates: '2022 – 2025',
    title: 'M.S. in Machine Learning Engineering',
    org: 'Drexel University, Philadelphia, PA',
    details: [
      'Coursework: Statistics and Probability, Applied NLP, Reinforcement Learning, Convex Optimization.',
    ],
  },
  {
    dates: '2018 – 2022',
    title: 'B.S. in Electrical and Electronics Engineering',
    org: 'Izmir Institute of Technology, Izmir, Turkey',
    details: ['GPA 3.76 · Department Valedictorian.'],
  },
];

export const experience: CvEntry[] = [
  {
    dates: 'Jun – Sep 2026',
    title: 'Research Scientist Intern',
    org: 'IBM, Silicon Valley Lab, San Jose, CA',
    details: [
      'Built a router for a chat-completion endpoint driven by LLM activations that outperformed large general-purpose models in accuracy (4.9–7.1%) across a broad multi-benchmark suite while requiring fewer FLOPs. Paper submitted.',
    ],
  },
  {
    dates: 'Sep 2025 – present',
    title: 'Graduate Researcher',
    org: 'HAZ Lab, Drexel University',
    details: [
      'Applying and developing activation steering techniques to probe and improve how LLMs reason, plan, and formalize in constraint-satisfaction and MDP-style tasks; developed a prototype-based dynamic steering method for reasoning (EMNLP 2026).',
      'Co-first author of a systematic evaluation of LLMs as formalizers versus end-to-end solvers on real-life constraint satisfaction problems, spanning 4 domains, 6 LLMs, and 2 formal languages (COLM 2026 workshop, spotlight).',
    ],
  },
  {
    dates: 'Jun 2021 – Jul 2022',
    title: 'Undergraduate Researcher',
    org: 'MIRALAB, Izmir Institute of Technology',
    details: [
      'Integrated pre-trained CNNs with LSTMs for event classification in Φ-OTDR fiber-optic sensing systems.',
      'Developed an adaptive resizer-based transfer learning framework for breast cancer detection from histopathology images.',
      'Combined CNNs and autoencoders for diagnosis of COVID-19 and viral pneumonia from chest X-rays.',
    ],
  },
];
