// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'C-Bhargava', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['C-Bhargava/portfolio','C-Bhargava/C-Bhargava'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['C-Bhargava/PostgreSQL_SF_BankingData', 'C-Bhargava/MongoDB_SF_InsuranceData','C-Bhargava/GNN-CommunityandPolarizationDetector','C-Bhargava/Barca-Analysis-tableau'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Work in Progress',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
        title: 'Information Systems Consultation for College Park City - University Partnership',
        description: 'Designing and Developing an end-to-end integrated portal for Graduate Student Rental Program, helping the non-profit move away from manual processing of applications.',
        link: 'https://communitypreservationtrust.org/to-be-updated-pages/',
        },
        {
          title: 'Snowpro Core Certification',
          description: 'In progress',
        }
      ],
    },
  },
  seo: { title: 'Portfolio of Chaitanya Bhargava', description: '', imageURL: '' },
  social: {
    linkedin: 'chaitanyab99',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'chaitanb@umd.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/C-Bhargava/C-Bhargava/blob/main/Chaitanya%20Bhargava%20-%20Resume%20-%20DE.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'Python',
    'Snowflake',
    'PySpark',
    'Tableau',
    'Power BI',
    'Vertica',
    'Teradata',
    'Informatica',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Neo4J',
    'Git',
    'Docker',
    'AWS',
    'MS Azure',
    'GCP',
    'MS Office',
    'Kafka',
    'dbt',
    'Java',
    'Flask',
    'HTML',
    'CSS'
  ],
  experiences: [
    {
      company: 'Amdocs',
      position: 'Data Engineer',
      from: 'June 2021',
      to: 'July 2024',
      companyLink: 'https://www.amdocs.com',
    },
    {
      company: 'CGI Information Systems and Management Consultants Pvt. Ltd.',
      position: 'Summer Intern',
      from: 'June 2019',
      to: 'July 2019',
      companyLink: 'https://www.cgi.com/en',
    },
  ],
  certifications: [
    {
      name: 'Snowflake Essentials Data Warehousing Badge',
      body: 'Snowflake',
      year: 'December 2021',
      link: 'https://www.credly.com/badges/11418a59-de94-4465-8525-332906acdfc9?source=linked_in_profile',
    },
    {
      name: 'Python for Data Science',
      body: 'IBM',
      year: 'October 2023',
      link: 'https://courses.cognitiveclass.ai/certificates/d1909e40a57145c2b097ba75e7c669cd',
    },
    {
      name: 'Database Management Systems',
      body: 'NPTEL',
      year: 'September 2019',
      link: '',
    }
  ],
  educations: [
    {
      institution: 'University of Maryland, Robert H. Smith School of Business',
      degree: 'MS in Information Systems',
      from: '2024',
      to: '2025',
    },
    {
      institution: 'SRM Institute of Science and Technology, Chennai (India)',
      degree: 'B.Tech in Computer Science and Engineering',
      from: '2017',
      to: '2021',
    },
  ],
  publications: [
    {
      title: 'Depression Detection using Sentiment Analysis of Tweets',
      conferenceName: 'INTERNATIONAL CONFERENCE ON CONTEMPORARY ENGINEERING AND TECHNOLOGY',
      journalName: 'Turkish Journal of Computer and Mathematics Education(TURCOMAT)',
      authors: 'Chaitanya Bhargava, Shivam Mahur',
      link: 'https://turcomat.org/index.php/turkbilmat/article/view/6770/5585',
      description:
        'Rule  based  Vader  Analyzer  and a  hybrid  model  of  CNN-LSTM used on tweets scraped from Twitter to classify them as having depressive traits or not. This study attempts to maximize the utilization of all the available  linguisticfeatures present  in  the  tweets  and  makes  use of  proper  cleaning  and  pre-processing techniques  for  more accurate  diagnosis  of  depression.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
