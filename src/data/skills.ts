import type { SkillsConfig } from '@/types';

export const skillsData: SkillsConfig = {
  sectionId: 'skills',
  categories: [
    {
      title: 'frontend core',
      className: 'skill-fe',
      skills: [
        { name: 'react', level: 95, className: 'reactjs' },
        { name: 'next.js', level: 90, className: 'nextjs' },
        { name: 'typescript', level: 95, className: 'typescript' },
        { name: 'javascript', level: 95, className: 'javascript' },
        { name: 'html5 / css3', level: 95, className: 'html-css' },
      ],
    },
    {
      title: 'ui libraries & state',
      className: 'skill-frameworks',
      skills: [
        { name: 'material ui', level: 90, className: 'materialUI' },
        { name: 'chakra ui', level: 90, className: 'chakraUI' },
        { name: 'shadcn ui', level: 85, className: 'shadcnUI' },
        { name: 'tailwind css', level: 90, className: 'tailwind' },
        { name: 'redux / redux toolkit', level: 90, className: 'redux' },
        { name: 'react query', level: 85, className: 'react-query' },
        { name: 'context api', level: 90, className: 'context-api' },
      ],
    },
    {
      title: 'tools & practices',
      className: 'skill-be',
      skills: [
        { name: 'git / github / bitbucket', level: 95, className: 'git' },
        { name: 'storybook', level: 85, className: 'storybook' },
        { name: 'react hook form', level: 90, className: 'hookform' },
        { name: 'jest / testing', level: 80, className: 'testing' },
        { name: 'design systems', level: 85, className: 'design-systems' },
        { name: 'scrum / agile', level: 90, className: 'agile' },
        { name: 'jira', level: 85, className: 'jira' },
      ],
    },
    {
      title: 'backend & deployment',
      className: 'skill-db',
      skills: [
        { name: 'rest apis', level: 90, className: 'apis' },
        { name: 'api integration', level: 90, className: 'integration' },
        { name: 'ssr / code splitting', level: 85, className: 'ssr' },
        { name: 'typeorm', level: 75, className: 'typeorm' },
        { name: 'ci/cd', level: 80, className: 'cicd' },
        { name: 'vercel / aws', level: 85, className: 'deployment' },
      ],
    },
  ],
};
