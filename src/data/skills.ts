import type { SkillsConfig } from '@/types';

export const skillsData: SkillsConfig = {
  sectionId: 'skills',
  categories: [
    {
      title: 'front-end',
      className: 'skill-fe',
      skills: [
        { name: 'javascript', level: 85, className: 'javascript' },
        { name: 'reactjs', level: 85, className: 'reactjs' },
        { name: 'typescript', level: 70, className: 'typescript' },
        { name: 'material ui', level: 70, className: 'materialUI' },
        { name: 'bootstrap', level: 65, className: 'bootstrap' },
        { name: 'react native', level: 40, className: 'react-native' },
      ],
    },
    {
      title: 'back-end',
      className: 'skill-be',
      skills: [
        { name: 'nodejs', level: 60, className: 'nodejs' },
        { name: 'express', level: 60, className: 'express' },
      ],
    },
    {
      title: 'DB / TOOLS',
      className: 'skill-db',
      skills: [
        { name: 'sql', level: 80, className: 'sql' },
        { name: 'mongodb', level: 70, className: 'mongodb' },
        { name: 'git', level: 85, className: 'git' },
        { name: 'heroku', level: 65, className: 'heroku' },
        { name: 'visual code', level: 90, className: 'visual-code' },
      ],
    },
    {
      title: 'mainframe',
      className: 'skill-mainframe',
      skills: [
        { name: 'cobol', level: 95, className: 'cobol' },
        { name: 'cics', level: 90, className: 'cics' },
        { name: 'jcl', level: 90, className: 'jcl' },
        { name: 'vsam', level: 90, className: 'vsam' },
        { name: 'db2', level: 90, className: 'db2' },
        { name: 'control-m', level: 80, className: 'control-m' },
      ],
    },
  ],
};
