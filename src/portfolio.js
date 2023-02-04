/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hans FZ Portfolio",
  description:
    "A data-driven enthusiast who transforms data into valuable insights, delivering impactful solutions to complex business challenges through innovative and scalable end-to-end approaches.",
  og: {
    title: "Hans FZ Lorenzana Portfolio",
    type: "website",
    url: "http://hansfzlorenzana.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Hans FZ Lorenzana",
  logo_name: "Hans FZ Lorenzana",
  nickname: "Zoren_X",
  subTitle:
    "A data-driven individual who transforms data into valuable insights, delivering impactful solutions to complex business challenges through innovative and scalable end-to-end approaches.",
  resumeLink:
    "https://drive.google.com/file/d/1xZ6OcYN6hG6r_5LZSN6XZJJCwUsQrQAB/view?usp=sharing",
  portfolio_repository: "https://github.io/hansfzlorenzana/myPortfolio",
  githubProfile: "https://github.io/hansfzlorenzana",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.io/hansfzlorenzana",
  // linkedin: "https://www.linkedin.com/in/hansfzlorenzana/",
  // gmail: "hansfzlorenzana@gmail.com",
  // gitlab: "",
  // facebook: "https://www.facebook.com/hansfzlorenzana/",
  // twitter: "https://twitter.com/ZorenX_Official",
  // instagram: "https://www.instagram.com/hansfzlorenzana"

  {
    name: "Github",
    link: "https://github.io/hansfzlorenzana",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hansfzlorenzana/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@zorenlorenzana1262",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:hansfzlorenzana@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ZorenX_Official",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/hansfzlorenzana/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hansfzlorenzana/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Medium",
    link: "https://medium.com/@zorenx/",
    fontAwesomeIcon: "fa-brands fa-medium", // Reference https://fontawesome.com/icons/medium?s=&f=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=medium
  },
];

const skills = {
  data: [
    {
      title: "Data Analytics",
      fileName: "DataAnalyticsImg",
      skills: [
        "⚡ Gathering, cleaning, and preprocessing data from various sources to ensure its quality and suitability for analysis",
        "⚡ Hands-on experience in analyzing and extracting insights from visual and text data ",
        "⚡ Application of statistical methods to identify patterns, relationships, and trends in data, providing insights and supporting decision making",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "carbon:logo-r-script",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#4479A1",
          },
        },
        {
          skillName: "MS Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
            color: "#217346",
          },
        },
        {
          skillName: "Google Sheets",
          fontAwesomeClassname: "arcticons:google-sheets",
          style: {
            backgroundColor: "transparent",
            color: "#34A853",
          },
        },
        {
          skillName: "Google BigQuery",
          fontAwesomeClassname: "tabler:brand-google-big-query",
          style: {
            backgroundColor: "transparent",
            color: "#4285F4",
          },
        },
        {
          skillName: "Google Data Studio",
          fontAwesomeClassname: "logos:google-data-studio",
          style: {
            backgroundColor: "transparent",
            color: "#4285F4",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            backgroundColor: "transparent",
            color: "#E97627",
          },
        },
        {
          skillName: "Looker",
          fontAwesomeClassname: "logos:looker-icon",
          style: {
            backgroundColor: "transparent",
            color: "#4285F4",
          },
        },
        {
          skillName: "MS Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
            color: "#F2C811",
          },
        },
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#F37626",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
            color: "#FF6F00",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos:opencv",
          style: {
            backgroundColor: "transparent",
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Google Colab",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: {
            backgroundColor: "transparent",
            color: "#F9AB00",
          },
        },
        {
          skillName: "Mediapipe",
          fontAwesomeClassname: "material-symbols:mp",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Blockchain and Web3",
      fileName: "BlockchainImg",
      skills: [
        "⚡ Developing and deploying DApps on different blockchain platforms",
        "⚡ Running nodes and validating networks",
        "⚡ Analyzing deep and granular blockchain data",
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
          style: {
            color: "#363636",
          },
        },
        {
          skillName: "Dune Analytics",
          fontAwesomeClassname: "simple-icons:d",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "Covalent Increment",
          fontAwesomeClassname: "mdi:alpha-c-box",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Web3 API",
          fontAwesomeClassname: "logos:web3js",
          style: {
            color: "#F16822",
          },
        },
        // {
        //   skillName: "Chainstack",
        //   fontAwesomeClassname: "cryptocurrency-color:chain",
        //   style: {
        //     color: "#2AA5DC",
        //   },
        // },
        // {
        //   skillName: "Vyper",
        //   fontAwesomeClassname: "file-icons:vyper",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Rust",
          fontAwesomeClassname: "mdi:language-rust",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Move Language",
          fontAwesomeClassname: "mdi:alpha-m-circle",
          style: {
            color: "#1877F2",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Designing and optimizing database",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "ProjectMgmtImg",
      skills: [
        "⚡ Planning, tracking and managing projects effectively using Scrum and Kanban",
        "⚡ Communicating with the stakeholders such as negotiations",
        "⚡ Anticipating and mitigating risks that may impact the project",
      ],
      softwareSkills: [
        {
          skillName: "ClickUp",
          fontAwesomeClassname: "simple-icons:clickup",
          style: {
            color: "#7B68EE",
          },
        },
        {
          skillName: "ProofHub",
          fontAwesomeClassname: "bi:p-square-fill",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "mdi:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Notion",
          fontAwesomeClassname: "radix-icons:notion-logo",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "",
    // },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Saint Louis University",
      subtitle: "Bachelor of Science in Management Accounting",
      logo_path: "slu_logo.png",
      alt_name: "SLU Baguio",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic accounting related subjects such as micro and macroeconomic theories, business statistics, and accounting fundamentals",
        "⚡ Apart from this, I have done courses on Financial Accounting & Reporting, Cost Accounting, Taxation, Auditing, and IT Concepts",
      ],
      website_link: "https://www.slu.edu.ph/",
    },
    {
      title: "University of the Cordilleras",
      subtitle: "Bachelor of Science in Computer Science",
      logo_path: "uc_logo.png",
      alt_name: "UC Baguio",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.uc-bcf.edu.ph/",
    },
    // {
    //   title: "Imperial College London",
    //   subtitle: "Master of Science in Machine Learning and Data Science",
    //   logo_path: "icl_logo.png",
    //   alt_name: "SLU",
    //   duration: "2023 - Present",
    //   descriptions: [
    //     "⚡ This is a graduate program offered by Coursera and Imperial College London",
    //   ],
    //   website_link: "https://www.imperial.ac.uk/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Analytics",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Google",
      color_code: "#0C9D5899", //"#8C151599",
    },
    {
      title: "IT Support",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#0C9D5899", //"#00000099",
    },
    {
      title: "IT Automation with Python",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with some evolving Web3 startups as a data analyst and a community manager. I have also worked with BPO companies where I enhanced my customer support, leadership and program management roles. I am currently looking for a job where I can expand my expertise and share my skills in the benefit of the company.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Junior Data Analyst",
          company: "Covalent",
          company_url: "https://www.covalenthq.com/",
          logo_path: "covalent_logo.png",
          duration: "Nov 2020 - Dec 2022",
          location: "Remote - Burnaby, Canada",
          description:
            "I have worked with providing data insights from different blockchain networks such as Ethereum, Polygon and more. The projects involved finding new trends and pinpointing problems within the networks that benefits our clients. Our team developed the RRR(Reach, Retention, Revenue) model which is our basis for Web3 data analysis. ",
          color: "#0879bf",
        },
        {
          title: "Regional Team Manager",
          company: "Covalent Philippines",
          company_url: "https://www.covalenthq.com/",
          logo_path: "covalentph_logo.jpeg",
          duration: "Nov 2020 - Dec 2022",
          location: "Remote - Burnaby, Canada",
          description:
            "I was chosen as one of the few ambassadors that were tasked to manage our expanding regional communities. I worked with fellow ambassadors to create and increase engagement within our communities. The projects involved connecting with clients and create events to extend the reach of the company.",
          color: "#9b1578",
        },
        {
          title: "Customer Service Representative",
          company: "Sitel",
          company_url: "https://philippines.sitel.com/",
          logo_path: "sitel_logo.png",
          duration: "Aug 2018 - Jan 2019",
          location: "Baguio City, Philippines",
          description:
            "I worked as a CSR for known stores in the US such as Macy's and Bloomingdales. I assisted and handled customers of different personalities either though e-mail, chat or phone support. I also earned a 98% overall customer satisfaction rate from all the customers I've assisted during my tenure. ",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships - actively looking",
      experiences: [
        // {
        //   title: "I am actively looking for one",
        //   company: "",
        //   company_url: "",
        //   logo_path: "",
        //   duration: "",
        //   location: "",
        //   description:
        //     "",
        //   color: "#000000",
        // },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships - open",
      experiences: [
        // {
        //   title: "Actively looking",
        //   company: "...",
        //   company_url: "...",
        //   logo_path: "...",
        //   duration: "...",
        //   location: "...",
        //   description:
        //     "...",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hans.png", // make it animated when have time
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://zorenx.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Baguio City, Philippines 2600",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/V8ZhLncc5ptRsJRw8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
