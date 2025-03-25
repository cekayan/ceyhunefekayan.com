export const profile = {
  fullName: 'Ceyhun E. Kayan',
  title: 'Graduate Student',
  institute: 'Drexel University',
  author_name: 'CE Kayan', // Author name to be highlighted in the papers section
  research_areas: [
     { title: 'Computational Biology', description: 'Modeling protein-protein dynamics, predicting treatment responses and multi-omics data integration.', field: 'bio' },
     { title: 'Language Models', description: 'Enhancing reasoning performance of Language Models and entropy-oriented sampling.', field: 'lm' },
     { title: 'Machine Intelligence', description: 'Developing neuroscience and cognitive science inspired models for more humanistic machine intelligence.', field: 'mi' },
  ],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: 'cekayan.tech@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cekayan',
  x: 'https://x.com/cekayan',
  github: 'https://github.com/cekayan',
  gitlab: '',
  scholar: 'https://scholar.google.com/citations?user=dT5jOoUAAAAJ&hl=en',
  inspire: '',
  arxiv: '',
};

export const template = {
  website_url: 'https://ceyhunefekayan.com', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
  darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
  excerptLength: 200,
  postPerPage: 5,
  base: '', // Repository name starting with /
};

export const seo = {
  default_title: 'Ceyhun Efe Kayan',
  default_description: 'Ceyhun Efe Kayan',
  default_image: '/images/astro-academia.png',
};
