import BlogPost from "src/app/models/blogpost.model";
import { SourceTypes } from "../../app/models/Sources.model"

export const multi = [
  // Skill Level on a scale of 1 to
  {
    "name": "HTML/CSS",
    "series": [
      {
        "name": "skillLevel",
        "value": 5
      }
    ]
  },
  {
    "name": "JavaScrjpt / TypeScript",
    "series": [
      {
        "name": "skillLevel",
        "value": 4
      }
    ]
  },
  {
    "name": "Python",
    "series": [
      {
        "name": "skillLevel",
        "value": 3.5
      }
    ]
  },
  {
    "name": "Solidity",
    "series": [
      {
        "name": "skillLevel",
        "value": 0.5
      }
    ]
  },

  {
    "name": "Bash",
    "series": [
      {
        "name": "skillLevel",
        "value": 3
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "1990",
        "value": 250000000
      },
      {
        "name": "2010",
        "value": 309000000
      },
      {
        "name": "2011",
        "value": 311000000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "1990",
        "value": 58000000
      },
      {
        "name": "2010",
        "value": 50000020
      },
      {
        "name": "2011",
        "value": 58000000
      }
    ]
  },
  {
    "name": "UK",
    "series": [
      {
        "name": "1990",
        "value": 57000000
      },
      {
        "name": "2010",
        "value": 62000000
      },
      {
        "name": "2011",
        "value": 72000000
      }
    ]
  }
];
// export const skillsAbbreviated = [
//   {
//     "name": "JavaScript & TypeScript",
//     "value": "4.5"
//   },
//   {
//     "name": "Python",
//     "value": "4"
//   },
//   {
//     "name": "Angular",
//     "value": "4.25"
//   },
//   {
//     "name": "Express",
//     "value": "4.5"
//   },
//   {
//     "name": "Express",
//     "value": "4"
//   },
//   {
//     "name": "MongoDB",
//     "value": "4"
//   }
// ];
export const programmingLanguages = [
  {
    name: "JavaScript",
    value: 8.5
  },
  {
    name: "Python",
    value: 9
  },
  {
    name: "Bash",
    value: 8
  },
  {
    name: "Solidity",
    value: 8
  }
];
export const frontendSkills = [
  {
    name: "Angular",
    value: 8.5
  },
  {
    name: "React",
    value: 7.75
  },
  {
    name: "Bootstrap",
    value: 9
  },
  {
    name: "HTML/CSS",
    value: 9.5
  },
];
export const backendSkills = [
  {
    name: "Express.js",
    value: 9.5
  },
  {
    name: "Django",
    value: 9
  },
  {
    name: "Serveless API Development (AWS, GCP)",
    value: 8
  },
  {
    name: "MongoDB",
    value: 9.5
  },
  {
    name: "SQL",
    value: 9.5
  },
];
export const marketingSkills = [
  {
    name: "Headless & Traditional CMS Systems",
    value: 8.75
  },
  {
    name: "eCommerce Development",
    value: 8
  },
  {
    name: "CRM Use & Integration",
    value: 8.5
  },
  {
    name: "Email Marketing",
    value: 8
  }
];
// TODO: convert to multi schema & aggregate pl, fs, bs, and ms arrays
// export const skillsFull = [
//   {
//     "name": "HTML/CSS",
//     "value": 4
//   },
//   {
//     "name": "JavaScript & Typescript",
//     "value": 4.5
//   },
//   {
//     "name": "Python",
//     "value": 4.5
//   },
//   {
//     "name": "Bash",
//     "value": 4
//   },
//   {
//     "name": "solidity",
//     "value": 3.5
//   },
//   {
//     "name": "Angular",
//     "value": 4.5
//   },
//   {
//     "name": "React",
//     "value": 4
//   },
//   {
//     "name": "Epress.js",
//     "value": 4
//   },
//   {
//     "name": "Django",
//     "value": 4
//   },
//   {
//     "name": "AWS Lambda + API Gateway",
//     "value": 3.5
//   },
//   {
//     "name": "MongoDB",
//     "value": 4.5
//   },
//   {
//     "name": "T-SQL",
//     "value": 4
//   },
//   {
//     "name": "OAuth2 w/ JSON Web Tokens",
//     "value": 4
//   },
//   {
//     "name": "Private/Public Key Cryptography",
//     "value": 4
//   },
//   {
//     "name": "Docker & Kubernetes",
//     "value": 4
//   },
//   {
//     "name": "CI/CD",
//     "value": 4
//   },
//   {
//     "name": "Git",
//     "value": 4
//   }
// ];
export const blogPosts: BlogPost[] = [
  {
    postId: '0x001',
    title: 'Example Post 1',
    slug: 'example-post-1',
    authorName: 'Joshua David Healey',
    authorId: '0x007',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore doloribus',
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore
      doloribus accusantium quia rem rerum voluptates, temporibus enim ad nesciunt
      repudiandae soluta sit quae sequi accusamus non cumque vero explicabo. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Culpa quae labore numquam
      eos dicta, dignissimos eveniet consectetur quasi recusandae totam ipsum ducimus
      quod, nemo reiciendis aliquam illo voluptatibus nulla ipsam.
    `,
    sources: {
      sources: [
        {
          type: SourceTypes.Documentation,
          title: 'A Solemn Night at The OK Corral',
          authorId: '0x303',
          authorName: "Joshua David Healey",
          externalUrl: 'https://medium.com/joshua-david-healey',
          displayLocal: false,
        }
      ]
    }
  },
  {
    postId: '0x002',
    title: 'Example Post 2',
    slug: 'example-post-2',
    authorName: 'Joshua David Healey',
    authorId: '0x007',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore doloribus',
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore
      doloribus accusantium quia rem rerum voluptates, temporibus enim ad nesciunt
      repudiandae soluta sit quae sequi accusamus non cumque vero explicabo. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Culpa quae labore numquam
      eos dicta, dignissimos eveniet consectetur quasi recusandae totam ipsum ducimus
      quod, nemo reiciendis aliquam illo voluptatibus nulla ipsam.
    `,
    sources: {
      sources: [
        {
          type: SourceTypes.Documentation,
          title: 'A Solemn Night at The OK Corral',
          authorId: '0x303',
          authorName: "Joshua David Healey",
          externalUrl: 'https://medium.com/joshua-david-healey',
          displayLocal: false,
        }
      ]
    }
  },
  {
    postId: '0x003',
    title: 'Example Post 3',
    slug: 'example-post-3',
    authorName: 'Joshua David Healey',
    authorId: '0x007',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore doloribus',
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore
      doloribus accusantium quia rem rerum voluptates, temporibus enim ad nesciunt
      repudiandae soluta sit quae sequi accusamus non cumque vero explicabo. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Culpa quae labore numquam
      eos dicta, dignissimos eveniet consectetur quasi recusandae totam ipsum ducimus
      quod, nemo reiciendis aliquam illo voluptatibus nulla ipsam.
    `,
    sources: {
      sources: [
        {
          type: SourceTypes.Documentation,
          title: 'A Solemn Night at The OK Corral',
          authorId: '0x303',
          authorName: "Joshua David Healey",
          externalUrl: 'https://medium.com/joshua-david-healey',
          displayLocal: false,
        }
      ]
    }
  },
  {
    postId: '0x004',
    title: 'Example Post 4',
    slug: 'example-post-4',
    authorName: 'Joshua David Healey',
    authorId: '0x007',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore doloribus',
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore
      doloribus accusantium quia rem rerum voluptates, temporibus enim ad nesciunt
      repudiandae soluta sit quae sequi accusamus non cumque vero explicabo. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Culpa quae labore numquam
      eos dicta, dignissimos eveniet consectetur quasi recusandae totam ipsum ducimus
      quod, nemo reiciendis aliquam illo voluptatibus nulla ipsam.
    `,
    sources: {
      sources: [
        {
          type: SourceTypes.Documentation,
          title: 'A Solemn Night at The OK Corral',
          authorId: '0x303',
          authorName: "Joshua David Healey",
          externalUrl: 'https://medium.com/joshua-david-healey',
          displayLocal: false,
        }
      ]
    }
  },
  {
    postId: '0x005',
    title: 'Example Post 5',
    slug: 'example-post-5',
    authorName: 'Joshua David Healey',
    authorId: '0x007',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore doloribus',
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore
      doloribus accusantium quia rem rerum voluptates, temporibus enim ad nesciunt
      repudiandae soluta sit quae sequi accusamus non cumque vero explicabo. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Culpa quae labore numquam
      eos dicta, dignissimos eveniet consectetur quasi recusandae totam ipsum ducimus
      quod, nemo reiciendis aliquam illo voluptatibus nulla ipsam.
    `,
    sources: {
      sources: [
        {
          type: SourceTypes.Documentation,
          title: 'A Solemn Night at The OK Corral',
          authorId: '0x303',
          authorName: "Joshua David Healey",
          externalUrl: 'https://medium.com/joshua-david-healey',
          displayLocal: false,
        }
      ]
    }
  },
  {
    postId: '0x006',
    title: 'Example Post 6',
    slug: 'example-post-6',
    authorName: 'Joshua David Healey',
    authorId: '0x007',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore doloribus',
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore
      doloribus accusantium quia rem rerum voluptates, temporibus enim ad nesciunt
      repudiandae soluta sit quae sequi accusamus non cumque vero explicabo. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Culpa quae labore numquam
      eos dicta, dignissimos eveniet consectetur quasi recusandae totam ipsum ducimus
      quod, nemo reiciendis aliquam illo voluptatibus nulla ipsam.
    `,
    sources: {
      sources: [
        {
          type: SourceTypes.Documentation,
          title: 'A Solemn Night at The OK Corral',
          authorId: '0x303',
          authorName: "Joshua David Healey",
          externalUrl: 'https://medium.com/joshua-david-healey',
          displayLocal: false,
        }
      ]
    }
  },
  {
    postId: '0x007',
    title: 'Example Post 7',
    slug: 'example-post-7',
    authorName: 'Joshua David Healey',
    authorId: '0x007',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore doloribus',
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore
      doloribus accusantium quia rem rerum voluptates, temporibus enim ad nesciunt
      repudiandae soluta sit quae sequi accusamus non cumque vero explicabo. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Culpa quae labore numquam
      eos dicta, dignissimos eveniet consectetur quasi recusandae totam ipsum ducimus
      quod, nemo reiciendis aliquam illo voluptatibus nulla ipsam.
    `,
    sources: {
      sources: [
        {
          type: SourceTypes.Documentation,
          title: 'A Solemn Night at The OK Corral',
          authorId: '0x303',
          authorName: "Joshua David Healey",
          externalUrl: 'https://medium.com/joshua-david-healey',
          displayLocal: false,
        }
      ]
    }
  },
]
